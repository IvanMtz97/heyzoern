import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.08203 6.41667C8.08203 4.80584 9.38787 3.5 10.9987 3.5C12.6095 3.5 13.9154 4.80584 13.9154 6.41667C13.9154 8.0275 12.6095 9.33333 10.9987 9.33333C9.38787 9.33333 8.08203 8.0275 8.08203 6.41667ZM10.9987 2C8.55944 2 6.58203 3.97741 6.58203 6.41667C6.58203 8.85592 8.55944 10.8333 10.9987 10.8333C13.438 10.8333 15.4154 8.85592 15.4154 6.41667C15.4154 3.97741 13.438 2 10.9987 2ZM5.33203 17.4167C5.33203 15.8058 6.63787 14.5 8.2487 14.5H13.7487C15.3595 14.5 16.6654 15.8058 16.6654 17.4167C16.6654 18.015 16.1803 18.5 15.582 18.5H6.41536C5.81706 18.5 5.33203 18.015 5.33203 17.4167ZM15.582 20C17.0088 20 18.1654 18.8434 18.1654 17.4167C18.1654 14.9774 16.188 13 13.7487 13H8.2487C5.80944 13 3.83203 14.9774 3.83203 17.4167C3.83203 18.8434 4.98863 20 6.41536 20H15.582Z"
      fill="#22282F"
    />
  </Svg>
)
export default UserIcon;
