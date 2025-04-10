"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export default function ImageModal({ isOpen, onClose, imageUrl, title }: ImageModalProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = title || 'image';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full h-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/10 dark:border-black/10"
            onClick={onClose}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-4 z-10">
              <h2 className="text-sm font-medium dark:text-white text-white truncate">{title}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="p-2 hover:bg-white/10 dark:hover:bg-black/10 rounded-full transition-colors"
                  title="Download"
                >
                  <FaDownload className="w-4 h-4 dark:text-white text-white" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 dark:hover:bg-black/10 rounded-full transition-colors"
                  title="Close"
                >
                  <IoClose className="w-4 h-4 dark:text-white text-white" />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="absolute inset-0 pt-12 p-2">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-contain pt-12 p-2"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}