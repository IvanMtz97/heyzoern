import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DocumentsIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="24"
    viewBox="0 0 27 24"
    fill="none"
    {...props}
  >
    <Path
      d="M1 6.75V6.75C1 4.88077 1 3.94615 1.40192 3.25C1.66523 2.79394 2.04394 2.41523 2.5 2.15192C3.19615 1.75 4.13077 1.75 6 1.75H8.51472C9.74097 1.75 10.3541 1.75 10.9054 1.97836C11.4567 2.20672 11.8903 2.64027 12.7574 3.50736L12.9926 3.74264C13.8597 4.60973 14.2933 5.04328 14.8446 5.27164C15.3959 5.5 16.009 5.5 17.2353 5.5H20C22.8284 5.5 24.2426 5.5 25.1213 6.37868C26 7.25736 26 8.67157 26 11.5V17C26 19.8284 26 21.2426 25.1213 22.1213C24.2426 23 22.8284 23 20 23H7C4.17157 23 2.75736 23 1.87868 22.1213C1 21.2426 1 19.8284 1 17V6.75Z"
      stroke={props.disabled ? "#BDBDBD" : "black"}
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M6.63784 14.2247L11.102 18.6091C11.323 18.8261 11.677 18.8261 11.898 18.6091L16.3622 14.2247C17.5366 13.0712 17.5366 11.1788 16.3622 10.0253C15.2173 8.90092 13.3827 8.90092 12.2378 10.0253L11.5 10.75L10.7622 10.0253C9.6173 8.90092 7.7827 8.90092 6.63783 10.0253C5.46342 11.1788 5.46342 13.0712 6.63784 14.2247Z"
      stroke={props.disabled ? "#BDBDBD" : "black"}
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
)
export default DocumentsIcon;
