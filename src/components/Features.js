import feature1 from "../assets/Feature1.svg";
import Card from "./Card";


import downloadIcon from '../assets/cloud-download-outline.svg'
import memberIcon from '../assets/person-add-outline.svg'
import communities from '../assets/people-outline.svg'

const Features = () => {

    const images=[
        {
            url:downloadIcon,
            alt:"downlaod",
            text: "Downloads"
        },
        {
            url:memberIcon,
            alt:"member",
            text: "Members"
        },
        {
            url:communities,
            alt:"community",
            text: "Community"
        },

    ]

    const cardJsx=images.map(image=>(
        <Card data={image} />
    ))
  return (
    <div id="feature">
      <h2 className="text-center mt-12 font-inter text-4xl font-bold mb-4">
        Features
      </h2>
      <div className="flex flex-col justify-between md:w-[50%] w-[90%]  mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
          <img
            src={feature1}
            alt="imge"
            className="w-8/12 md:w-2/5 h-auto text-center"
          />
          <div className="w-11/12 md:w-3/5 mx-auto my-4 md:my-auto">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">
              My Name is Anthony Bangali 2
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tristique fringilla blandit.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
          <div className="w-11/12 md:w-3/5 mx-auto my-4 md:my-auto">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">
              My Name is Anthony Bangali 2
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tristique fringilla blandit.
            </p>
          </div>
          <img
            src={feature1}
            alt="imige"
            className="w-11/12 md:w-2/5 h-auto text-center"
          />
        </div>

        <div className="flex-col justify-around text-center mb-4">
          <div className="w-11/12 md:w-3/5 mx-auto my-4 md:my-auto">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">
              My Name is Anthony Bangali 2
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tristique fringilla blandit.
            </p>
          </div>
          <img
            src={feature1}
            alt="iopage"
            className="h-auto mx-auto md:w-[30%] w-[60%] "
          ></img>
        </div>

        <div className=" text-center flex flex-wrap  justify-between md:gap-6 gap-4 mt-10 ">
        {cardJsx}
        </div>
      </div>
    </div>
  );
};

export default Features;
