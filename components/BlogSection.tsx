import React from "react";
import Image from "next/image";

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
                src="https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Post 1"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Blog Post Title 1</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                A brief overview of the first blog post. Get insights on the
                latest trends and tips.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-[hsl(var(--primary))] font-semibold  transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="group bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] rounded-lg shadow-lg overflow-hidden transition-all transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1728985630341-075aa9277eda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Post 2"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Blog Post Title 2</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Discover how to grow your skills and stay ahead in the
                competitive landscape.
              </p>
              <a
                href="#"
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
                src="https://images.unsplash.com/photo-1729008920276-e9e61d13c2db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Post 3"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Blog Post Title 3</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Learn how to maximize your productivity and achieve more with
                expert advice.
              </p>
              <a
                href="#"
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
