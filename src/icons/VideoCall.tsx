import * as React from "react";
import Svg, { Path } from "react-native-svg";
const VideoCallIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    {...props}
  >
    <Path
      d="M11.25 0.134766C11.6016 0.134766 11.8945 0.261719 12.1289 0.515625C12.3828 0.75 12.5098 1.0332 12.5098 1.36523V8.86523C12.5098 9.2168 12.3828 9.51953 12.1289 9.77344C11.8945 10.0078 11.6016 10.125 11.25 10.125H2.49023L0 12.6152V1.36523C0 1.0332 0.117188 0.75 0.351562 0.515625C0.605469 0.261719 0.908203 0.134766 1.25977 0.134766H11.25ZM9.99023 7.63477V2.625L7.5 4.61719V2.625H2.49023V7.63477H7.5V5.61328L9.99023 7.63477Z"
      fill={props.color || "white"}
    />
  </Svg>
)
export default VideoCallIcon;
