import { Layout } from "@/components/layout";
import Container from "@/components/ui/container";
import Image from "next/image";
const About: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className="bg-gray-100 p-8 flex flex-row items-center">
          <div className="w-[650px] mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg leading-7 mb-6">
              Welcome to{" "}
              <span className="text-[#871b08] font-bold">
                {" "}
                Woodberry Interior and Decors pvt. ltd{" "}
              </span>
              , where creativity meets functionality. We specialize in
              transforming spaces into stunning environments that reflect your
              personality and style. Our team of talented designers is dedicated
              to bringing your vision to life, whether its a cozy home, a modern
              office, or a luxurious commercial space.
            </p>
            <p className="text-lg leading-7 mb-6">
              With a keen eye for detail and a passion for design, we ensure
              that every project we undertake is unique and tailored to meet the
              specific needs of our clients. We believe that great design is not
              just about aesthetics but also about creating spaces that enhance
              your lifestyle and work efficiency.
            </p>
            <p className="text-lg leading-7 mb-6">
              Our mission is to provide exceptional design services that combine
              beauty, comfort, and practicality. We work closely with our
              clients to understand their needs and preferences, and we use our
              expertise to create spaces that are both visually stunning and
              highly functional.
            </p>
            <p className="text-lg leading-7 mb-6">
              Thank you for considering Woodberry Interior and Decors for your
              design needs. Explore our gallery to see examples of our work, and
              feel free to contact us to discuss your next project. We look
              forward to helping you create the perfect space.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/images/IMG_0893.jpg"}
              alt="about"
              height={200}
              width={250}
              className="object-contain"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-lg">Director and Lead Designer</h1>
              <h2 className="text-xl font-bold underline text-[#871b08]">
                Manita Chauhan
              </h2>
              <div className="w-[400px]">
                <p
                  className="text-lg"
                  style={{ fontFamily: "Brush Script MT" }}
                >
                  " Design is not just about making things look beautiful; it's
                  about creating spaces that enhance the way we live and work.
                  At Woodberry Interior and Decors pvt ltd, we are committed to
                  crafting designs that are not only visually appealing but also
                  functional and sustainable. I believe in a collaborative
                  approach where the client's vision is at the heart of every
                  project. Together, we can create spaces that inspire and
                  delight. "
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
};
export default About;
