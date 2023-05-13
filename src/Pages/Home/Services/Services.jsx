import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-10">
      <div className="mx-auto w-2/4 text-center space-y-3">
        <h3 className="text-2xl text-error font-semibold">Services</h3>
        <h1 className="text-5xl font-bold leading-[54px]">Our Services Area</h1>
        <p className="leading-[30px]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 md:gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
