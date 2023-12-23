import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PenIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || "24"} height={props.size || "24"} viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.8499 3.79359C18.801 2.8401 17.1993 2.84008 16.1504 3.79354C16.1016 3.8379 16.0497 3.88975 15.9824 3.95709L15.9698 3.96966L6.03657 13.9028L5.96302 13.9763C5.25466 14.6844 4.79718 15.1417 4.47843 15.7047C4.15967 16.2677 4.00291 16.8952 3.76019 17.8669L3.73498 17.9678L3.27241 19.8181C3.20851 20.0737 3.2834 20.3441 3.46969 20.5303C3.65597 20.7166 3.92634 20.7915 4.18192 20.7276L6.03221 20.265L6.1331 20.2398C7.1048 19.9971 7.73236 19.8404 8.29534 19.5216C8.85831 19.2029 9.31561 18.7454 10.0237 18.037L10.0972 17.9635L20.0304 8.03028L20.043 8.01766C20.1103 7.95036 20.1622 7.89853 20.2065 7.84974C21.16 6.80088 21.16 5.19915 20.2066 4.15026C20.1622 4.10148 20.1104 4.04966 20.0431 3.98238L20.043 3.98231L20.0305 3.96972L20.0179 3.95716L20.0179 3.95713C19.9506 3.8898 19.8987 3.83795 19.8499 3.79359Z"
      fill={props.color || "#22282F"}
    />
  </Svg>
)
export default PenIcon;
