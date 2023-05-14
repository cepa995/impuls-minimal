import React from 'react';

const TeacherInfo = () => {
    return (
        <div className="col-lg-6 mb-50">
            <div className="bd-teacher-widget theme-bg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="bd-teacher-widget-content">
                    <h4 className="bd-teacher-widget-title-2 mb-15">Lične Informacije : </h4>
                    <div className="bd-teacher-widget-info-wrap">
                        <div className="bd-teacher-widget-info">
                            <p>Email:</p>
                            <p><a href="mailto:maryam.gbaya@gmail.com">maryam.gbaya@gmail.com</a></p>
                        </div>
                        <div className="bd-teacher-widget-info">
                            <p>Edukacija:</p>
                            <p>Fakultet Tehničkih Nauka, Novi Sad, Srbija</p>
                        </div>
                        <div className="bd-teacher-widget-info">
                            <p>Upisala Studije</p>
                            <p>2019</p>
                        </div>
                        <div className="bd-teacher-widget-info">
                            <p>Vreme Završetka: </p>
                            <p>2023</p>
                        </div>
                        <div className="bd-teacher-widget-info">
                            <p>Hobi: </p>
                            <p>Edukujem svog dečka o pozorišnoj produkciji</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherInfo;