import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#F2F2F2"
      fillRule="evenodd"
      d="M3.875 10.125a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Zm6.25-7.75a7.75 7.75 0 1 0 4.924 13.735l2.42 2.42a.75.75 0 1 0 1.061-1.06l-2.42-2.42a7.75 7.75 0 0 0-5.985-12.674Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SearchIcon;
