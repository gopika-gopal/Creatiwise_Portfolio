import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


const testimonials = [
    {
        name: "Floyd Miles",
        company: "eBay",
        text: "Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        name: "Jane Doe",
        company: "Google",
        text: "The best tool I've used for resume building. Very intuitive and easy to use!",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
];

const faqs = [
    {
        question: "What is your design process?",
        answer:
            "My design process typically involves four key phases: research, design, prototype, and test. I gather insights, create wireframes, and test interactive models.",
    },
    {
        question: "What tools do you use for UX design?",
        answer:
            "I use Figma, Adobe XD, and Sketch for UX/UI design, along with prototyping tools like InVision and Framer.",
    },
    {
        question: "How do you measure the success of your UX designs?",
        answer:
            "I measure success through user feedback, analytics, A/B testing, and usability studies to ensure optimal performance and satisfaction.",
    },
];

export default function TestimonialsFAQ() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [openFAQ, setOpenFAQ] = useState(null);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">

            <h2 className="text-4xl font-bold mb-10 text-left w-full max-w-6xl flex items-center gap-3">
                <FaRegStar className="text-xl" />  What they say
            </h2>
            <div className="max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-48">
  <div className="flex flex-col items-center md:items-start gap-3">
    <img
      src={testimonials[currentTestimonial].image}
      alt={testimonials[currentTestimonial].name}
      className="w-20 h-20 rounded-full"
    />
    <h3 className="text-xl font-semibold">{testimonials[currentTestimonial].name}</h3>
    <p className="text-gray-400 text-lg">{testimonials[currentTestimonial].company}</p>
  </div>

  <div className="flex-1 self-start text-center md:text-left">
    <p className="text-2xl italic leading-relaxed max-w-2xl">
      "{testimonials[currentTestimonial].text}"
    </p>
  </div>
</div>



            <div className="flex gap-6 mt-8">
                <button onClick={prevTestimonial} className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                    <FaChevronLeft className="text-xl" />
                </button>
                <button onClick={nextTestimonial} className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                    <FaChevronRight className="text-xl" />
                </button>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold mt-16 mb-6 text-left w-full max-w-6xl flex items-center gap-3">
                <FaRegStar className="text-xl" />  Frequently Asked Questions
            </h2>      <div className="w-full max-w-6xl">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 py-4">
                        <button
                            className="w-full text-left flex justify-between items-center text-lg font-medium focus:outline-none"
                            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        >
                            {faq.question}
                            <span>{openFAQ === index ? "-" : "+"}</span>
                        </button>
                        {openFAQ === index && <p className="text-gray-400 mt-2">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}
