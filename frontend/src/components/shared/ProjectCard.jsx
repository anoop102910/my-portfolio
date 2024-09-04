import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";
export default function ProjectCard({ card, index }) {
  let { name, about, imageLink, gitLink, reverse, websiteLink, techStack, videoLink } = card;

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center "],
  });
  const s = useTransform(scrollYProgress, [0, 1], [0, 1]);
  let x;
  if (index % 2 == 0) x = useTransform(scrollYProgress, [0, 1], [200, 0]);
  else x = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <motion.div
      className={`mt-10 neo-outline relative shadow-none overflow-hidden md:mb-52 mx-auto flex flex-col gap-y-10 md:flex-row items-center gap-x-16 border-2 border-black p-4`}
    >
  
      <motion.div
        ref={ref}
        style={{ scale: s }}
        className="md:w-[45%] h-[200px] md:h-[260px] relative"
      >
        <a target="_blank" href={websiteLink}>
          <img
            className="neo w-full h-full object-cover object-center rounded-lg cursor-pointer"
            src={imageLink}
            alt=""
          />
        </a>
      </motion.div>
      <motion.div style={{ x: x }} className="card-content md:w-1/2">
        <h2 className="text-4xl font-bold font-nunito">{name}</h2>
        <p className="mt-5 leading-8 text-gray-800">{about}</p>
        <div className="mt-4">
          {techStack &&
            techStack.map((tech, index) => (
              <Badge key={index} className="mr-2">
                {tech}
              </Badge>
            ))}
        </div>
        <div className="flex items-center mt-6 gap-x-5">
          {websiteLink && (
            <a target="_blank" href={websiteLink}>
              <Button>
                View Site
                <FaArrowRightLong className="ml-2" />
              </Button>
            </a>
          )}
          <a target="_blank" className="neo " href={gitLink}>
            <img width={32} src="github.svg" alt="" />
          </a>
          {videoLink && (
            <a className="neo" target="_blank" href={videoLink}>
              <img src="youtube.svg" width={32} alt="" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
