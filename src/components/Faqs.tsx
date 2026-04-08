"use client";
import { useState } from "react";

const FAQs = () => {
    const faqs = [
        {
            question: "Is Codeiyo suitable for beginners?",
            answer: "Yes! We have beginner-friendly tutorials and step-by-step lessons to get you started."
        },
        {
            question: "Which languages can I learn?",
            answer: "JS for free users, and Python, Java, C++ and more for Pro Coders.",
        },
        {
          question: "What devices are supported?",
          answer: "Codeiyo works on desktops, laptops, tablets, and modern browsers."
        },
        {
            question: "Will my progress save on another device?",
            answer: "Yes! All your code and challenges sync automatically.",
        },
        {
          question: "Do I need to install anything?",
          answer: "No installation is needed. Codeiyo runs entirely in your web browser."
        },
            {
            question: "Are the practice challenges graded?",
            answer: "No grades! They just give instant feedback to help you learn faster.",
        },
            {
            question: "Can I use Codeiyo offline?",
            answer: "The editor needs the internet, but you can download your projects to work offline.",
        },
        {
          question: "Do you offer support for schools or teachers?",
          answer: "Yes! Check the 'Schools' section to see how institutions can collaborate with us."
        },
    ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="border-b border-brand-border pt-10 pb-20 px-6 md:px-10 w-full mx-auto relative overflow-x-hidden"
    >
    <div
      className="
        absolute
        top-25
        right-20            /* stick to the right */
        translate-x-1/2    /* push half of it outside viewport to the right */
        w-full
        h-130
        bg-brand-accent/10
        blur-[100px]
        rounded-full
        -z-10
      "
    />
      <div className="text-center mb-16 space-y-4">
        <h2 className=" text-sm font-bold text-brand-accent uppercase tracking-[0.2em]">
          Questions Answered
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold">
          Frequently Asked <br />
          <span className="text-gradient">Questions</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="glass1 p-8 rounded-3xl border-white/5 hover:border-brand-accent-hover transition-all cursor-pointer hover:scale-105 "
            onClick={() => toggleFAQ(idx)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold">{faq.question}</h4>
              <span
                className={`text-brand-accent text-2xl transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? "max-h-96 mt-4" : "max-h-0 mt-0"
              }`}
            >
              <p className="text-gray-300 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;