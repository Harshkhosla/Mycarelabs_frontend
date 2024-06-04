import React, { useRef, useState, useEffect } from "react";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img3.jpg";
import img2 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.png";
import img3 from "../../Assets/img2.jpg";
import Button from "../button/Button";
import DrawerButton from "../Custome_Modal/DrawerButton"; // Import the DrawerButton component
import DragCloseDrawer from "../Custome_Modal/DragCloseDrawer"; // Import the Drawer component
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

const images = [img, img1, img2, img3, img5];

const cardData = [
  {
    category: "NorCal: Fremont Lab",
    title: "Fremont Laboratory",
    shortDescription: "My Care Labs offers instant urgent COVID-19, RSV, and Influenza A/B PCR testing services 7 days a week.",
    longDescription: "Detailed information about our infectious disease testing services..."
  },
  {
    category: "SoCal: Riverside Mobile Testing",
    title: "Riverside Mobile Testing",
    shortDescription: "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    longDescription: "Detailed information about our toxicology testing services..."
  },
  {
    category: "NorCal: Bay Area Mobile Testing",
    title: "SF Bay Area / Silicon Valley Mobile Testing",
    shortDescription: "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
    longDescription: "Detailed information about our wellness testing services..."
  },
  {
    category: "SoCal: Riverside Pop-up",
    title: "Riverside Gurdwara",
    shortDescription: "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    longDescription: "Detailed information about our mobile testing services..."
  },
  {
    category: "FedEx Overnight Test Kits",
    title: "PCR COVID-19, RSV, and Influenza A/B Test Kit",
    shortDescription: "Welcome to My Care Labs Medical Lab, your dedicated partner in health diagnostics, proudly serving the Fremont, California community.",
    longDescription: "Detailed information about our at-home test kits..."
  },
  {
    category: "NorCal: Union City Pop-up",
    title: "Union City Pop-up",
    shortDescription: "My Care Labs offers $0 out of pocket COVID-19 PCR and Rapid testing in Union City.",
    longDescription: "Detailed information about our light solutions..."
  },
  {
    category: "SoCal: Corona Mobile Testing",
    title: "Mobile Testing: Corona, CA",
    shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    longDescription: "Detailed information about our audio solutions..."
  },
];

const HoverCards = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer
  const [drawerContent, setDrawerContent] = useState(""); // State to control drawer content
  const carouselRef = useRef(null);

  const handleLearnMoreClick = (content) => {
    setDrawerContent(content);
    setDrawerOpen(true);
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: -400,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: 400,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleTouchStart = (e) => {
      const touchStartX = e.touches[0].clientX;
      carouselRef.current.touchStartX = touchStartX;
    };

    const handleTouchMove = (e) => {
      if (!carouselRef.current.touchStartX) {
        return;
      }

      const touchEndX = e.touches[0].clientX;
      const touchDiffX = carouselRef.current.touchStartX - touchEndX;

      if (touchDiffX > 50) {
        scrollRight();
      } else if (touchDiffX < -50) {
        scrollLeft();
      }

      carouselRef.current.touchStartX = null;
    };

    const carousel = carouselRef.current;
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);

    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="mt-5">
      <div className="text-center mb-4">
        <h3 className="flex justify-center text-2xl font-bold bg-transparent pt-8">
          <div className="relative inline-block -mt-12 bg-transparent">
            <span className="text-blue-600 text-5xl font-bold mr-2">Locations</span>
            <span className="text-gray-600 text-5xl font-bold">We Serve In.</span>
          </div>
        </h3>
        <div className="container mx-auto px-4">
          <p className="info-description mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum, urna sed dignissim rhoncus, purus nisi egestas odio, a facilisis nulla nisl sit amet felis.
          </p>
        </div>
      </div>

      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={scrollLeft}
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
        <div ref={carouselRef} className="flex overflow-x-hidden space-x-8 p-4 mb-7">
          {cardData.slice(0, 7).map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={images[index % images.length]} // Adjusted to use % to cycle through images
                  className="h-48 w-full object-cover"
                  alt={card.title}
                />
                <div className="p-4 bg-white  relative w- h-full">
                  <span className="text-sm text-blue-400">{card.category}</span>
                  <h5 className="text-lg font-bold mb-1 ">{card.title}</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    {card.shortDescription}
                    {/* <button
                      className="text-sm text-blue-500 hover:underline ml-1"
                      onClick={() => handleLearnMoreClick(card.longDescription)}
                    >
                      Learn More
                    </button> */}
                  </p>
                  <div className="flex justify-center">
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={scrollRight}
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>

      <DragCloseDrawer open={drawerOpen} setOpen={setDrawerOpen}>
        <div className="mx-auto max-w-2xl space-y-7 pt-7 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Drag the handle at the top of this modal downwards 100px to close it
          </h2>
          <p>
            {drawerContent}
          </p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

export default HoverCards;
