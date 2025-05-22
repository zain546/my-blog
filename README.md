# My Blog

A modern, full-stack blog platform built with Next.js, TypeScript, and Tailwind CSS. This project offers a seamless reading and writing experience for tech tutorials, industry trends, and insightful articles.

## Features

- **Dynamic Blog Posts:** Write content in Markdown and display it with syntax highlighting and copy-to-clipboard for code blocks.
- **Responsive Design:** Fully responsive layout with light/dark mode support.
- **Content Organization:** Dedicated pages for About, Blog, Contact, and individual blog posts.
- **Modern Stack:** Built using Next.js App Router, React, TypeScript, and Tailwind CSS.
- **Custom Styling:** Uses custom fonts and advanced Tailwind theming for a polished look.
- **SEO Friendly:** Optimized for search engines with metadata and clean URLs.

## Folder Structure

```
app/
  ├── about/           # About page
  ├── blog/            # Blog listing page
  ├── blogpost/[slug]/ # Dynamic blog post pages
  ├── contact/         # Contact page
  ├── fonts/           # Custom font files
  ├── globals.css      # Global styles (Tailwind + custom)
  ├── layout.tsx       # Root layout with Navbar & Footer
  └── page.tsx         # Home page
content/               # Markdown files for blog posts
components/            # Reusable React components
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Add blog posts:**
   - Place your Markdown files in the `content/` directory. Each file should include frontmatter for `title`, `description`, `author`, and `date`.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [gray-matter](https://github.com/jonschlinkert/gray-matter) for Markdown frontmatter
- [rehype-pretty-code](https://rehype-pretty-code.netlify.app/) for code highlighting

## License

This project is open source and available under the [MIT License](LICENSE).

---
*Crafted with passion for sharing knowledge and empowering learners.*