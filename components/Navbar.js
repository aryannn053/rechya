import React from 'react';

export const Navbar = () => {
    return (
        <nav className="border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 pt-16">
            <div className="items-center justify-between w-full md:flex md:w-auto md:order-1 flex-wrap" id="navbar-cta">
                <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-16 rtl:space-x-reverse md:flex-row md:mt-0 md:justify-center text-xl">
                    <li>
                        <a href="#experience" className="block py-2 px-3 md:p-0 hover:text-gray-400 rounded dark:text-gray-600 md:text-gray-600 sm:text-gray-600 text-center navbar-heading">Rechya</a>
                    </li>
                    <li>
                        <a href="#projects" className="block py-2 px-3 md:p-0 hover:text-gray-400 rounded dark:text-gray-600 md:text-gray-600 sm:text-gray-600 navbar-heading text-center">About</a>
                    </li>
                    <li>
                        <a href="#achievements" className="block py-2 px-3 md:p-0 hover:text-gray-400 rounded dark:text-gray-600 md:text-gray-600 sm:text-gray-600 navbar-heading text-center">Features</a>
                    </li>
                    <li>
                        <a href="#skills" className="block py-2 px-3 md:p-0 hover:text-gray-400 rounded dark:text-gray-600 md:text-gray-600 sm:text-gray-600 navbar-heading text-center">Support</a>
                    </li>
                    <li>
                        <a href="#miscellaneous" className="block py-2 px-3 md:p-0 hover:text-gray-400 rounded dark:text-gray-600 md:text-gray-600 sm:text-gray-600 navbar-heading text-center">FAQ</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}