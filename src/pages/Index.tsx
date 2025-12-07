import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { CTA } from "@/components/sections/CTA";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Bereket Tadesse | ML Engineer & Full-Stack Developer</title>
        <meta
          name="description"
          content="I build intelligent products end-to-end — from clean UI to scalable APIs to ML-powered insights. Machine Learning Engineer & Full-Stack Developer."
        />
        <meta property="og:title" content="Bereket Tadesse | ML Engineer & Full-Stack Developer" />
        <meta
          property="og:description"
          content="I build intelligent products end-to-end — from clean UI to scalable APIs to ML-powered insights."
        />
      </Helmet>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <CTA />
    </Layout>
  );
};

export default Index;
