import React from "react";
import {
  DownloadCv,
  Golang,
  HeroImage,
  MongoWithText,
  Nextjs,
  Nodejs,
} from "../../assets/svg";
import { TechStack } from "../moleculs";

const Hero = () => {
  const TechstackData = [
    {
      title: "Next.js",
      isIcon: false,
      alt: "nextjs",
      position: "next-js",
      image: Nextjs,
    },
    {
      title: "Mongo DB",
      isIcon: true,
      alt: "mongodb",
      position: "mongodb",
      image: MongoWithText,
    },
    {
      title: "Node.js",
      isIcon: false,
      alt: "nodejs",
      position: "node-js",
      image: Nodejs,
    },
    {
      title: "Golang",
      isIcon: false,
      alt: "golang",
      position: "golang",
      image: Golang,
    },
  ];

  return (
    <section className="hero" id="home">
      <div className="identity">
        <h2>Hello 👋, I`am </h2>
        <div className="job-desk">
          <h1>Muhamad Firly Ramadan</h1>
          <span>Back End Developer</span>
        </div>
        <div className="simple-description">
          <p>
            I am a junior backend developer and student at one of the campuses
            in Cirebon, West Java. I like to learn about new things in my spare
            time especially in web technology and mobile apps.
          </p>
          <div className="button-wrapper">
            <button className="more">More</button>
            <button className="download-cv">
              Download cv
              <img src={DownloadCv} alt="download-cv" />
            </button>
          </div>
        </div>
      </div>
      <div className="skill-image-box">
        {TechstackData?.map((item, i) => (
          <TechStack
            isIcon={item.isIcon}
            images={item.image}
            alt={item.alt}
            title={item.title}
            position={item.position}
            key={i}
          />
        ))}
        <img src={HeroImage} alt="logo" />
      </div>
    </section>
  );
};

export default Hero;