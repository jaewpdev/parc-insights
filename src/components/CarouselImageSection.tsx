'use client';

import { animate, useMotionValue, motion } from "framer-motion";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

export default function CarouselImageSection() {
  const imgs: {
    src: string;
    objectPosition?: string;
  }[] = [
    {
      src: "/landing-img-1.png",
    },
    {
      src: "/landing-img-2.png",
    },
    {
      src: "/landing-img-3.png",
    },
    {
      src: "/landing-img-4.png",
    },
    {
      src: "/landing-img-5.png",
    },
    {
      src: "/landing-img-6.png",
    },
    {
      src: "/landing-img-7.png",
      objectPosition: "50% 10%",
    },
  ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 12;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    // return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="h-[400px] mb-20">
      <motion.div
        className="absolute left-0 flex gap-6"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...imgs, ...imgs].map(({ src, objectPosition }, index) => {
          return (
            <div key={index} className="relative h-[400px] aspect-square rounded-lg overflow-hidden">
              <Image
                src={src}
                fill={true}
                objectFit="cover"
                objectPosition={objectPosition}
                alt="Happy client"
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
