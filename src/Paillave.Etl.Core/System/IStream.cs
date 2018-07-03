﻿using System;
using System.Collections.Generic;

namespace Paillave.Etl.Core.System
{
    public interface IStream<T>
    {
        IObservable<T> Observable { get; }
        IExecutionContext ExecutionContext { get; }
    }
}