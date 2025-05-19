import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

const dirContent = fs.readdirSync("content", "utf-8");
const blogPosts = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

export default function BlogPage() {
  return (
    <section className="sm:container w-svw border sm:px-12 px-2 py-12 mx-auto">
      <h1 className="mb-10 text-4xl font-bold text-center text-foreground">
        Blog Posts
      </h1>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="max-w-sm p-4 rounded-lg shadow-lg bg-card dark:bg-card dark:text-card-foreground border border-border dark:border-border hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 rounded-t-lg object-cover"
            />
            <div className="mt-4">
              <h2 className="mb-2 text-2xl font-bold text-foreground dark:text-card-foreground">
                {post.title}
              </h2>
              <p className="mb-4 text-muted-foreground dark:text-muted-foreground">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {post.date} by {post.author}
                </span>
                <Link
                  href={`/blogpost/${post.slug}`}
                  className="text-primary hover:underline dark:text-card-foreground"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
