import VerticalSlider from "./slider/VerticalSlider";
import { IContent } from "./slider/VerticalSlider";
const fristContent: IContent[] = [
  {
    image: "/images/img1 (1).jpg",
  },
  {
    image: "/images/img1 (2).jpg",
  },
  {
    image: "/images/img1 (3).jpg",
  },
  {
    image: "/images/img1 (4).jpg",
  },
  {
    image: "/images/img1 (5).jpg",
  },
];
const HeroSection: React.FC = () => {
  return (
    <div className="flex gap-4 flex-col justify-center items-start md:flex-row border-b-2">
      <div className="flex gap-4 flex-col md:w-[50%] md:px-9 md:mt-24 md:gap-9">
        <h1 className="text-3xl font-bold text-left px-4 md:text-5xl">
          Transform Your Space With stunning Interior Designs
        </h1>
        <p className="text-left text-sm px-4 md:text-base md:pr-7">
          Welcome to Woodberry Interior and Decors, where we specialize in
          designing and building stunning inteior for your Homes and Work place.
          Our team of experts is decided to creating spaces that are not only
          aesthetically pleasing but also functional and tailored tour unique
          needs.
        </p>
        <div className="flex gap-4 ml-4 md:mt-16">
          <button className="buttons">Get Started</button>
          <button className="buttons">Contact</button>
        </div>
      </div>
      <div className="md:flex-1 max-h-[600px] overflow-hidden">
        <div className="flex h-full gap-4">
        <VerticalSlider content={fristContent} />
        <VerticalSlider content={fristContent} rtl={true} />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
