import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PhoneIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="23"
    viewBox="0 0 14 23"
    fill="none"
    {...props}
  >
    <Path
      d="M1.5 23C1.1 23 0.75 22.8432 0.45 22.5295C0.15 22.2159 0 21.85 0 21.4318V1.56818C0 1.15 0.15 0.784091 0.45 0.470455C0.75 0.156818 1.1 0 1.5 0H12.5C12.9 0 13.25 0.156818 13.55 0.470455C13.85 0.784091 14 1.15 14 1.56818V21.4318C14 21.85 13.85 22.2159 13.55 22.5295C13.25 22.8432 12.9 23 12.5 23H1.5ZM1.5 19.0795V21.4318H12.5V19.0795H1.5ZM7.00437 21.0398C7.21812 21.0398 7.39583 20.9642 7.5375 20.813C7.67917 20.6619 7.75 20.4746 7.75 20.2511C7.75 20.0276 7.67771 19.8419 7.53313 19.6938C7.38853 19.5456 7.20936 19.4716 6.99563 19.4716C6.78188 19.4716 6.60417 19.5472 6.4625 19.6983C6.32083 19.8495 6.25 20.0368 6.25 20.2603C6.25 20.4837 6.32229 20.6695 6.46687 20.8176C6.61147 20.9657 6.79064 21.0398 7.00437 21.0398ZM1.5 17.5114H12.5V3.92045H1.5V17.5114ZM1.5 2.35227H12.5V1.56818H1.5V2.35227Z"
      fill="black"
    />
  </Svg>
)
export default PhoneIcon;
