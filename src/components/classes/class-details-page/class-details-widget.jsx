import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import program_img from "@assets/img/program/details-1.jpg";


const ClassDetailsWidget = () => {
    return (
        <section className="bd-program-details-widget pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-50">
                        <div className="bd-program-details-widget-content theme-bg-6 wow fadeInLeft" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <h3 className="bd-program-details-widget-title mb-20">Naziv Sekcije</h3>
                            <p className="mb-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nibh mi. In sed pulvinar ligula.
                            Integer sit amet urna et enim pulvinar eleifend. Nunc consectetur fringilla arcu ac molestie. Proin lobortis consectetur 
                            nisi ut aliquam. Suspendisse elit nisl, pretium et blandit vitae, pellentesque in justo.</p>
                            <p className="mb-25">In sit amet nibh mi. In sed pulvinar ligula.
                            Integer sit amet urna et enim pulvinar eleifend. Nunc consectetur fringilla arcu ac molestie. Proin lobortis consectetur 
                            nisi ut aliquam. Suspendisse elit nisl, pretium et blandit vitae, pellentesque in justo. </p>
                            <div className="bd-program-details-btn">
                                <Link href="/about" className="bd-btn">
                                    <span className="bd-btn-inner">
                                        <span className="bd-btn-normal">Know More</span>
                                        <span className="bd-btn-hover">Know More</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-50">
                        <div className="bd-program-details-slider p-relative wow fadeInRight" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <div className="bd-program-details-slider-thumb p-relative">
                                <Image src={program_img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                <div className="panel-2 wow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassDetailsWidget;