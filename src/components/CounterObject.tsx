import { useState } from 'react';


interface counterState {
    counter: number,
    clicks: number

}

export const CounterObject = () => {

    const [{clicks, counter}, setCounterState] = useState<counterState>({
        counter: 0,
        clicks: 0
    });

    const handleClick = (value: number) => {
        setCounterState(({ clicks, counter }) => ({
            counter: counter + value,
            clicks: clicks + 1
        }))
    }

    const handleReset = () => {
        setCounterState(({ counter, clicks }) => ({ counter: 0, clicks: 0 }))
    }
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
                    onClick={() => handleClick(1)}
                >
                    +1
                </button>

                <button
                    type='button'
                    className='bg-sky-600 px-9  mr-2 py-2  font-bold  text-sm rounded-md text-white border hover:cursor-pointer'
                    onClick={() => handleClick(20)}
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
