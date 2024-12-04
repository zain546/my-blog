"use client";
import Pricing from "@/components/PricingSection";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import BlogSection from "@/components/BlogSection";
export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "coding",
        "web develpement",
        "Tailwind CSS",
        "React",
        "Next.js",
        "TypeScript",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center h-1/2">
        <section className="container px-4 py-8 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-left lg:w-1/2 lg:-mt-8">
            <p className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Welcome,
            </p>
            <h1 className="text-2xl sm:text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              Here is your go-to hub for{" "}
              <span className="font-semibold">tech tutorials</span> trends, and
              insights on learning{" "}
              <span className="font-semibold underline decoration-primary max-w-full sm:max-w-[360px]">
                <span ref={el} />
              </span>
            </h1>{" "}
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              A quick snippet of the content to entice readers to dive in. Stay
              updated with the latest posts, tutorials, and trends. Join our
              newsletter today!
            </p>{" "}
          </div>{" "}
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="tailwind css components"
              className="w-full  h-full max-w-md mx-auto filter drop-shadow-xl"
              width={500}
              height={500}
            />
          </div>
        </section>

        <BlogSection />
        <Pricing />
      </main>
    </>
  );
}
