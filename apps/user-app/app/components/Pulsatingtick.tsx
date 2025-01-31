"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import React from "react";

const PulsatingTick: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        initial={{ scale: 1, opacity: 0.9 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <CheckCircle className="text-green-500" size={30} />
      </motion.div>
    </div>
  );
};

export default PulsatingTick;
