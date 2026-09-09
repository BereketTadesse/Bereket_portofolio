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
        <title>Bereket Tadesse | Backend Developer</title>
        <meta
          name="description"
          content="I transform ideas into enterprise-grade backend systems that are fast, secure, scalable, and easy to maintain."
        />
        <meta property="og:title" content="Bereket Tadesse | Backend Developer" />
        <meta
          property="og:description"
          content="I transform ideas into enterprise-grade backend systems that are fast, secure, scalable, and easy to maintain."
        />
      </Helmet>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <CTA />
    </Layout>
  );
};

export default Index;
