import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 flex flex-col items-center text-center">
            <div className="flex gap-6 text-4xl font-bold tracking-widest uppercase" style={{ fontFamily: "'Syne Inline', sans-serif" }}>
                <span className="border-b-2 border-white pb-1">Flow</span>
                <span className="text-lg">✹</span>
                <span className="border-b-2 border-white pb-1">Figma</span>
                <span className="text-lg">✹</span>
                <span className="border-b-2 border-white pb-1">Designer</span>
                <span className="text-lg">✹</span>
                <span className="border-b-2 border-white pb-1">Developer</span>
            </div>


            <h1 className="text-6xl pt-9 font-extrabold mt-10">LET’S TALK!</h1>

            <a href="mailto:rehanurraihan@gmail.com" className="mt-4 text-lg underline hover:text-gray-400 transition">
                rehanurraihan@gmail.com ↗
            </a>

            <div className="mt-8 flex justify-between items-center text-gray-400 text-sm w-full">
                <div>© Rehan Raihan - 2023</div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition">Dribbble</a>
                    <a href="#" className="hover:text-white transition">Behance</a>
                    <a href="#" className="hover:text-white transition">Twitter</a>
                    <a href="#" className="hover:text-white transition">Instagram</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
