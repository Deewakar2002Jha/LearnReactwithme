import React, { useState } from 'react'

constExpensiveComponent = () => {
    const sum = () => {
        console.log('calculating sum ..');
        let i = 0;
        for (i = 0; i <= 10000000; i++) {
            i = i + 1;
        }
        return i;

        const total = Sum();
        return <p>sum: {total} </p>
    }
}
const UseMemo = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='p-4 h-lvh font-display tracking-winder tracking-winder flex flex-col justify-center items-center'>
            <ExpensiveComponent />
            <button onClick={() => setCount(count + 1)}
                className='bg-blue-500 text-white px-3 py-2 rounded-md mt-3 font-display'>
                Increment count {count}
            </button>
            <p>Parent re-renders: {count}</p>
        </div>
    )
}

export default UseMemo