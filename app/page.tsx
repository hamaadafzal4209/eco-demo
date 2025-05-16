import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { HelpSection } from "@/components/help-section";
import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { ProductSection } from "@/components/products/product-section";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductSection />
      <HelpSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default page;
