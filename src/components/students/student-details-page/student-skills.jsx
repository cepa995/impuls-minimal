import React from 'react';

const TeacherSkills = () => {
    return (
        <div className="col-lg-6 mb-50">
            <div className="bd-teacher-widget theme-bg-6 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="bd-teacher-widget-content">
                    <h4 className="bd-teacher-widget-title-2 mb-25">Moje Veštine & Atributi</h4>
                    <div className="bd-teacher-skill-wrap">
                        <div className="bd-teacher-skill mb-30">
                            <div className="bd-teacher-skill-content">
                                <span>Lepa</span>
                                <span>100%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="bd-teacher-skill mb-30">
                            <div className="bd-teacher-skill-content">
                                <span>Pametna</span>
                                <span>100%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="bd-teacher-skill mb-30">
                            <div className="bd-teacher-skill-content">
                                <span>Tvrdoglava</span>
                                <span>120%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="120" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherSkills;