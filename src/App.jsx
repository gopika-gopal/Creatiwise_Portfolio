import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Expertise from "./components/Expertise";
import Works from "./components/Work";
import Experience from "./components/Experience";
import BlogSection from "./components/BlogSection";
import TestimonialsFAQ from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <Grid />
      <Expertise />
      <Works />
      <Experience />
      <BlogSection />
      <TestimonialsFAQ />
      <Footer />
    </div>
  );
};

export default App;
