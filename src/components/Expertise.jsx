import React from "react";
import { FaRegStar } from "react-icons/fa";

const expertiseData = [
    {
        title: "Branding",
        description:
            "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
        title: "UI Design",
        description:
            "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
        title: "UX Design",
        description:
            "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
    },
    {
        title: "Development",
        description:
            "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
    },
];

const Expertise = () => {
    return (
        <section className="bg-black text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold flex items-center  gap-3">
                    <FaRegStar className="text-xl" /> Expertise
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                    {expertiseData.map((item, index) => (
                        <div key={index} className="text-left">
                            <h3 className="text-xl font-semibold">▪ {item.title}</h3>
                            <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
