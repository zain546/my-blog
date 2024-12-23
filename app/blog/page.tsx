import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

// interface BlogPost {
//   title: string;
//   description: string;
//   slug: string;
//   date: string;
//   author: string;
//   image: string;
// }
const dirContent = fs.readdirSync("content", "utf-8");
const blogPosts = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});
// const blogPosts: BlogPost[] = [
//   {
//     title: "Exploring React 18",
//     description: "A deep dive into the new features of React 18.",
//     slug: "exploring-react-18",
//     date: "October 10, 2024",
//     author: "Zain Ali",
//     image:
//       "https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Mastering TypeScript",
//     description:
//       "Learn the ins and outs of TypeScript with practical examples.",
//     slug: "mastering-typescript",
//     date: "October 8, 2024",
//     author: "Jane Doe",
//     image:
//       "https://images.unsplash.com/photo-1728985630341-075aa9277eda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Advanced CSS Techniques",
//     description:
//       "Take your CSS skills to the next level with these advanced techniques.",
//     slug: "advanced-css-techniques",
//     date: "October 5, 2024",
//     author: "John Smith",
//     image:
//       "https://images.unsplash.com/photo-1729008920276-e9e61d13c2db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

export default function BlogPage() {
  return (
    <section className="container px-12 py-12 mx-auto">
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
