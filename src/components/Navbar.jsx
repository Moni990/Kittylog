import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import HomeIcon from '../icons/Home';
import LiveIcon from '../icons/Live';
import AccountIcon from '../icons/Account';
import HomeActivIcon from '../icons/HomeActive';
import LiveActiveIcon from '../icons/LiveActive';
import AccountActiveIcon from '../icons/AccountActive';

export default function Navbar() {
    const { pathname } = useLocation();
    const go = useNavigate();

    return (
        <nav className="fixed flex-shrink-0 bg-white bottom-0 w-full h-[60px] bg-opacity-60 backdrop-blur text-fs-sm max-w-[480px] shadow-[0px_-1px_5px] shadow-gray-500/10">
            <div className="flex flex-row h-full text-yellow-200">
                <div
                    className="flex-1 flex items-center flex-col justify-center"
                    onClick={() => go('/')}
                >
                    {pathname === '/'
                        ? <HomeActivIcon className="w-6" />
                        : <HomeIcon className="w-6" />}
                    <span>Home</span>
                </div>
                <div
                    className="flex-1 flex items-center flex-col justify-center"
                    onClick={() => go('/explore')}
                >
                    {pathname === '/explore'
                        ? <LiveActiveIcon className="w-6" />
                        : <LiveIcon className="w-6" />}
                    <span>Live</span>
                </div>
                <div
                    className="flex-1 flex items-center flex-col justify-center"
                    onClick={() => go('/account')}
                >
                    {pathname === '/account'
                        ? <AccountActiveIcon className="w-6" />
                        : <AccountIcon className="w-6" />}
                    <span>Account</span>
                </div>
            </div>
        </nav>
    )
}