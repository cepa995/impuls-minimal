import { AudioPlayer } from "@components/audio-player";
import React from "react";

const LearningSchedule = ({audioPath, audioFileName}) => {
  return (
    <section style={{"paddingTop": "120px"}} className="bd-routine-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="bd-routine-table mb-50 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <table className="table table-striped">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <span>
                      <th style={{ padding: "20px 0"}} scope="col"> {audioFileName}</th>
                    </span>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <AudioPlayer filePath={audioPath}/>
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
