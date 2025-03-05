import React from "react";
import { FaRegStar } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Analysis Application",
        description: "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
        tags: ["FIGMA", "UX"],
        image: "https://s3-alpha-sig.figma.com/img/898d/b9e1/c431e0e91c11a272a8d210fb0fd9d331?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bFm3raldYDWN0IbjJBXEXX91LaQQRUD73eLXMb7cwu9dT8eQGP2tiRhudV~lnTdrEOUyzDdlQdJGWAexaeSDYCm5P~rkLT9eHqDUVNwKG7-b-G125upoFB2jN9Py~9-g7sFo3O-ubS2zC~dU7vcw3eCrincN-hs6f991go0k9oVY8WwcrzFHkUvYshmqGSoSO4U51Rywq04w35TtJ28eZ6MWw5P12Pu~SG9sjzQKqLa0RK1N8LUrPcqDTCTXRAz6nBt7isValoC9S6YCOfOFrV6M69k~OEcWTtZd0Bw1NeHLSXfUo66ZDiJuSGb7zgBwX1lDFa~NVfJCZcuKtFzTTg__",
        caseStudyUrl: "https://example.com/analysis-application",
    },
    {
        id: 2,
        title: "Fortknox Application",
        description: "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
        tags: ["MOBILE", "WEB"],
        image: "https://s3-alpha-sig.figma.com/img/a9e1/32e2/0c2b1f2e6bcb30ec392d43def330a43d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=imeYFRtVP0mcG7j8S4iEDIX0mcpB-2~HTNCfFN2uI4QVh24I5ZVnWI5WRgI1kSijf5PJ2l6zvrieEgdtheAuKbALWHMR1L26Cgmvk77wrxjBhTg7iRDDInyxWvZ2mUwCY~6rMypiQHYDMJo59BbQ8e5ZsEZ7HhqCP1CoCUYkDJdY0vIZrpJcYSqp9~zehxWO4s7ISpsgvqaLBM9AVtOvYj2mmnCdTALU-jFyhqLqmfR9cwFzOtNgts4CCBcc9M05ctZCpzhXjT5ylAQAWDFe6FDIs~PfMK0Ea3QshG3FiAXs9lKtSe2IckuNL0dbZamGo2C~T4UEg2moQZOxj8Z0vg__",
        caseStudyUrl: "https://example.com/fortknox-application",
    },
    {
        id: 3,
        title: "Zenocide Application",
        description: "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
        tags: ["APP", "WEB"],
        image: "https://s3-alpha-sig.figma.com/img/db5b/627d/8ae3b3f2604357a90d4aba84d4b66071?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dFXAwh9vCluv01304ioKP0wTL81dq3XqcgcwBvkQt0i8KywZC~~0-K-AwI0ePCZE5PyvYkN8apqTvIQzcWO2Imu9MOfS7cDaNwtaWo4VVCyEKErlF1hX1AAj6IQAraWeritItA2CjyH8DEL9r~ccTAGBjG2naf72gRiZD1U13EvY-6QN~a~yHXiLVWaaxqs1bX8w8PJJkjQTVbNE3oiYKPEcbF6sDJFu9NVD8Jqq2l10SI~2UcxFLuei5xVkv1x~k3DuR9XAwJZTq6ruXou9RsG6v2INexgWvBDxoE9EySQTPYkmCYZAq2qWNtmrI8CPwwCGbhEDKUd2YdQu6P7Xpw__",
        caseStudyUrl: "https://example.com/zenocide-application",
    },
];

const Works = () => {
    return (
        <section className="bg-black text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl font-bold flex items-center gap-3">
                        <FaRegStar className="text-xl" /> Works
                    </h2>
                    <a href="#" className="text-sm underline">view all</a>
                </div>

                <div className="flex flex-col gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-[#888] p-6 rounded-2xl">
                            <div className="flex flex-col md:flex-row overflow-hidden bg-[#888] rounded-2xl">
                                <div className="md:w-1/2">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                                    />
                                </div>

                                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex gap-3 mt-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-4 py-1 border border-gray-400 rounded-full text-xs">{tag}</span>
                                        ))}
                                    </div>

                                    <button
                                        className="mt-6 px-4 py-2 bg-white text-black rounded-full text-sm w-fit self-start transition-all duration-300 hover:bg-gray-300"
                                        onClick={() => window.open(project.caseStudyUrl, "_blank")}
                                    >
                                        View Case Study
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
