import React from 'react';
import shape1 from "@assets/img/shape/curved-line-2.png";
import heroImg from "@assets/img/hero/home-banner.png";
import gif from "@assets/img/hero/impuls-reversed-cut.gif";
import shape2 from "@assets/img/shape/home-3-shape-1.png";
import shape3 from "@assets/img/shape/home-3-shape-2.png";
import shape4 from "@assets/img/shape/home-3-shape-3.png";
import shape5 from "@assets/img/shape/hero-3-shape-4.png";
import Image from 'next/image';
import Link from 'next/link';

const HomeHero = () => {
    return (
        <section className="bd-hero-area bd-hero-area-3 fix">
            <div className="bd-gradient-bg"></div>
            <div className="bd-hero-social-wrapper">
                <div className="bd-hero-social">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i>facebook</a>
                </div>
                <div className="bd-hero-social">
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i>instagram</a>
                </div>
                <div className="bd-hero-social">
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i>youtube</a>
                </div>
            </div>
            <div className="container">
                <div className="bd-hero-inner-3">
                    <div className="bd-hero-shape-wrapper d-none d-lg-block">
                        <div className="bd-hero-3-shape-2">
                            <Image
                                src={shape4}
                                style={{ width: "100%", height: "100%" }}
                                alt="img not found"
                            />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-6">
                            <div className="bd-hero-content">
                                {/*<span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">SCENlab
                                    Program</span>*/}
                                <h1 className="bd-hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                        <Image
                                            src={heroImg}
                                            style={{ paddingLeft: "150px", width: "auto", height: "100%" }}
                                            alt="img not found"
                                        />
                                </h1>
                                <div className="bd-hero-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                    {/*<Link href="/programs" className="bd-btn">
                                        <span className="bd-btn-inner">
                                            <span className="bd-btn-normal">Posetite Nas</span>
                                            <span className="bd-btn-hover">Posetite Nas</span>
                                        </span>
                                    </Link>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div id="scene">
                                <div className="bd-hero-thumb-3-wrapper p-relative z-index-1" data-depth=".4">
                                    {/*<div className="bd-hero-thumb-3 p-relative">
                                        <div className="bd-hero-thumb-3-mask">
                                            <Image
                                                src={heroImg}
                                                style={{ width: "auto", height: "100%" }}
                                                alt="img not found"
                                            />
                                        </div>
                                    </div>*/}
                                    <div className="bd-hero-thumb-3-shape d-none d-md-block">
                                        <div className="bd-hero-thumb-3-shape-1 p-absolute">
                                            <Image
                                                src={shape2}
                                                style={{ width: "100%", height: "100%" }}
                                                alt="img not found"
                                            />
                                        </div>
                                        <div className="bd-hero-thumb-3-shape-2 p-absolute">
                                            <Image
                                                src={shape3}
                                                style={{ width: "100%", height: "100%" }}
                                                alt="img not found"
                                            />
                                        </div>
                                        <div className="bd-hero-thumb-3-shape-3 p-absolute">
                                            <Image
                                                src={shape4}
                                                style={{ width: "100%", height: "100%" }}
                                                alt="img not found"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bd-hero-3-shape d-none d-lg-block" id="scene2">
                {/*<Image data-depth=".5"
                    src={shape5}
                    style={{ width: "100%", height: "100%" }}
                    alt="img not found"
                />*/}
            </div>
        </section>
    );
};

export default HomeHero;