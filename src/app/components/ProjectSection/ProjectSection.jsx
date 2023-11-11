"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "QuranDz",
    description:
      "Project where you can listen to qurand and read hadith and download it  ",
    note: "new update coming soon",
    image: "/images/projects/qurandz.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "https://qurandz.free.nf",
  },
  {
    id: 1,
    title: "Ultimate Team",
    description: "Project for an old team fortnite ",
    note: "this project is not maintained anymore",
    image: "/images/projects/ultimate.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "http://thespikeone.alwaysdata.net/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handelTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handelTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handelTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handelTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handelTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project,index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                note={project.note}
              />
            </motion.li>
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center text-white text-5xl">
            Coming Soon
          </div>
        )}
      </ul>
    </section>
  );
};

export default ProjectSection;
