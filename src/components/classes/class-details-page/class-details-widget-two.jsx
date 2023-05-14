import React from 'react';
import Image from "next/image";
import program_img from "@assets/img/more-info-clipart.png";

const ClassDetailsWidgetTwo = () => {
    return (
        <section className="bd-class-details-widget pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6  mb-50">
                        <div className="bd-class-details-thumb p-relative wow fadeInLeft" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <Image src={program_img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                            <div className="panel wow"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-50">
                        <div className="bd-class-details-widget-content theme-bg-6 wow fadeInRight" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <h3 className="bd-class-details-widget-title mb-20">Više Informacija</h3>
                            <p className="mb-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nibh mi. In sed pulvinar ligula.</p>
                            <div className="bd-class-details-list">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>In sit amet nibh mi. In sed pulvinar ligula</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>In sit amet nibh mi. In sed pulvinar ligula</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassDetailsWidgetTwo;