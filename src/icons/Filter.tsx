import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Filter = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="15" height="15" viewBox="0 0 15 15"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.375 4.375C6.375 3.06332 7.43832 2 8.75 2C9.89016 2 10.8427 2.80342 11.0723 3.875H13.125C13.4011 3.875 13.625 4.09886 13.625 4.375C13.625 4.65114 13.4011 4.875 13.125 4.875H11.0723C10.8427 5.94658 9.89016 6.75 8.75 6.75C7.43832 6.75 6.375 5.68668 6.375 4.375ZM8.75 3C9.50939 3 10.125 3.61561 10.125 4.375C10.125 5.13439 9.50939 5.75 8.75 5.75C7.99061 5.75 7.375 5.13439 7.375 4.375C7.375 3.61561 7.99061 3 8.75 3ZM1.875 3.875C1.59886 3.875 1.375 4.09886 1.375 4.375C1.375 4.65114 1.59886 4.875 1.875 4.875H5C5.27614 4.875 5.5 4.65114 5.5 4.375C5.5 4.09886 5.27614 3.875 5 3.875H1.875ZM1.875 10.125C1.59886 10.125 1.375 10.3489 1.375 10.625C1.375 10.9011 1.59886 11.125 1.875 11.125H3.92772C4.15734 12.1966 5.10984 13 6.25 13C7.56168 13 8.625 11.9367 8.625 10.625C8.625 9.31332 7.56168 8.25 6.25 8.25C5.10984 8.25 4.15734 9.05342 3.92772 10.125H1.875ZM4.875 10.625C4.875 11.3844 5.49061 12 6.25 12C7.00939 12 7.625 11.3844 7.625 10.625C7.625 9.86561 7.00939 9.25 6.25 9.25C5.49061 9.25 4.875 9.86561 4.875 10.625ZM10 10.125C9.72386 10.125 9.5 10.3489 9.5 10.625C9.5 10.9011 9.72386 11.125 10 11.125H13.125C13.4011 11.125 13.625 10.9011 13.625 10.625C13.625 10.3489 13.4011 10.125 13.125 10.125H10Z"
      fill="#22282F"
    />
  </Svg>
)
export default Filter;