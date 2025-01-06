import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {headerLogo} from '../../public/assets/images';
import { hamburger } from '../../public/assets/icons';
import {navLinks} from '../constants'
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <Link href={"/"}>
          <Image src={headerLogo} alt={"logo"} width={130} height={29} />
        </Link>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
            <Image src={hamburger} alt={"menu"} width={25} height={25} className="hidden max-lg:block" />
        </div>
      </nav>
    </header>
  );
}

export default Nav