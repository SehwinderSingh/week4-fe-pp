import { useState } from "react";
import { services } from "../data";
import Title from "./Title";
import Service from "./Service";

function Services() {
  const [servicesData, setServicesData] = useState(services);

  const handleRemoveService = (id) => {
    setServicesData(servicesData.filter((service) => service.id !== id));
  };

  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {servicesData.map((service) => {
          return (
            <Service
              {...service}
              key={service.id}
              onRemove={handleRemoveService}
            />
          );
        })}
      </div>
    </section>
  );
}
export default Services;
