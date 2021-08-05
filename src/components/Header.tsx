import React, { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import useDarkMode from '../hooks/useDarkMode'

const Header: FC = () => {
    const [colorTheme, setTheme] = useDarkMode()

    return (
        <div>
            <button onClick={() => setTheme(colorTheme)} className="whitespace-nowrap inline-flex items-center justify-center p-7 rounded-mdtext-base font-medium">
                {colorTheme === 'light' ? (<SunIcon className="h-12 w-12 text-white transition duration-500" />) : (<MoonIcon className="h-12 w-12 transition duration-500 text-black" />)}
            </button>
        </div>
    )
}

export default Header