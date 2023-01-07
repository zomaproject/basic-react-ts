import { useState } from 'react';
import { UseCounter } from '../hooks/useCounter';


const INITIAL_STATE = {
    counter: 20,
    clicks: 0
}
export const CounterObjectCustomHook = () => {

    const {clicks, counter,handleCounter,handleReset} = UseCounter(INITIAL_STATE)   
    return (
        <div className='w-1/2 flex-col p-3  flex justify-center items-center mt-10  mx-auto border rounded-md shadow'>
            <h1 className='text-center font-black text-lg'>Counter with TypeScript</h1>
            <span className='block font-bold text-lg'>
                Counter: {counter}
            </span>

            <span className='block font-bold text-lg'>
                clicks: {clicks}
            </span>
            <div className=' mt-10'>
                <button
                    type='button'
                    className='bg-sky-600 px-9  mr-2 py-2  font-bold  text-sm rounded-md text-white border hover:cursor-pointer'
                    onClick={() => handleCounter(1)}
                >
                    +1
                </button>

                <button
                    type='button'
                    className='bg-sky-600 px-9  mr-2 py-2  font-bold  text-sm rounded-md text-white border hover:cursor-pointer'
                    onClick={() => handleCounter(20)}
                >
                    +20
                </button>
                <button
                    onClick={handleReset}
                    className='bg-sky-600 px-9  py-2  font-bold  text-sm rounded-md text-white border hover:cursor-pointer'
                >Reset</button>
            </div>
        </div>
    )
}
