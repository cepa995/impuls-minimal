import React, { useEffect, useRef, useState } from "react";

export const AudioPlayer = ({filePath}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [progressWidth, setProgressWidth] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const updateTime = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
    setProgressWidth((audio.currentTime / audio.duration) * 100);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px", flexDirection: "column"}}>
      <audio ref={audioRef} src="/file_example_MP3_700KB.mp3" />
      <p style={{ whiteSpace: "nowrap", margin: 0 }}></p>
      
      <div
        style={{
          width: "100%",
          height: "7px",
          background: "lightgray",
          position: "relative",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: `${progressWidth}%`,
            height: "100%",
            background: "#C732AE",
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
            borderRadius: "20px",
          }}
        />
      </div>
      <button onClick={togglePlay}>
        {isPlaying ? (
          <img src="/pause-button-svgrepo-com.svg" alt="Pause" />
        ) : (
          <img src="/play-button-svgrepo-com.svg" alt="Play" />
        )}
      </button>
      <p
        style={{
          whiteSpace: "nowrap",
          margin: 0,
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        {formatTime(currentTime)} / {formatTime(duration)}
      </p>
    </div>
  );
};
