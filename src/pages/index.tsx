import { Layout } from "@/components/layout";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import FeaturedListSection from "@/components/FeaturedListSection";
const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedSection />
      <FeaturedListSection />
    </Layout>
  );
};
export default Home;
