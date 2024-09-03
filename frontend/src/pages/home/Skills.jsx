import { motion,  } from "framer-motion";

function Skills() {

  return (
    <div id="skills" className="mt-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        
        viewport={{once:true}}
        className="h1-primary"
      >
        {" "}
        My skills
      </motion.div>
      <motion.div  id="card-container" className="mt-20 grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
        <Card src="react.svg" label={"React"} />
        <Card src="node.svg" label={"Node Js"} />
        <Card src="mongo.svg" label={"Mongo Db"} />
        <Card src="html.svg" label={"Html"} />
        <Card src="css.svg" label={"CSS"} />
        <Card src="js.svg" label={"Javascript"} />
      </motion.div>
    </div>
  );
}

function Card({ src, label,s, size = 100 }) {

  return (
    <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      viewport={{once:true}}
      className="skills-card neo hover:scale-[1.01] mx-auto p-4 md:p-10  rounded-md  md:w-[250px] flex flex-col items-center justify-between w-max "
    >
      <img className="max-[600px]:w-12 " width={size} height="auto" src={src} alt="node js " />
      <h2 className="md:text-xl font-bold  mt-4 text-gray-700 text-sm">{label}</h2>
    </motion.div>
  );
}

export default Skills;
