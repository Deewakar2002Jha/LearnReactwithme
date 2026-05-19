import React from 'react'
import { useState } from 'react';
import Counts from './MemoCount';

const Countermemo = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className='p-4 h-52 font-display trackng-wider flex flex-col justify-end items-center'>
                <h1>{count}</h1>
                <button className='btn bg-cyan-500 py-1 px-3' onClick={() => setCount((prev) => prev + 1)}>
                    Increment
                </button>
            </div>
            <Counts />
        </>
    )
}

export default Countermemo