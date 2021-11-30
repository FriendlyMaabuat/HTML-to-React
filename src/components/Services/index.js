import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/services")
      .then((res) => setServices(res.data));
  }, []);

  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row text-center">
          {services.map((item) => {
            return (
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">{item.title}</h4>
                <p className="text-muted">{item.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
