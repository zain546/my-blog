import matter from "gray-matter";
import fs from "fs";
import { notFound } from "next/navigation";
import { unified } from "unified";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import OnThisPage from "@/components/OnThisPage";

export default async function Page({ params }: { params: Promise<{ slug: string } >}) {
  // Path to the Markdown file based on the provided slug
  const {slug} = await params
  const filepath = `content/${slug}.md`;

  // If the file doesn't exist, return a 404 response
  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  // Read the Markdown file content
  const fileContent = fs.readFileSync(filepath, "utf-8");

  // Use gray-matter to extract the frontmatter (metadata) and the content
  const { content, data: blog } = matter(fileContent);

  // Unified processor pipeline to convert Markdown to HTML
  const processor = unified()
    .use(remarkParse) // Parse Markdown
    .use(remarkRehype) // Convert Markdown to HTML
    .use(rehypeDocument, { title: blog.title }) // Wrap content in a basic HTML document
    .use(rehypeFormat) // Format the HTML output
    .use(rehypeSlug) // Add unique slugs to headings
    .use(rehypeAutolinkHeadings) // Add anchor links to headings
    .use(rehypePrettyCode, {
      theme: "github-dark", // Syntax highlighting theme
      transformers: [
        transformerCopyButton({
          // visibility: "always", // Always show the copy button
          feedbackDuration: 3000, // Feedback duration in milliseconds
        }),
      ],
    })
    .use(rehypeStringify); // Convert processed HTML into a string

  // Convert the content to HTML
  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* OnThisPage Navigation */}
      <OnThisPage htmlContent={htmlContent} />

      {/* Blog Content */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Title and Author Section */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
            {blog.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 italic">
            By {blog.author}
          </p>
        </div>

        {/* Description Section */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 border-l-4 border-gray-500 dark:border-gray-400 pl-3">
          &#34;{blog.description}&#34;
        </p>

        {/* Date Section */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          {blog.date}
        </p>

        {/* Blog Content Section */}
        <div
          className="prose lg:prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
