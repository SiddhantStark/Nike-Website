import React from 'react';
import {headerLogo} from '../assets/images/index';
import {hamburger} from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <a href="/">
            <img 
            src={headerLogo} 
            alt="Logo" 
            width={130}
            height={29}
            />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>

        </ul>
    </header>
  )
}

export default Nav
