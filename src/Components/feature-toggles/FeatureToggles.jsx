import React, { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { data } from "./data";
import { FeatureDisplay } from "./FeatureDisplay";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";
import img5 from "../../Assets/img5.png";
import img3 from "../../Assets/img2.jpg";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";

export const FeatureToggles = () => {
  const [selected, setSelected] = useState(1);

  const el = data.find((d) => d.id === selected);
  
  const images = [img, img1, img3, img4, img5];

  return (
    <section className="relative mx-auto max-w-6xl px-2 md:px-4">
      {/* <SectionHeading>Show the people what your product does</SectionHeading> */}
      <div className="relative inline-block bg-transparent text-center mb-4">
            <span className="text-blue-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mr-2">
              Solutions
            </span>
            <span className="text-orange-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              We Provide
            </span>

          </div>
      {/* <SectionSubheading>
        It should be very clear who your product is for and what problem it
        solves for them.
      </SectionSubheading> */}
      <div className="w-full">
        <div className="mb-9 grid grid-cols-3 gap-4 sm:grid-cols-5">
          {data.map((d) => (
            <ToggleButton
              key={d.id}
              id={d.id}
              selected={selected}
              setSelected={setSelected}
            >
              {d.title}
            </ToggleButton>
          ))}
        </div>
        <div className="w-full translate-y-2 rounded-xl bg-zinc-900">
          <div className="w-full -translate-y-2 rounded-lg shadow-lg">
            <FeatureDisplay
              selected={selected}
              cardTitle={el.cardTitle}
              cardSubtitle={el.cardSubtitle}
              Component={el.Component}
              imageSrc={images[selected - 1]}
          
            />
          </div>
        </div>
      </div>
    </section>
  );
};
