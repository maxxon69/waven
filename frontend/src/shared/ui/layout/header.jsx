import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <nav className={'w-full flex grow items-center py-4 px-8 border border-b-white'}>
            <ul className={'flex gap-8 text-white text-lg font-semibold'}>
                <li><Link href={'#'}>World Map</Link></li>
                <li><Link href={'/'}>Build Maker</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
