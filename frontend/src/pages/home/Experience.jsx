import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const variant = i => ({
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 + 0.2 } },
    });

    return (
        <div id="experience" className="mt-32 relative">
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="h1-primary max-md:text-center"
            >
                Experience
            </motion.h1>
            <motion.div
                className="mt-20 md:flex flex-1 justify-between gap-x-4 max-md:max-w-lg max-md:mx-auto"
            >
                <motion.div
                    variants={variant(0)}
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    initial="hidden"
                    className="mt-10 flex-1 border p-8 neo"
                >
                    <h2 className="text-4xl font-bold font-roboto text-green-600">Full Stack Developer</h2>
                    <h3 className="text-2xl mt-6">Megamind IT Solutions</h3>
                    <p className="mt-4 text-gray-500">June 10, 2024 - August 10, 2024</p>
                    <ul className="list-disc list-inside mt-2">
                        <li className="mt-1">Developed an e-commerce website.</li>
                        <li className="mt-1">Created a Gram Panchayat-based website.</li>
                    </ul>
                </motion.div>
            </motion.div>
            {/* <img src="fire1.png" className="absolute opacity-50 -right-32 -bottom-32 -z-10" alt="" /> */}
        </div>
    );
};

export default Experience;
