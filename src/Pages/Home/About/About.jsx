import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl " />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 border-white border-8 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 ">
          <div className="w-4/6 space-y-5">
            <h3 className="text-3xl text-error font-semibold">About Us</h3>
            <h1 className="text-5xl font-bold leading-[54px]">
              We are qualified & of experience in this field
            </h1>
            <p className="leading-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <p className="leading-[30px]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even slightly
              believable.
            </p>
            <button className="btn btn-error text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
