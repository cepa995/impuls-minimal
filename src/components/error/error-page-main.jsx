import React from 'react';
import Image from "next/image";
import error from "@assets/img/bg/error-404.svg";
import Link from 'next/link';

const ErrorPageMain = () => {
    return (
        <section className="bd-erro-area pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="bd-section-title-wrapper mb-45">
                            <h2 className="bd-section-title mb-0">OOPS! STRANICA NIJE PRONADJENA!</h2>
                            <p>Molimo Vas da se obratite nadleznom licu za dalja uputstva.</p>
                        </div>
                        <div className="bd-error-btn">
                            <Link href="/" className='bd-btn'>
                                <span className="bd-btn-inner">
                                    <span className="bd-btn-normal d-flex align-items-center"><i className="flaticon-hut"></i>Vratite se nazad</span>
                                    <span className="bd-btn-hover d-flex align-items-center"><i className="flaticon-hut"></i>Vratite se nazad</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="bd-error-thumb-wrapper">
                            <div className="bd-error-thumb">
                                <Image src={error} style={{ width: "100%", height: "100%" }} alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPageMain;