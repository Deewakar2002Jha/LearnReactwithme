import React, { memo, useRef } from 'react'

const MemoCount = () => {
    const renderCount = useRef(0);
    console.log(renderCount);
    return (
        <div className='mt-3 font-display text-center'>
            <p className="">
                Nothing changed here but i ve now rendered again because of the parent component re-rendering but if i use `useMemo` hook in parent component then this component will not re-render until its props change.
            </p>
            <span className='text-red-600'>This is a memoized component.{renderCount.current++} time(s)</span>
        </div>
    )
}

export default memo(MemoCount) 