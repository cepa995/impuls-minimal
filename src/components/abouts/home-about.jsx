import React from "react";
import faqImg from "@assets/img/faq/1.jpg";
import trippleLine from "@assets/img/shape/tripple-line.png";
import Image from "next/image";


const HomeAbout = () => {
  return (
    <>
      <section className="bd-faq-area pt-120 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="bd-faq-content mb-60">
                <div className="bd-section-title-wrapper mb-25 wow fadeInLeft" data-wow-duration="1s"
                  data-wow-delay=".3s">
                  <h2 className="bd-section-title mb-0">I'mpuls
                    <br />Saznajte Više
                  </h2>
                </div>
                <div className="bd-faq wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Često Postavljeno Pitanje 1?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show"
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nibh mi. In sed pulvinar ligula. Integer sit amet urna et enim pulvinar eleifend.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Često Postavljeno Pitanje 2?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nibh mi. In sed pulvinar ligula. Integer sit amet urna et enim pulvinar eleifend.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Često Postavljeno Pitanje 3?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nibh mi. In sed pulvinar ligula. Integer sit amet urna et enim pulvinar eleifend.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="bd-faq-thumb-wrapper mb-70 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="bd-faq-thumb">
                  <div className="bd-faq-thumb-mask p-relative wow fadeInRight" data-wow-duration="1s"
                    data-wow-delay=".3s">
                    <Image
                      src={faqImg}
                      style={{ width: "100%", height: "100%" }}
                      alt="faq img"
                    />
                    <div className="panel-2 wow"></div>
                  </div>
                </div>
                <div className="bd-faq-shape d-none p-relative d-lg-block">
                  <Image
                    src={trippleLine}
                    style={{ width: "100%", height: "100%" }}
                    alt="shape not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
