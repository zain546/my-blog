import React from "react";

const AboutPage = () => {
  return (
    <main className="bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground py-12 px-6">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl text-black font-bold mb-4 text-primary-foreground dark:text-white">
          About Us
        </h1>
        <p className="text-lg text-muted-foreground dark:text-muted-foreground">
          Welcome to our blog! We are passionate about sharing knowledge, ideas,
          and insights that matter to you.
        </p>
      </section>
    
      {/* Showcase Section */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl text-black font-semibold mb-6 text-primary-foreground dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-card dark:bg-dark-card rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-muted dark:bg-muted-foreground" />
              <div className="p-4">
                <h3 className="text-xl text-black font-bold mb-2 text-primary-foreground dark:text-white">
                  Project Title {index + 1}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                  Brief description of the project to give readers a sneak peek
                  into its purpose.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl  mx-auto mb-12">
        <h2 className="text-3xl text-black font-semibold mb-6 text-primary-foreground dark:text-white">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground dark:text-muted-foreground mb-4">
          Our blog is dedicated to providing insightful articles, tutorials, and
          resources on a wide range of topics. We believe in the power of
          knowledge sharing to inspire and empower individuals.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground dark:text-muted-foreground">
          Whether you are here to learn, grow, or stay updated, our mission is
          to make your journey enriching and enjoyable.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-black font-semibold mb-6 text-center text-primary-foreground dark:text-white">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="text-center bg-card dark:bg-dark-card rounded-lg p-6 shadow-md"
            >
              <div className="h-24 w-24 rounded-full bg-muted dark:bg-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl text-black font-semibold text-primary-foreground dark:text-white">
                Team Member {index + 1}
              </h3>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                Role in the team, like Content &quot;Creator&quot; or
                &quot;Developer&quot;
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
