import React from 'react';

const HomeNewsletter = () => {
    
    // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }

    return (
        <section className="bd-newsletter-area">
            <div className="container">
                <div className="bd-newsletter pt-100 pb-100 theme-bg">
                    <div className="bd-newsletter-bg" style={{ backgroundImage: "url(/assets/img/bg/newsletter-bg.jpg)" }}></div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="bd-newsletter-content">
                                <div className="bd-section-title-wrapper text-center is-white mb-45">
                                    <h2 className="bd-section-title mb-0">Saznajte Sve o Budućim Dešavanjima</h2>
                                    <p>Pretplatite se kako biste ostali informaisani o svim budućim dešavanjima SCENlab-a</p>
                                </div>
                                <div className="bd-newsletter-form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="bd-newsletter-input">
                                            <input type="email" placeholder="Email Adresa"/>
                                            <button type="submit" className="bd-btn">
                                                <span className="bd-btn-inner">
                                                    <span className="bd-btn-normal"><i
                                                        className="fa-sharp fa-solid fa-paper-plane"></i>Pretplati Se</span>
                                                    <span className="bd-btn-hover"><i
                                                        className="fa-sharp fa-solid fa-paper-plane"></i>Pretplati Se</span>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeNewsletter;