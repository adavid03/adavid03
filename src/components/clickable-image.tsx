"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import ImageModal from "./image-modal";

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

export default function ClickableImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  fill = false,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: ClickableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageProps = fill
    ? { 
        fill: true,
        sizes,
      }
    : { 
        width: width || 1920, 
        height: height || 1080,
      };

  return (
    <>
      <div 
        className={`relative ${containerClassName} ${fill ? 'h-full w-full' : ''}`}
        style={fill ? { position: 'relative', height: '100%', width: '100%' } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          {...imageProps}
          className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <ImageModal
            src={src}
            alt={alt}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
} 