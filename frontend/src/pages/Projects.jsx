import { motion, } from "framer-motion";
import { cardDetails } from "../utils/data";
import ProjectCard from "../components/shared/ProjectCard";

function Projects() {
  return (
    <motion.div id="projects" className="w-full relative mt-32  ">
      <img
        src="laptop.png"
        width={400}
        className="absolute max-sm:hidden opacity-30 -left-20 -top-32"
        alt=""
      />
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h1-primary md:mb-52 max-md:text-center"
      >
        My Projects
      </motion.h1>
      <div>
        {cardDetails.map((card, index) => (
          <ProjectCard key={index} index={index} card={card} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
