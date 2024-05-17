"use client";

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image
                    src="/logo-G.png"
                    alt="logo G"
                    width={54}
                    height={54}
                />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                        className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>

            <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                onClick={toggleDropdown}
            />
            {isDropdownOpen && (
                <div className="absolute flexEnd top-full lg:w-auto bg-opacity-75 z-50">
                    <ul className="py-4 lg:py-0">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key}>
                                <Link href={link.href} className="block px-4 py-2 text-gray-50 hover:font-bold transition-all">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
