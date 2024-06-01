import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Glasses, Moon, Sun, User } from 'lucide-react'
import Link from 'next/link'

const Nav = (
        {isLogged}:
        {isLogged?:boolean}
    ) => {
    return (
        <nav className="sticky top-0 z-[100] border-b border-gray-200 bg-neutral/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper className='navbar'>
                <Link href="/" className="flex-1 gap-2">
                    <Glasses />
                    <p className="font-semibold text-xl">Monitoring food expiry</p>
                </Link>
                <div className="flex-none">
                    <label className="flex cursor-pointer gap-2 flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input type="checkbox" value="tdark" className="toggle toggle-sm theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                <div className="flex-none md:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full flex content-center">
                                <User className='mx-auto' />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href="/logout">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Nav