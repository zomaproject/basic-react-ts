import { useState } from 'react';


interface Props {
    initialValue: number
}
export const Counter = ({ initialValue }: Props) => {

    const [counter, setCounter] = useState(initialValue);

    const handleClick = (value: number) => {
        setCounter(counter + value)
    }

    const handleReset = () => {
        setCounter(0)
    }
    return (
        <div className='w-1/2 flex-col p-3  flex justify-center items-center mt-10  mx-auto border rounded-md shadow'>
            <h1 className='text-center font-black text-lg'>Counter with TypeScript</h1>
            <span className='block font-bold text-lg'>
                Counter: {counter}
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
                    onClick={handleReset}
                    className='bg-sky-600 px-9  py-2  font-bold  text-sm rounded-md text-white border hover:cursor-pointer'
                >Reset</button>
            </div>
        </div>
    )
}
