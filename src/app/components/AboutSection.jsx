import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={450} height={450} />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next.js, Node.js,
            PostgreSQL,Mongodb, MYSQL, HTML, CSS, and Git. I am a quick learner
            and I am always looking to expand my knowledge and skill set. I am
            excited create developing websites that are not only visually
            stunning, but also highly functional and easy to navigate.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibood hover:text-white text-[#ADB7BE] border-b border-green-400 ">
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
