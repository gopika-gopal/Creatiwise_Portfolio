import React, { useState } from "react";

const Header = () => {
    const [active, setActive] = useState("Home");

    const menuItems = ["Home", "About", "Projects", "Contact"];

    return (
        <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
            <h1 className="text-lg font-bold cursor-pointer">Logo</h1>

            <nav className="hidden min-[500px]:flex">
                <ul className="flex space-x-6">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setActive(item)}
                                className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${active === item ? "bg-white text-black" : "hover:bg-white hover:text-black"
                                    }`}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <button
                className="bg-black text-white border border-white px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-white hover:text-black"
                onClick={() => alert("Hire Me button clicked!")}
            >
                HIRE ME
            </button>
        </header>
    );
};

export default Header;
