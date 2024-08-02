import Link from "antd/es/typography/Link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
  
};

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-neutral-100 py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl">Other Recommended Tests</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, author, title, description, location}) => {
  
  return (
    
    <div
   
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <a className="no-underline" href={location}>
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />
   
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
        {author} 
      </span>
     
      <p className="mt-1.5 text-lg font-medium">{title}</p>
      <p className="text-sm text-neutral-500">{description}</p>
      
      </a>

    </div>
    
  );
};

export default BlogPostCarousel;
// const images = [
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxB0-5iYhpjm6euLTXjYjGObKBCodTnIE8oN83GdRjmPSQGvpjTXT5wf3LQ&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKTtvK563qsJfVUh_Fk43AFVxXOeHA-4xfYN7PWUT-xfkEFlvp97nCmIN6g&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHL6Nt5janbq-JO5gViYZ9rbdBrWpGY2kytXOex9xFhl8jghDzd2OKTmNxTg&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtT9NMabXOeFXhLMqMvcA2ehosm1IAx3pxOw&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhkRaRNqnPf_dcSF6D04L1TgE29yWRXr4ug&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Rtn6aAU4qSAYnbhv9EFRk5xi-cPNfByTSA&s",
// ];
const posts = [
  {
    id: 1,
    imgUrl: "https://img.freepik.com/free-photo/medical-lab-worker-analyzing-blood-serum-conducting-virus-test-modern-equipped-lab-late-night-team-specialists-examining-vaccine-evolution-using-high-tech-treatment-against-covid19_482257-13621.jpg?t=st=1722632868~exp=1722636468~hmac=31f668f96bcfff7b70539d2d91a8ebd44b4a3c2f3dd3412ec1930987b400704c&w=2000",
    author: "MY Care Labs",
    title: "Wellness Testing Solutions",
    description:
      "Transform your workplace with on-site wellness testing from My Care Labs.",
      location :"/testing-solutions/wellness-testing-solutions/",
    
  },
  {
    id: 2,
    imgUrl: "https://img.freepik.com/free-photo/medium-shot-woman-looking-through-microscope_23-2148926618.jpg?t=st=1722632920~exp=1722636520~hmac=590b47a7ea8193278eddc0a14d4f2c5757095f8f618aad319c8ddb37d3fa1384&w=2000",
    author: "MY Care Labs",
    title: "Toxicology Testing",
    description:
      "In light of HR managers’ need to recruit and retain top talent, we offers drug testing for businesses and other organizations.",
        location:"/testing-solutions/toxicology-testing-solutions/",
    },
  {
    id: 3,
    imgUrl: "https://img.freepik.com/free-photo/mediums-hot-woman-wearing-goggles_23-2148926622.jpg?t=st=1722633014~exp=1722636614~hmac=ed2d1370bc5dfc2f69b8ca05050462a4e15fe954e9f8ae655d63b93889ed6505&w=1060",
    author: "MY Care Labs",
    title: "Infectious Disease Testing",
    description:
      "My Care Labs was founded during the COVID-19 Pandemic. We provide fast, simple, accurate infectious disease testing.",
       location:"/testing-solutions/infectious-disease-testing-solutions"
    },
  {
    id: 4,
    imgUrl: "https://img.freepik.com/free-photo/lab-technicians-talking-video-call-with-professional-chemist-doctor-explaning-vaccine-reactions_482257-507.jpg?t=st=1722633058~exp=1722636658~hmac=951a328e1de4971cd9691e5e6396550a5beecc52444452047c0db784920d0edf&w=2000",
    author: "MY Care Labs",
    title: "Oncology Testing",
    description:
      "My Care Labs is actively working on offering an array of oncology panels that can help detect different forms of cancers.",
    location:"//testing-solutions/oncology-testing-solutions/"
    },
  {
    id: 5,
    imgUrl: "https://www.scripps.org/sparkle-assets/images/blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39.jpg",
    author: "MY Care Labs",
    title: "Travel PCR Testing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
      location:"/travel-testing/"
  },
  // {
  //   id: 6,
  //   imgUrl: "/imgs/blog/6.png",
  //   author: "Karen Peabody",
  //   title: "State of JavaScript in 2024",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  // },
  // {
  //   id: 7,
  //   imgUrl: "/imgs/blog/7.png",
  //   author: "Dante Gordon",
  //   title: "What's new in Python?",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  // },
];