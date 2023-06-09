import ImageLightBox from '@components/common/modals/image-lightbox';
import Image from 'next/image';
import React, { useState } from 'react';

const GallaryPageMain = ({gallary_data}) => {

    // photoIndex
    const [photoIndex, setPhotoIndex] = useState(null);
    // image open state
    const [open, setOpen] = useState(false);
    // handleImagePopup
    const handleImagePopup = (index) => {
        setPhotoIndex(index);
        setOpen(true);
    };
    //  images
    const images = gallary_data?.map((item) => item.img.src);
    return (
        <>
        
        <div className="bd-gallery-area p-relative pt-120 pb-95 p-relative">
            <div className="container">
                <div className="row">
                        {gallary_data?.slice(0, 20).map((item, index) => (
                            <div className={item.wrap} key={index}>
                                {!item.inners && <div className="bd-gallery mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="bd-gallery-thumb-wrapper">
                                        <p>{item.name}</p>
                                        <div className="bd-gallery-thumb">
                                            <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        </div>
                                        <div className="bd-gallery-icon">
                                            <a onClick={() => handleImagePopup(index)} className="popup-image"><i className="flaticon-eye"></i></a>
                                        </div>
                                    </div>
                                </div>}

                                {item.inners && <div className="row">
                                    {item.inners.map((inner) => (
                                        <div className="col-12" key={inner.id}>
                                            <div className="bd-gallery mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                                <div className="bd-gallery-thumb-wrapper">
                                                    <div className="bd-gallery-thumb">
                                                        <Image src={inner.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                    </div>
                                                    <div className="bd-gallery-icon">
                                                        <a onClick={() => handleImagePopup(index)} className="popup-image"><i className="flaticon-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>}
                            </div>
                        ))}

                    {/* <div className="col-lg-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="bd-gallery mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="bd-gallery-thumb-wrapper">
                                        <div className="bd-gallery-thumb">
                                            <img src="assets/img/gallery/d1.png" alt="img not found" />
                                        </div>
                                        <div className="bd-gallery-icon">
                                            <a href="assets/img/gallery/d1.png" className="popup-image"><i className="flaticon-eye"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="bd-gallery mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="bd-gallery-thumb-wrapper">
                                        <div className="bd-gallery-thumb">
                                            <img src="assets/img/gallery/d4.png" alt="img not found" />
                                        </div>
                                        <div className="bd-gallery-icon">
                                            <a href="assets/img/gallery/d4.png" className="popup-image"><i className="flaticon-eye"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bd-gallery mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="bd-gallery-thumb-wrapper">
                                <div className="bd-gallery-thumb">
                                    <img src="assets/img/gallery/d2.png" alt="img not found" />
                                </div>
                                <div className="bd-gallery-icon">
                                    <a href="assets/img/gallery/d2.png" className="popup-image"><i className="flaticon-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bd-gallery mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="bd-gallery-thumb-wrapper">
                                <div className="bd-gallery-thumb">
                                    <img src="assets/img/gallery/d3.png" alt="img not found" />
                                </div>
                                <div className="bd-gallery-icon">
                                    <a href="assets/img/gallery/d3.png" className="popup-image"><i className="flaticon-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bd-gallery mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="bd-gallery-thumb-wrapper">
                                <div className="bd-gallery-thumb">
                                    <img src="assets/img/gallery/d5.png" alt="img not found" />
                                </div>
                                <div className="bd-gallery-icon">
                                    <a href="assets/img/gallery/d5.png" className="popup-image"><i className="flaticon-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bd-gallery mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="bd-gallery-thumb-wrapper">
                                <div className="bd-gallery-thumb">
                                    <img src="assets/img/gallery/d6.png" alt="img not found" />
                                </div>
                                <div className="bd-gallery-icon">
                                    <a href="assets/img/gallery/d6.png" className="popup-image"><i className="flaticon-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="bd-gallery mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="bd-gallery-thumb-wrapper">
                                        <div className="bd-gallery-thumb">
                                            <img src="assets/img/gallery/d7.png" alt="img not found" />
                                        </div>
                                        <div className="bd-gallery-icon">
                                            <a href="assets/img/gallery/d7.png" className="popup-image"><i className="flaticon-eye"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="bd-gallery mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="bd-gallery-thumb-wrapper">
                                        <div className="bd-gallery-thumb">
                                            <img src="assets/img/gallery/d8.png" alt="img not found" />
                                        </div>
                                        <div className="bd-gallery-icon">
                                            <a href="assets/img/gallery/d8.png" className="popup-image"><i className="flaticon-eye"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

        <ImageLightBox
                images={images}
                open={open}
                setOpen={setOpen}
                photoIndex={photoIndex}
                setPhotoIndex={setPhotoIndex}
            />
        </>
    );
};

export default GallaryPageMain;