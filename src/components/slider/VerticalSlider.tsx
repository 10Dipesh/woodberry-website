import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React from "react";

export interface IContent {
  image: string;
}
interface IProps{
  rtl?: boolean;
  content: IContent[];
}
const VerticalSlider: React.FC <IProps>= ({content,rtl}) => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        origin: "center",
        perView: 2,
        spacing: 10,
      },
      vertical: true,
      rtl,
    },
    [
      (slider) => {
         setInterval(() => {
          slider.next();
        }, 2000);
      },
    ]
  );

  return (
    <div className="w-full h-full">
      <div ref={ref} className="keen-slider max-h-[600px]">
        {content.map((item, index) => (
          <div className="keen-slider__slide" key={index}>
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default VerticalSlider;
