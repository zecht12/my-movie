import { useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineBell} from 'react-icons/ai'
import {MdOutlineAccountCircle} from 'react-icons/md'


export default function Header () {
const [nav, setNav] = useState(false)
const [color, setColor] = useState(false)

const handleNav = () => {
    setNav(!nav)
}
useEffect (() => {
const changeColor = () => {
    if(window.scrollY >= 20) {
        setColor(true);
    } else {
        setColor(false);
    }
}

window.addEventListener('scroll', changeColor);
return() => {
    window.removeEventListener('scroll', changeColor);
}
},[])

return (
<header>
    <div className={color ? "fixed w-full h-20 bg-gray-800 z-[100]" : " fixed w-full h-20 z-[100]"}>
        <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16 '>
            <Image src='' alt="" width='80' height='80' />
        <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-base uppercase text-slate-200  hover:text-blue-600' >home</li>
                </Link>
                <Link href='./'>
                    <li className='ml-10 text-base uppercase hover:text-blue-600 text-slate-200'>Tv Shows</li>
                </Link>
                <Link href='./'>
                    <li className='ml-10 text-base uppercase hover:text-blue-600 text-slate-200'>Movies</li>
                </Link>
                <Link href='./'>
                    <li className='ml-10 text-base uppercase hover:text-blue-600 text-slate-200'>New & Popular</li>
                </Link>
                <Link href='./'>
                    <li className='ml-10 text-base uppercase hover:text-blue-600 text-slate-200'>My List</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25} className='text-slate-100'/>
            </div>
        </div>
        </div>
        <div className={nav ? 'fixed md:hidden  left-0 top-0 w-full h-screen bg-black/70' : "" }>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-gray-800' : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"}>
                <div>
                    <div className='flex w-full  items-center justify-between'>
                        <Image src='' alt='' width='65' height='35'  />
                        <div onClick={handleNav} className='rounded-full bg-slate-100 shadow-lg shadow-blue-600 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul>
                        <Link href='/'>
                            <li className='ml-10 pt-10 text-base uppercase text-slate-200' >home</li>
                        </Link>
                        <Link href='./'>
                            <li className='ml-10 pt-10 text-base uppercase text-slate-200'>Tv Shows</li>
                        </Link>
                        <Link href='./'>
                            <li className='ml-10 pt-10 text-base uppercase text-slate-200'>Movies</li>
                        </Link>
                        <Link href='./'>
                            <li className='ml-10 pt-10 text-base uppercase text-slate-200'>New & Popular</li>
                        </Link>
                        <Link href='./'>
                            <li className='ml-10 pt-10 text-base uppercase text-slate-200'>My List</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
        <div className={color ? "w-full h-7 md:pb-12 pb-6 bg-gray-800 shadow-xl z-[100]" : "w-full h-7 md:pb-12 pb-6 shadow-xl z-[100]"}>
            <div className='h-full w-full flex md:px-36 px-8 justify-between items-center'>
                <div >
                    <AiOutlineSearch className='text-slate-200' size={25}/>
                </div>
                <div className='flex'>
                    <Link href='./Account'>
                        <MdOutlineAccountCircle className='text-slate-200 hover:text-blue-500 cursor-pointer' size={25}/>
                    </Link>
                    <AiOutlineBell className='text-slate-200 hover:text-blue-500 cursor-pointer' size={25}/>
                </div>
            </div>
        </div>
    </div>
</header>
)
}