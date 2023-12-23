import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CloseIcon = (props: any) => (
  <Svg
    width={props.size || "12"}
    height={props.size || "13"}
    viewBox="0 0 12 13"
    fill="none"
    {...props}
  >
    <Path
      d="M11.6797 1.85156L6.99219 6.5L11.6797 11.1484L10.5078 12.3203L5.82031 7.67188L1.17188 12.3203L0 11.1484L4.64844 6.5L0 1.85156L1.17188 0.679688L5.82031 5.32812L10.5078 0.679688L11.6797 1.85156Z"
      fill={props.color || "black"}
    />
  </Svg>
)
export default CloseIcon;
