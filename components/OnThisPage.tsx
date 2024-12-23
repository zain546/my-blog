"use client";
import React from "react";

type OnThisPageProps = {
  htmlContent: string;
};

const OnThisPage: React.FC<OnThisPageProps> = ({ htmlContent }) => {
  // Use DOMParser to extract headings from the HTML content
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  // Select all heading tags (h2, h3, h4, etc.)
  const headings = Array.from(
    doc.querySelectorAll("h2, h3, h4, h5, h6")
  ).map((heading) => ({
    id: heading.id || heading.textContent?.replace(/\s+/g, "-").toLowerCase(), // Generate ID if not present
    text: heading.textContent || "",
    level: parseInt(heading.tagName[1]), // Extract level from the tag name (e.g., h2 -> 2)
  }));

  return (
    <div className="my-8">
      <h3 className="text-xl lg:text-2xl font-bold mb-2">On This Page</h3>
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            className={`pl-${(level - 2) * 4} text-sm lg:text-lg text-gray-700 dark:text-gray-300`}
          >
            <a href={`#${id}`} className="hover:underline">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
