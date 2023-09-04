import { Layout } from "@/components/layout";
import Image from "next/image";
const Home = () => {
  return (
    <Layout>
      <div
        className="h-screen w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url("/images/homepage4.jpg")' }}
      >
        {/* <div className="h-full w-[50%] absolute bg-[brown] opacity-25"></div> */}
        <div className="flex justify-start items-center">
          {/* <Image src={} alt="logo"/> */}
          <h1 className="text-4xl font-extrabold">
            <span className="text-[brown]">WOOD</span>BERRY INTERIOR AND DECORS
            PRIVATE LIMITED
          </h1>
        </div>
        <div>
          <div className="rounded-full w-40">
            <img src="/images/Stamp_Woodberry stamp.png" alt="logo" className="w-40 bg-[red]"/>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
