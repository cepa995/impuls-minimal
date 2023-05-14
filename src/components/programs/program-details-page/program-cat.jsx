import React from 'react';

const ProgramCat = ({dateStart, duration}) => {
    return (
        <section className="bd-shop-cat-area pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="bd-shop-cat-wrap mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="bd-shop-cat">
                                <div className="bd-shop-cat-content">
                                    <div className="bd-shop-cat-title cat-1">
                                        <div className="bd-shop-cat-icon">
                                            <i className="flaticon-age-group"></i>
                                        </div>
                                    </div>
                                    <h6>Urast</h6>
                                    <span>Nedefinisan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="bd-shop-cat-wrap mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="bd-shop-cat">
                                <div className="bd-shop-cat-content">
                                    <div className="bd-shop-cat-title cat-2">
                                        <div className="bd-shop-cat-icon">
                                            <i className="flaticon-calendar"></i>
                                        </div>
                                    </div>
                                    <h6>Datum Početka</h6>
                                    <span>{dateStart}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="bd-shop-cat-wrap mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="bd-shop-cat">
                                <div className="bd-shop-cat-content">
                                    <div className="bd-shop-cat-title cat-3">
                                        <div className="bd-shop-cat-icon">
                                            <i className="flaticon-clock-1"></i>
                                        </div>
                                    </div>
                                    <h6>Period Trajanja</h6>
                                    <span>{duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="bd-shop-cat-wrap mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="bd-shop-cat">
                                <div className="bd-shop-cat-content">
                                    <div className="bd-shop-cat-title cat-4">
                                        <div className="bd-shop-cat-icon">
                                            <i className="flaticon-class"></i>
                                        </div>
                                    </div>
                                    <h6>Maksimalan Broj Ljudi</h6>
                                    <span>Neograničeno</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramCat;