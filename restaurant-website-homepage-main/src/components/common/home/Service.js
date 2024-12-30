import React from "react";
import { FaUtensils, FaHeart, FaBroom } from "react-icons/fa"; 
import CommonHeading from "../CommonHeading"; 


export const services = [
  {
    name: "Chef",
    description: "Our expert chefs prepare delicious and customized meals, catering to all dietary needs and preferences.",
    icon: <FaUtensils /> 
  },
  {
    name: "Nanny",
    description: "Reliable and caring nannies to take care of your children, providing safe and engaging activities.",
    icon: <FaHeart /> 
  },
  {
    name: "Maid",
    description: "Professional maids offering house cleaning, laundry, and other home services to keep your home pristine.",
    icon: <FaBroom /> 
  },
  {
    name: "One Day Cleaning",
    description: "Professional Service that provides a deep cleaning of a home or space in a single day.",
    icon: <FaBroom /> 
  },
  {
    name: "Part Time Maid",
    description: "Professional Services that provides cleaning and household task on a part time or as needed basis. Part time maids typically works for a few hours per day or week.",
    icon: <FaBroom /> 
  },
  {
    name: "Helper",
    description: "Professional Service that provides assistance with household tasks and chores to help individuals and families manage their daily life.",
    icon: <FaBroom /> 
  }
];

export default function Services() {
  return (
    
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <CommonHeading
            heading="Our Services"
            title="Services"
            subtitle="Explore Our"
          />
        </div>
        <div className="row g-4">
          {services.map((item, index) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
              <a className="service-item rounded" href="">
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    {item.icon}
                  </div>
                </div>
                <h5 className="mb-3">{item.name}</h5>
                <p className="text-body mb-0">{item.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

