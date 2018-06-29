﻿using Paillave.Etl.Core.System;
using System;
using System.Collections.Generic;
using System.Text;
using System.Reactive.Linq;

namespace Paillave.Etl.Core.StreamNodes
{
    public class SkipStreamNode<I> : OutputStreamNodeBase<I>
    {
        public SkipStreamNode(IStream<I> inputStream, int count, string name, IEnumerable<string> parentsName = null) : base(inputStream, name, parentsName)
        {
            this.CreateOutputStream(inputStream.Observable.Skip(count));
        }
    }
    public static partial class StreamEx
    {
        public static IStream<I> Skip<I>(this IStream<I> stream, string name, int count)
        {
            return new SkipStreamNode<I>(stream, count, name).Output;
        }
    }
}
