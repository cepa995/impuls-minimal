import React from 'react';
import TeacherSkills from './student-skills';
import TeacherInfo from './student-info';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import Image from 'next/image';

const TeacherDetailsArea = ({ item }) => {
    return (
        <>
            <Breadcrumb title="Student - Detalji" subTitle="Student - Detalji" />
            <section className="bd-teacher-widget-area pb-70 pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-50">
                            <div className="bd-teacher-widget wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="bd-teacher-widget-thumb p-relative">
                                    {item.img && <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />}
                                    <div className="panel wow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-50">
                            <div className="bd-teacher-widget theme-bg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="bd-teacher-widget-content">
                                    <h3 className="bd-teacher-widget-title">{item.name}</h3>
                                    <span className="bd-teacher-widget-tag">{item.designation}</span>
                                    <p>{item.paragraph_1}</p>
                                    <p>{item.paragraph_2}
                                    </p>
                                    {item.social_links && <div className="bd-teacher-widget-social">
                                        <span>Pratitie Me:</span>
                                        <ul>
                                            {item.social_links.map((social, i) => (
                                                <li key={i}>
                                                    <a target={social.target} href={social.link} rel="noreferrer"><i className={social.icon}></i></a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <TeacherSkills />
                        <TeacherInfo />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeacherDetailsArea;