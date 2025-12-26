import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeatureGrid from "@/components/home/FeatureGrid";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeatureGrid />
      </main>
      <Footer />
    </>
  );
}
