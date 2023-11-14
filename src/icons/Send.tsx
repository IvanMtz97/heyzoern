import * as React from "react";
import Svg, { Path, ClipPath, Rect, G, Defs } from "react-native-svg";
const SendIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    {...props}
  >
    <G clip-path="url(#clip0_3185_4869)">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.768 14.8733C26.7682 15.1574 26.6079 15.4172 26.3539 15.5444L11.5099 22.9797C11.2387 23.1156 10.9124 23.0747 10.683 22.8761C10.4537 22.6775 10.3666 22.3604 10.4624 22.0725L12.6034 15.6336L17.9752 15.6296C18.3894 15.6293 18.7249 15.2933 18.7246 14.8791C18.7243 14.4649 18.3883 14.1293 17.9741 14.1296L12.6024 14.1336L10.4518 7.69761C10.3557 7.4099 10.4423 7.0926 10.6713 6.89368C10.9004 6.69476 11.2267 6.65339 11.4981 6.78885L26.3529 14.2027C26.6071 14.3296 26.7678 14.5892 26.768 14.8733Z"
        fill="#F2F2F2"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3185_4869">
        <Rect width="21" height="21" fill="white" transform="translate(15.4893 0.650879) rotate(44.958)"/>
      </ClipPath>
    </Defs>
  </Svg>
)
export default SendIcon;
