import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React from "react";
interface IContent {
  image: string;
}

const content: IContent[] = [
  {
    image: "/images/homepage4.jpg",
  },
  {
    image: "/images/homepage3.jpg",
  },
  {
    image: "/images/homepage2.jpg",
  },
  {
    image: "/images/homepage.jpg",
  },
];
const FeaturedSection: React.FC = () => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",
      vertical: true,
      rtl: true,
      slides: { origin: "center", perView: 2.5, spacing: 10 },
      range: {
        min: -5,
        max: 5,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="w-full">
    <div ref={ref} className="keen-slider ">
      {content.map((item, index) => (
        <div className="keen-slider__slide" key={index}>
          <img src={item.image} alt="" className="h-24 w-24"/>
        </div>
      ))}
    </div>
    </div>
  );
};
export default FeaturedSection;
