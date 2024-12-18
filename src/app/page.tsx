import AllCategorySection from "@/components/all-category";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import LatestSection from "@/components/latest-section";
import NewTechnologySection from "@/components/new-technology";

export default async function Home() {
  return (
    <section>
      <HeroSection />
      <LatestSection />
      <NewTechnologySection />
      <hr className="mx-12 my-14" />
      <AllCategorySection />
      <Footer />
    </section>
  );
}
