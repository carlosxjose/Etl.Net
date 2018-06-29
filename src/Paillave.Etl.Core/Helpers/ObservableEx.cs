﻿using System;
using System.Reactive.Subjects;
using System.Collections.Generic;
using System.Text;
using System.Reactive.Disposables;
using Paillave.Etl.Core.System;

namespace System.Reactive.Linq
{
    public static class ObservableEx
    {
        public static IObservable<Tuple<TResult, TResult>> PairWithPrevious<TResult>(this IObservable<TResult> sourceS)
        {
            return sourceS.Scan<TResult, Tuple<TResult, TResult>>(null, (a, v) => new Tuple<TResult, TResult>(a == null ? v : a.Item2, v));
        }
        private class Side<T>
        {
            public bool IsComplete { get; set; } = false;
            private Queue<T> _queue = new Queue<T>();
            public bool IsEmpty { get { return _queue.Count == 0; } }
            public T CurrentValue { get { return _queue.Peek(); } }
            public T Dequeue() => _queue.Dequeue();
            public void Enqueue(T element) => _queue.Enqueue(element);
        }
        //public static IObservable<TOut> LeftJoin<TInLeft, TInRight, TKey, TOut>(this IObservable<TInLeft> leftS, IObservable<TInRight> rightS, Func<TInLeft, TKey> leftKey, Func<TInRight, TKey> rightKey, Func<TInLeft, TInRight, TOut> selector) where TKey : IComparable<TKey>
        public static IObservable<TOut> LeftJoin<TInLeft, TInRight, TOut>(this IObservable<TInLeft> leftS, IObservable<TInRight> rightS, IComparer<TInLeft, TInRight> comparer, Func<TInLeft, TInRight, TOut> selector)
        {
            return Observable.Create<TOut>(observer =>
            {
                var leftSide = new Side<TInLeft>();
                var rightSide = new Side<TInRight>();

                object gate = new object();

                Action TryUnstackQueues = () =>
                {
                    bool somethingChanged;
                    do
                    {
                        somethingChanged = false;
                        while (!rightSide.IsEmpty && !leftSide.IsEmpty && comparer.Compare(leftSide.CurrentValue, rightSide.CurrentValue) > 0)
                        {
                            rightSide.Dequeue();
                            somethingChanged = true;
                        }

                        int comparison;
                        while (!leftSide.IsEmpty && !rightSide.IsEmpty && (comparison = comparer.Compare(leftSide.CurrentValue, rightSide.CurrentValue)) <= 0)
                        {
                            observer.OnNext(selector(leftSide.Dequeue(), comparison == 0 ? rightSide.CurrentValue : default(TInRight)));
                            somethingChanged = true;
                        }

                        if (rightSide.IsEmpty && rightSide.IsComplete)
                            while (!leftSide.IsEmpty)
                            {
                                observer.OnNext(selector(leftSide.Dequeue(), default(TInRight)));
                                somethingChanged = true;
                            }
                    } while (somethingChanged);
                    if (leftSide.IsComplete && rightSide.IsComplete) observer.OnCompleted();
                };
                SingleAssignmentDisposable leftSubscription = new SingleAssignmentDisposable
                {
                    Disposable = leftS.Subscribe(
                        (leftValue) =>
                        {
                            lock (gate)
                            {
                                leftSide.Enqueue(leftValue);
                                TryUnstackQueues();
                            }
                        },
                        () =>
                        {
                            lock (gate)
                            {
                                leftSide.IsComplete = true;
                                TryUnstackQueues();
                            }
                        }
                    )
                };
                SingleAssignmentDisposable rightSubscription = new SingleAssignmentDisposable
                {
                    Disposable = rightS.Subscribe(
                        (rightValue) =>
                        {
                            lock (gate)
                            {
                                rightSide.Enqueue(rightValue);
                                TryUnstackQueues();
                            }
                        },
                        () =>
                        {
                            lock (gate)
                            {
                                rightSide.IsComplete = true;
                                TryUnstackQueues();
                            }
                        }
                    )
                };

                return new CompositeDisposable(leftSubscription, rightSubscription);
            });
        }
    }
}
