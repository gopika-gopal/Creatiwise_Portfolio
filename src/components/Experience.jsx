import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";

const experienceData = [
    {
        role: "Lead Product Designer",
        company: "Fortknox",
        date: "Mar 2022 - Oct 2023",
        description: "Led the design team in creating user-centered financial solutions with intuitive UI/UX.",
    },
    {
        role: "Intern Designer",
        company: "OmniSafe",
        date: "Mar 2022 - Oct 2023",
        description: "Worked on UI enhancements and conducted user research to improve user experience.",
    },
    {
        role: "UI Designer",
        company: "Doradesign",
        date: "Mar 2022 - Oct 2023",
        description: "Designed web and mobile interfaces, ensuring consistency and accessibility.",
    },
    {
        role: "Frontend Developer",
        company: "OpacityAuthor",
        date: "Mar 2022 - Oct 2023",
        description: "Developed responsive front-end applications with modern web technologies.",
    },
];

const Experience = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDescription = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold flex items-center gap-3 mb-8 cursor-pointer">
                    <FaRegStar className="text-xl" /> Experience
                </h2>

                <div className="border-t border-gray-700">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="border-b border-gray-700">
                            <div
                                className="flex justify-between py-4 cursor-pointer hover:bg-gray-800 px-4 rounded-lg transition-all"
                                onClick={() => toggleDescription(index)}
                            >
                                <div className="text-lg">{exp.role}</div>
                                <div className="text-right">
                                    <p className="font-semibold">{exp.company}</p>
                                    <p className="text-gray-400 text-sm">{exp.date}</p>
                                </div>
                            </div>

                            {openIndex === index && (
                                <div className="bg-gray-900 p-4 rounded-lg text-gray-300 transition-all">
                                    {exp.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
