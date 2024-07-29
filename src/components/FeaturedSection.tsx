import Container from "./ui/container";
import { cardList } from "@/constants/constants";
import Image from "next/image";
const FeaturedSection: React.FC = () => {
  return (
    <section className="mt-10">
      <Container>
        <div className="mx-4 mt-6 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold leading-8">
              Experience the Difference with Woodberry Interior and Decors
            </h1>
            <p className="text-base mt-2 pr-2">
              At Woodberry Interior and Decors, We offer personalized designs,
              high-quality materials, and an experienced team to bring your
              vision to life.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {cardList.map((items) => (
              <div key={items.id} className="h-[400px] w-[300px] flex flex-col shadow-lg">
                <Image
                  src={items.image}
                  alt={items.title}
                  width={300}
                  height={400}
                />
                <h2 className="text-xl font-bold mx-2">{items.title}</h2>
                <p className="text-sm mx-2">{items.description}</p>
              </div>
            ))}
          </div>

          {/* <div className="h-full w-full">
            <img
              src="/images/homepage2.jpg"
              alt=""
              className="h-[400px] w-full object-fill"
            />
          </div> */}
        </div>
      </Container>
    </section>
  );
};
export default FeaturedSection;
