import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/lettuce.json";

import Typography from "@material-ui/core/Typography";

export default function LottieAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      //   preserveAspectRatio: "xMidYMid slice"
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={300} />
      <Typography
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: "18px",
          marginTop: "-40px",
        }}
      >
        {"Lettuce chill, new streams coming soon!!"}
      </Typography>
    </div>
  );
}
