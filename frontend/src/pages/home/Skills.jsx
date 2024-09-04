import { motion } from "framer-motion";
import { skills } from "../../utils/data";
import { Badge } from "../../components/ui/Badge"; // Import Badge component

function Skills() {
  return (
    <div id="skills" className="mt-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h1-primary"
      >
        {" "}
        My skills
      </motion.div>
      <motion.div id="card-container" className="mt-20 grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
        {skills.map(skill => (
          <Card key={skill.label} src={skill.src} label={skill.label} level={skill.level} /> // Pass level prop
        ))}
      </motion.div>
    </div>
  );
}

function Card({ src, label, level, size = 100, }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="skills-card relative neo hover:scale-[1.01] mx-auto p-4 md:p-10  rounded-md  md:w-[250px] flex flex-col items-center justify-between w-max "
    >
      <span className="absolute top-1 right-1 max-sm:hidden">
        <LevelBadge level={level} />
      </span>
      <img className="max-[600px]:w-12 " width={size} height="auto" src={src} alt="node js " />
      <h2 className="md:text-xl font-bold  mt-4 text-gray-700 text-sm">{label}</h2>
    </motion.div>
  );
}

const LevelBadge = ({ level }) => {
  const levelColors = {
    Advanced: "bg-violet-300 text-violet-800 border-violet-800",
    Intermediate: "bg-green-300 text-green-800 border-green-800",
    Beginner: "bg-blue-300 text-blue-800 border-blue-800",
  };
  return (
    <Badge
      className={`${
        levelColors[level] || "bg-gray-300 text-gray-800 border-gray-800"
      } rounded-full`}
      variant="default"
    >
      {level}
    </Badge>
  );
};

export default Skills;
