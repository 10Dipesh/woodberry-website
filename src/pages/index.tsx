import { Layout } from "@/components/layout";
import Image from "next/image";
const Home = () => {
  return (
    <Layout>
      <div
        className="h-screen w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url("/images/homepage2.jpg")' }}
      ></div>
    </Layout>
  );
};
export default Home;
