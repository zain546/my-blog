import React from "react";

interface OnThisPageProps {
  htmlContent: string;
}

const OnThisPage: React.FC<OnThisPageProps> = ({ htmlContent }) => {
  // Extract h1 headings from the provided HTML content
  const extractHeadings = (content: string): string[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headings = Array.from(doc.querySelectorAll("h1")).map(
      (h1) => h1.textContent || ""
    );
    return headings;
  };

  const headings = extractHeadings(htmlContent);

  return (
    <aside className="bg-gray-100 p-4 rounded shadow-lg w-full max-w-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">On This Page</h2>
      {headings.length > 0 ? (
        <ul className="space-y-1">
          {headings.map((heading, index) => (
            <li
              key={index}
              className="text-gray-600 text-sm hover:text-blue-600"
            >
              {heading}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">No headings found.</p>
      )}
    </aside>
  );
};

export default OnThisPage;
