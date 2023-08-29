import { Layout } from "@/components/layout";
import Image from "next/image";
const Home = () => {
  return (
    <Layout>
      <div
        className="h-screen w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url("/images/homepage4.jpg")' }}
      >
        <div className="flex justify-start items-center">
          {/* <Image src={} alt="logo"/> */}
          <h1 className="text-4xl font-semibold"><span className="text-[brown]">WOOD</span>BERRY INTERIOR AND DECORS PRIVATE LIMITED</h1>
        </div>
      </div>
    </Layout>
  );
};
export default Home;