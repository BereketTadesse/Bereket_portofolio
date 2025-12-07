import { motion } from "framer-motion";
import { MapPin, Calendar, Code, Brain, Rocket } from "lucide-react";
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
          content="Learn more about Bereket Tadesse - Machine Learning Engineer & Full-Stack Developer building intelligent products end-to-end."
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
                Building the future with{" "}
                <span className="text-gradient">AI & Code</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm {personalInfo.name}, a {personalInfo.title} passionate about
                creating intelligent systems that solve real-world problems. I
                combine deep technical expertise in machine learning with
                full-stack development skills to build end-to-end solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach bridges the gap between cutting-edge AI research and
                practical product development. Whether it's building NLP
                pipelines, designing scalable APIs, or crafting intuitive user
                interfaces, I focus on delivering value at every layer of the
                stack.
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
                icon: Brain,
                title: "AI Innovation",
                description:
                  "Pushing boundaries in machine learning to create systems that learn, adapt, and deliver real impact.",
              },
              {
                icon: Code,
                title: "Clean Architecture",
                description:
                  "Writing maintainable, scalable code that stands the test of time and enables rapid iteration.",
              },
              {
                icon: Rocket,
                title: "Product Thinking",
                description:
                  "Building with the end user in mind, focusing on solutions that create genuine value.",
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

      {/* Journey */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              My Journey
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                My journey into tech began with a fascination for how systems
                learn and make decisions. This curiosity led me to dive deep
                into machine learning, eventually expanding into full-stack
                development to build complete products.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Today, I specialize in building AI-powered applications that
                combine sophisticated ML models with intuitive user experiences.
                From sentiment analysis systems to fraud detection platforms,
                I've worked across various domains, always focusing on delivering
                measurable business impact.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring the latest research
                papers, contributing to open-source projects, or mentoring
                aspiring developers in the community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
