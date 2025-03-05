import React from "react";

const Grid = () => {
    return (
        <section className="bg-black text-white flex items-center justify-center pt-16 pb-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left">

                <div className="grid grid-cols-3 gap-6 justify-items-center">
                    <p className="text-2xl font-extrabold opacity-90">doradesign</p>
                    <p className="text-2xl font-extrabold opacity-90">wave</p>
                    <p className="text-2xl font-extrabold opacity-90">SILSILA</p>
                </div>

                <div className="max-w-md text-sm text-gray-300 leading-relaxed tracking-wide pl-6">
                    <p className="break-words">
                        Welcome to my portfolio. Here, artistry meets functionality.
                        Explore a curated showcase of unique branding and web designs,
                        each crafted to captivate and inspire.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Grid;
