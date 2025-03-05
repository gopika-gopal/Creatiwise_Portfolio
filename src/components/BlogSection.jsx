import React from "react";
import { FaRegStar } from "react-icons/fa";

const blogPosts = [
    {
        id: 1,
        image: "https://s3-alpha-sig.figma.com/img/898d/b9e1/c431e0e91c11a272a8d210fb0fd9d331?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bFm3raldYDWN0IbjJBXEXX91LaQQRUD73eLXMb7cwu9dT8eQGP2tiRhudV~lnTdrEOUyzDdlQdJGWAexaeSDYCm5P~rkLT9eHqDUVNwKG7-b-G125upoFB2jN9Py~9-g7sFo3O-ubS2zC~dU7vcw3eCrincN-hs6f991go0k9oVY8WwcrzFHkUvYshmqGSoSO4U51Rywq04w35TtJ28eZ6MWw5P12Pu~SG9sjzQKqLa0RK1N8LUrPcqDTCTXRAz6nBt7isValoC9S6YCOfOFrV6M69k~OEcWTtZd0Bw1NeHLSXfUo66ZDiJuSGb7zgBwX1lDFa~NVfJCZcuKtFzTTg__",
        date: "Nov 9, 2023",
        title: "How UX works in web",
        tags: ["UI", "UX"],
    },
    {
        id: 2,
        image: "https://s3-alpha-sig.figma.com/img/a9e1/32e2/0c2b1f2e6bcb30ec392d43def330a43d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=imeYFRtVP0mcG7j8S4iEDIX0mcpB-2~HTNCfFN2uI4QVh24I5ZVnWI5WRgI1kSijf5PJ2l6zvrieEgdtheAuKbALWHMR1L26Cgmvk77wrxjBhTg7iRDDInyxWvZ2mUwCY~6rMypiQHYDMJo59BbQ8e5ZsEZ7HhqCP1CoCUYkDJdY0vIZrpJcYSqp9~zehxWO4s7ISpsgvqaLBM9AVtOvYj2mmnCdTALU-jFyhqLqmfR9cwFzOtNgts4CCBcc9M05ctZCpzhXjT5ylAQAWDFe6FDIs~PfMK0Ea3QshG3FiAXs9lKtSe2IckuNL0dbZamGo2C~T4UEg2moQZOxj8Z0vg__",
        date: "Aug 18, 2023",
        title: "Case study - Analysis Application.",
        tags: ["DESIGN", "PRINT"],
    },
    {
        id: 3,
        image: "https://s3-alpha-sig.figma.com/img/db5b/627d/8ae3b3f2604357a90d4aba84d4b66071?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dFXAwh9vCluv01304ioKP0wTL81dq3XqcgcwBvkQt0i8KywZC~~0-K-AwI0ePCZE5PyvYkN8apqTvIQzcWO2Imu9MOfS7cDaNwtaWo4VVCyEKErlF1hX1AAj6IQAraWeritItA2CjyH8DEL9r~ccTAGBjG2naf72gRiZD1U13EvY-6QN~a~yHXiLVWaaxqs1bX8w8PJJkjQTVbNE3oiYKPEcbF6sDJFu9NVD8Jqq2l10SI~2UcxFLuei5xVkv1x~k3DuR9XAwJZTq6ruXou9RsG6v2INexgWvBDxoE9EySQTPYkmCYZAq2qWNtmrI8CPwwCGbhEDKUd2YdQu6P7Xpw__",
        date: "Feb 16, 2023",
        title: "3 ways to develop your skill",
        tags: ["FIGMA", "WEB"],
    },
];

const BlogSection = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black text-white">
            <div className="w-full max-w-6xl space-y-8">
                <div className="flex items-center gap-3 text-4xl font-bold">
                    <FaRegStar className="text-xl" />
                    <span>Blog</span>
                </div>
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="flex flex-col md:flex-row items-center p-6 rounded-xl transition-transform hover:scale-105"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-40 h-40 object-cover rounded-lg transition-opacity hover:opacity-80"
                        />
                        <div className="ml-6 flex flex-col justify-between">
                            <p className="text-gray-400">{post.date}</p>
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <div className="flex space-x-2 mt-2">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 border border-white rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button className="ml-auto px-4 py-2 bg-white text-black rounded-full transition-all ">
                            Read
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
