import * as React from "react";
import Svg, { Line, Rect } from "react-native-svg";
const SideMenuIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="15"
    viewBox="0 0 19 15"
    fill="none"
    {...props}
  >
    <Rect x="18" y="14" width="17" height="12.6154" rx="1" transform="rotate(-180 18 14)" stroke="black" strokeWidth="2"/>
    <Line x1="12" y1="14.6923" x2="12" y2="0.692261" stroke="black" strokeWidth="2"/>
  </Svg>
)
export default SideMenuIcon;
