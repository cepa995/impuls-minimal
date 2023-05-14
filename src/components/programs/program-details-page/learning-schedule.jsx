import React from 'react';

const LearningSchedule = () => {
    return (
        <section className="bd-routine-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bd-routine-table mb-50 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <span style={{"display": "grid", "justifyContent": "center"}}><th scope="col">Audio</th></span>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cavacax - Jovana Dugonjić
                                            
                                        <span style={{"float": "right"}}><i className="flaticon-play-button"></i></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningSchedule;