import matter from "gray-matter";
import fs from "fs";
import { notFound } from "next/navigation";
//!! I use to unified package to show the blog content in html format.
import { unified } from "unified";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
//rehype-pretty-code to beautify the code
import rehypePrettyCode from "rehype-pretty-code";
//to copy code(add copy button)
import { transformerCopyButton } from "@rehype-pretty/transformers";
export default async function Page({ params }: { params: { slug: string } }) {
  // const blog = {
  //   title: "Mastering TypeScript",
  //   description:
  //     "Learn the ins and outs of TypeScript with practical examples.",
  //   slug: "mastering-typescript",
  //   date: "October 8, 2024",
  //   author: "Jane Doe",
  //   content: "<p>This is a cotent of blog page</p>",
  // };
  const filepath = `content/${params.slug}.md`;
  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data: blog } = matter(fileContent);
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });
  const htmlContent = (await processor.process(content)).toString();
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            By {blog.author}
          </p>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 border-l-4 border-gray-500 dark:border-gray-400 pl-3">
          &#34;{blog.description}&#34;
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
        <div
          className="prose prose-xl dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}

//i use tailwind typography package to show the html without affecting its styling with tailwind css.
