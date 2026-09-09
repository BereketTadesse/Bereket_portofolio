import { motion } from "framer-motion";
import { MapPin, Calendar, Code, Brain, Rocket, Server } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { personalInfo, skills, experiences } from "@/data/portfolio";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About | Bereket Tadesse</title>
        <meta
          name="description"
          content="Learn more about Bereket Tadesse - Backend Developer focused on building reliable APIs, scalable backend services, and database-driven applications."
        />
      </Helmet>

      {/* Hero */}
      <section className="section-padding hero-gradient min-h-[50vh] flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
                About Me
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Building scalable systems with{" "}
                <span className="text-gradient">Backend & AI</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Bereket Tadesse, a Backend Developer focused on building
                reliable APIs, scalable backend services, and database-driven
                applications. I work with NestJS, FastAPI, Node.js, PostgreSQL,
                MongoDB, Redis, and Docker to turn product requirements into
                maintainable backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My work includes REST API development, authentication, database
                design, webhook integrations, transaction processing, deployment,
                and AI-powered backend features. I enjoy solving real-world
                problems with clean architecture, practical engineering, and
                systems that are easy to extend and maintain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute -inset-4 rounded-2xl border border-primary/10" />
                <div className="absolute -inset-8 rounded-2xl border border-primary/5" />

                <div className="relative h-full w-full rounded-2xl bg-card border border-border overflow-hidden">
                  <img
                    src="/bereket.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              What Drives Me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Server,
                title: "Backend Engineering",
                description:
                  "Building reliable, scalable backend systems with clean APIs, strong data models, secure integrations, and production-ready architecture.",
              },
              {
                icon: Code,
                title: "Clean Architecture",
                description:
                  "Writing maintainable, testable, and scalable code that is easy to extend, debug, and evolve as products grow.",
              },
              {
                icon: Rocket,
                title: "Product Thinking",
                description:
                  "Building with real user and business needs in mind, focusing on practical solutions that create measurable value.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default About;
