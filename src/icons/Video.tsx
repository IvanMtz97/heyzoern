import * as React from "react";
import Svg, { Path } from "react-native-svg";
const VideoIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="20"
    viewBox="0 0 25 20"
    fill="none"
    strokeWidth="2"
    {...props}
  >
    <Path
      id="Vector"
      d="M1.875 20C1.375 20 0.9375 19.8125 0.5625 19.4375C0.1875 19.0625 0 18.625 0 18.125V1.875C0 1.375 0.1875 0.9375 0.5625 0.5625C0.9375 0.1875 1.375 0 1.875 0H18.125C18.625 0 19.0625 0.1875 19.4375 0.5625C19.8125 0.9375 20 1.375 20 1.875V8.59375L25 3.59375V16.4062L20 11.4062V18.125C20 18.625 19.8125 19.0625 19.4375 19.4375C19.0625 19.8125 18.625 20 18.125 20H1.875ZM1.875 18.125H18.125V1.875H1.875V18.125Z"
      fill="black"
      strokeWidth="2"
    />
  </Svg>
)
export default VideoIcon;
