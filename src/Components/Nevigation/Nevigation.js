import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Nevigation = () => {
    //Hamburger icon toggle er jonno state
    const [ open, setOpen ] = useState(false);
    return (
        <nav className="bg-green-600 text-white py-4 md:py-1">
            {/* !open mane jodi open er value false thake tobe click korle true set hobe r true thakle false set hoye jabe */}
            <div onClick={() => setOpen(!open)} className="h-6 w-6 text-white md:hidden cursor-pointer" >
                {/* open er value true thakle cross icon dekhabe r false thakle Hamburger icon. ei jonno default value useState er vitor false, jate default vabe Hamburger icon dekhay */}
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            {/* Dynamic class.... Jodi open er value true hoy, mane cross icon thake tobe tobe ul dekhabe, top thake olpo ektu nica asbe r jodi open er value false hoy mane hamburger icon thake tobe top theke -200px upore uthe jabe mane dekha jabe na default vabe */}
            <ul className={`bg-green-600 w-full text-lg py-2 md:flex md:justify-center absolute md:static duration-500 ease-in-out ${open ? "top-10" : "top-[-200px]"}`}>
                <li className='p-2 md:mx-2'><a href="/about">About</a></li>
                <li className='p-2 md:mx-2'><a href="/home">Home</a></li>
                <li className='p-2 md:mx-2'><a href="/blog">Blog</a></li>
                <li className='p-2 md:mx-2'><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nevigation;