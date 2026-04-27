import React, { useState } from 'react';

const State = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <div className='flex flex-col items-center justify-center mt-5 mb-5'>
            <h1 className='flex justify-center text-3xl' >using the useState Hook</h1>
            <h1>{count}</h1>
            <button
                onClick={handleButtonClick}
                className='bg-blue-500 text-white px-4 py-2 rounded mt-2'
            >
                Click Me
            </button>
        </div>
    );
};

export default State;