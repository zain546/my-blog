'use client';

import React, { useEffect, useState } from 'react';

type Heading = {
  id: string;
  text: string;
  level: number;
};

type OnThisPageProps = {
  htmlContent: string;
};

const OnThisPage: React.FC<OnThisPageProps> = ({ htmlContent }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    const extracted = Array.from(doc.querySelectorAll('h2, h3, h4, h5, h6')).map(
      (heading) => {
        const text = heading.textContent || '';
        const id = heading.id || text.replace(/\s+/g, '-').toLowerCase();
        const level = parseInt(heading.tagName.replace('H', ''));
        return { id, text, level };
      }
    );

    setHeadings(extracted);
  }, [htmlContent]);

  if (headings.length === 0) return null;

  return (
    <div className="my-8">
      <h3 className="text-xl lg:text-2xl font-bold mb-2">On This Page</h3>
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            style={{ paddingLeft: `${(level - 2) * 12}px` }} // Dynamic indentation
            className="text-sm lg:text-base text-gray-700 dark:text-gray-300"
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
