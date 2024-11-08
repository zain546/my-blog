import React from "react";

const Pricing = () => {
  return (
    <section className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Affordable Pricing Plans
          </h2>
          <p className="mt-4 text-lg">
            Choose the plan that works best for you, with flexible options to
            scale as you grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Tier 1 - Basic */}
          <div className="relative bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="p-8">
              <h3 className="text-lg leading-6 font-medium">Basic</h3>
              <p className="mt-4">Perfect for individuals starting out</p>
              <div className="mt-8">
                <span className="text-5xl font-extrabold">$9</span>
                <span className="text-base font-medium">/mo</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li>✔ Feature 1</li>
                <li>✔ Feature 2</li>
                <li>✔ Feature 3</li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-3 rounded-md hover:bg-[hsl(var(--ring))] hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 font-semibold"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Tier 2 - Standard (Most Popular) */}
          <div className="relative bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--primary))] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
            {/* Most Popular Badge */}
            <div
              className="absolute top-0 left-0 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-2 px-4 text-sm font-bold rounded-br-2xl"
              style={{
                borderBottomRightRadius: "12px",
                padding: "0.25rem 1rem",
                fontSize: "0.875rem",
              }}
            >
              Most Popular
            </div>

            <div className="p-8">
              <h3 className="text-lg leading-6 font-medium text-[hsl(var(--primary))]">
                Standard
              </h3>
              <p className="mt-4">Best for professionals</p>
              <div className="mt-8">
                <span className="text-5xl font-extrabold">$29</span>
                <span className="text-base font-medium">/mo</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li>✔ Everything in Basic</li>
                <li>✔ Feature 4</li>
                <li>✔ Feature 5</li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-3 rounded-md hover:bg-[hsl(var(--ring))] hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 font-semibold"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Tier 3 - Premium */}
          <div className="relative bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="p-8">
              <h3 className="text-lg leading-6 font-medium">Premium</h3>
              <p className="mt-4">Advanced features for enterprises</p>
              <div className="mt-8">
                <span className="text-5xl font-extrabold">$49</span>
                <span className="text-base font-medium">/mo</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li>✔ Everything in Standard</li>
                <li>✔ Feature 6</li>
                <li>✔ Feature 7</li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-3 rounded-md hover:bg-[hsl(var(--ring))] hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 font-semibold"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
