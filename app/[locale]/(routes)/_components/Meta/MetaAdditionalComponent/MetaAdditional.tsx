'use client';

import { MdAccessTime, MdOutlineReduceCapacity, MdSupervisedUserCircle } from "react-icons/md";
import { FC } from 'react';
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const MetaAdditional: FC = () => {
  const t = useTranslations("MetaPage");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3
      }
    }
  };

  const cards = [
    {
      icon: MdAccessTime,
      titleKey: "div1a",
      descKey: "div1b",
    },
    {
      icon: MdOutlineReduceCapacity,
      titleKey: "div2a",
      descKey: "div2b",
    },
    {
      icon: MdSupervisedUserCircle,
      titleKey: "div3a",
      descKey: "div3b",
    },
  ];

  return (
    <section className="py-16 px-4 mx-auto max-w-7xl overflow-hidden">
      <AnimatePresence>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-6 bg-white rounded-xl transition-all duration-300
                       hover:shadow-lg border border-gray-100"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                            bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl
                            group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="text-4xl text-indigo-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                  {t(card.titleKey)}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {t(card.descKey)}
                </p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 
                           rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default MetaAdditional;
