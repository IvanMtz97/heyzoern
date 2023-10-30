import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
const CalendarNote = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Rect x="3" y="3" width="18" height="18" rx="4" fill="#F3F0FF"/>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.75C14.9068 3.75 16.2615 3.75159 17.2892 3.88976C18.2952 4.02502 18.8749 4.27869 19.2981 4.7019C19.7213 5.12511 19.975 5.70476 20.1102 6.71085C20.2484 7.73851 20.25 9.09318 20.25 11V13C20.25 14.9068 20.2484 16.2615 20.1102 17.2892C19.975 18.2952 19.7213 18.8749 19.2981 19.2981C18.8749 19.7213 18.2952 19.975 17.2892 20.1102C16.2615 20.2484 14.9068 20.25 13 20.25H11C9.09318 20.25 7.73851 20.2484 6.71085 20.1102C5.70476 19.975 5.12511 19.7213 4.7019 19.2981C4.27869 18.8749 4.02502 18.2952 3.88976 17.2892C3.75159 16.2615 3.75 14.9068 3.75 13V9.33333C3.75 8.23265 3.75055 7.45098 3.79921 6.83868C3.8472 6.23478 3.93844 5.86008 4.08516 5.56256C4.40159 4.92091 4.92091 4.40159 5.56256 4.08516C5.86008 3.93844 6.23478 3.8472 6.83868 3.79921C7.45098 3.75055 8.23264 3.75 9.33333 3.75H13ZM2.25 9.30128V9.33333V13V13.0564C2.24998 14.8942 2.24997 16.3498 2.40313 17.489C2.56076 18.6614 2.89288 19.6104 3.64124 20.3588C4.38961 21.1071 5.33856 21.4392 6.51098 21.5969C7.65018 21.75 9.1058 21.75 10.9435 21.75H10.9436H11H13H13.0564H13.0565C14.8942 21.75 16.3498 21.75 17.489 21.5969C18.6614 21.4392 19.6104 21.1071 20.3588 20.3588C21.1071 19.6104 21.4392 18.6614 21.5969 17.489C21.75 16.3498 21.75 14.8942 21.75 13.0565V13.0564V13V11V10.9436V10.9435C21.75 9.1058 21.75 7.65018 21.5969 6.51098C21.4392 5.33856 21.1071 4.38961 20.3588 3.64124C19.6104 2.89288 18.6614 2.56076 17.489 2.40314C16.3498 2.24997 14.8942 2.24998 13.0564 2.25L13 2.25H9.33333L9.30128 2.25C8.23977 2.25 7.39854 2.24999 6.71986 2.30392C6.02597 2.35906 5.43809 2.47407 4.89913 2.73985C3.96133 3.20233 3.20233 3.96133 2.73985 4.89913C2.47407 5.43809 2.35906 6.02597 2.30392 6.71986C2.24999 7.39854 2.24999 8.23977 2.25 9.30128ZM7 7.25C6.58579 7.25 6.25 7.58579 6.25 8C6.25 8.41421 6.58579 8.75 7 8.75H17C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25H7ZM6.25 12C6.25 11.5858 6.58579 11.25 7 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12ZM7 15.25C6.58579 15.25 6.25 15.5858 6.25 16C6.25 16.4142 6.58579 16.75 7 16.75H10C10.4142 16.75 10.75 16.4142 10.75 16C10.75 15.5858 10.4142 15.25 10 15.25H7Z" fill="#5837E8"/>
  </Svg>
)
export default CalendarNote;
