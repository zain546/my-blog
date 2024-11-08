import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">ZainBlog</h1>
            <p className="text-sm mt-2">Your go-to blog for everything tech and design</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8">
            <a href="/" className="hover:text-[hsl(var(--primary))]">
              Home
            </a>
            <a href="/blog" className="hover:text-[hsl(var(--primary))]">
              Blog
            </a>
            <a href="/contact" className="hover:text-[hsl(var(--primary))]">
              Contact
            </a>
          </nav>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 flex justify-center space-x-6">
          {/* Twitter */}
          <div className="group relative">
            <a href="https://twitter.com" className="hover:text-[hsl(var(--primary))]" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 19s11-4 11-11-4-7-7-7c-2.228 0-4 1.772-4 4-1.19 0-2.19.74-2.742 1.79A7.978 7.978 0 013 5a3.978 3.978 0 001.016 2.634A4.004 4.004 0 013 8v1a11.025 11.025 0 003.516.746A4.002 4.002 0 012 11.67v.089A4.001 4.001 0 003.516 15a3.98 3.98 0 01-1.77-.475 4.001 4.001 0 003.694 2.46A8.02 8.02 0 014 20a11.047 11.047 0 0012-10.563A8.077 8.077 0 0020 8.5a7.961 7.961 0 01-2.322.634A4.008 4.008 0 0019 6v0z"
                />
              </svg>
            </a>
            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-[hsl(var(--foreground))] text-[hsl(var(--background))] rounded-lg px-2 py-1 text-xs">
              Twitter
            </span>
          </div>

          {/* GitHub */}
          <div className="group relative">
            <a href="https://github.com" className="hover:text-[hsl(var(--primary))]" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 1c-5.06 0-9 3.94-9 9 0 3.99 2.58 7.37 6.18 8.54.45.08.62-.19.62-.44v-1.56C7.5 16.5 7 15.5 7 15.5c-.39-1-.97-1.31-.97-1.31-.79-.53.06-.52.06-.52.87.06 1.33.9 1.33.9.77 1.31 2.02.93 2.51.71.08-.56.3-.93.54-1.15-3.55-.4-7.31-1.78-7.31-7.93 0-1.75.63-3.17 1.68-4.28-.17-.41-.73-2.06.16-4.28 0 0 1.38-.43 4.5 1.64A15.6 15.6 0 0112 3.5a15.6 15.6 0 014.08.57C17.5 2.5 18.88 3 18.88 3c.89 2.22.33 3.88.16 4.28 1.06 1.11 1.68 2.53 1.68 4.28 0 6.16-3.76 7.53-7.31 7.93.3.25.57.74.57 1.5v2.22c0 .25.17.53.62.44C18.42 17.37 21 13.99 21 10c0-5.06-3.94-9-9-9z"
              />
            </svg>
            </a>
            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-[hsl(var(--foreground))] text-[hsl(var(--background))] rounded-lg px-2 py-1 text-xs">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="group relative">
            <a href="https://linkedin.com" className="hover:text-[hsl(var(--primary))]" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8a6 6 0 00-12 0v9h3v-9a3 3 0 016 0v9h3v-9a6 6 0 00-12 0v9h3v-9a3 3 0 016 0v9h3v-9z"
                />
              </svg>
            </a>
            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-[hsl(var(--foreground))] text-[hsl(var(--background))] rounded-lg px-2 py-1 text-xs">
              LinkedIn
            </span>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ZainBlog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
