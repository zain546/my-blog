import React from "react";
import Image from "next/image";
import Link from "next/link";


const BlogSection = () => {
  return (
    <section className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Latest Blog Posts
          </h2>
          <p className="mt-4 text-lg">
            Stay updated with the latest articles, tips, and trends from our
            blog.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post 1 */}
          <div className="group bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] rounded-lg shadow-lg overflow-hidden transition-all transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1526328828355-69b01701ca6a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Post 1"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                JS Interview Questions
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Prepare the JavaScript interview questions.
              </p>
              <Link
                href="/blogpost/js-interview-questions"
                className="mt-4 inline-block text-[hsl(var(--primary))] font-semibold  transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="group bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] rounded-lg shadow-lg overflow-hidden transition-all transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1607706009771-de8808640bcf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Post 2"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                React Interview Questions
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Prepare the React JS/TS interview questions.
              </p>
              <a
                href="/blogpost/react-interview-questions"
                className="mt-4 inline-block text-[hsl(var(--primary))] font-semibold  transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="group bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] rounded-lg shadow-lg overflow-hidden transition-all transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Post 3"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {" "}
                Why Learn TypeScript
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Explore why TypeScript’s type safety and scalability make it a
                powerful choice over JavaScript.
              </p>
              <a
                href="/blogpost/why-learn-typescript"
                className="mt-4 inline-block text-[hsl(var(--primary))] font-semibold  transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
