import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
        <div className='flex space-x-5'>
            <Link href={"/"}>Technology</Link>
            <Link href={"/"}>Gadget</Link>
            <Link href={"/"}>Software</Link>
            <Link href={"/"}>Apps</Link>
            <Link href={"/"}>Games</Link>
            <Link href={"/"}>Podcasts</Link>
        </div>
    );
};

export default Menu;