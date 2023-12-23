import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ClockIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || "12"}
    height={props.size || "12"}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <Path
      d="M8.205 8.895L8.88 8.22L6.495 5.82V2.805H5.595V6.18L8.205 8.895ZM6 12C5.18 12 4.405 11.8425 3.675 11.5275C2.945 11.2125 2.3075 10.7825 1.7625 10.2375C1.2175 9.6925 0.7875 9.055 0.4725 8.325C0.1575 7.595 0 6.82 0 6C0 5.18 0.1575 4.405 0.4725 3.675C0.7875 2.945 1.2175 2.3075 1.7625 1.7625C2.3075 1.2175 2.945 0.7875 3.675 0.4725C4.405 0.1575 5.18 0 6 0C6.82 0 7.595 0.1575 8.325 0.4725C9.055 0.7875 9.6925 1.2175 10.2375 1.7625C10.7825 2.3075 11.2125 2.945 11.5275 3.675C11.8425 4.405 12 5.18 12 6C12 6.82 11.8425 7.595 11.5275 8.325C11.2125 9.055 10.7825 9.6925 10.2375 10.2375C9.6925 10.7825 9.055 11.2125 8.325 11.5275C7.595 11.8425 6.82 12 6 12ZM6 11.1C7.4 11.1 8.6 10.6 9.6 9.6C10.6 8.6 11.1 7.4 11.1 6C11.1 4.6 10.6 3.4 9.6 2.4C8.6 1.4 7.4 0.9 6 0.9C4.6 0.9 3.4 1.4 2.4 2.4C1.4 3.4 0.9 4.6 0.9 6C0.9 7.4 1.4 8.6 2.4 9.6C3.4 10.6 4.6 11.1 6 11.1Z"
      fill={props.color || "white"}
    />
  </Svg>
)
export default ClockIcon;
