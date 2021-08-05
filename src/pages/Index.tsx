import React, { FC, useState } from 'react'
import { SwitchVerticalIcon, ChevronDownIcon } from '@heroicons/react/outline'
import IPage from '../interfaces/page'
import logo from '../assets/images/logo.svg'
import Apollo from '../components/Apollo'

const Index: FC<IPage> = (props) => {

    const [count, setCount] = useState(0)

    return (
        <div className="flex justify-center flex-col items-center space-y-4">
            <img src={logo} className="animate-spin m-auto h-96" alt="logo" />
            <p className="text-black dark:text-white">Hello Vite + React + Apollo + Tailwind CSS (VRAT)!</p>
            <p>
                <button onClick={() => setCount((count) => count + 1)} className="bg-black px-4 py-1 rounded text-white font-base hover:bg-gray-700 dark:bg-white dark:text-black focus:outline-none focus:ring-2 ">
                    count is: {count}
                </button>
            </p>
            <p className="text-black dark:text-white">
                Edit <code>/pages/Index.tsx</code> and save to test HMR updates.
            </p>
            <p>
                <a
                    className="text-black dark:text-white"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {' | '}
                <a
                    className="text-black dark:text-white"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vite Docs
                </a>
                {' | '}
                <a
                    className="text-black dark:text-white"
                    href="https://www.apollographql.com/docs/react/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Apollo Docs
                </a>
            </p>
            <p>
                <div className="bg-black text-white dark:text-black dark:bg-white rounded">
                    <div className="p-4 font-medium">Expample Apollo Query</div>
                    <div className="px-5 max-h-40 overflow-y-scroll">
                        <Apollo />
                    </div>
                </div>
            </p>
        </div>
    )
}

export default Index