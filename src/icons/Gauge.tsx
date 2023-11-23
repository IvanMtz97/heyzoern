import React from "react";
import { Svg, G, Circle } from "react-native-svg";

type GaugeProps = {
  percentages: number[];
}

function Gauge(props: GaugeProps) {
  const colors = ["#59D38A", "#7EEA8C"];
  const radius = 150;
  const strokeWidth = 18;
  const color = "#F7F8F9";
  const halfCircle = radius + strokeWidth;
  const cirlceCircumference = 2 * Math.PI * radius;
  const max = 120;

  return (
    <Svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}  
    >
      <G rotation={180} origin={`${halfCircle}, ${halfCircle}`}>
        <Circle
          cx="50%"
          cy="50%"
          stroke={color}
          strokeWidth={strokeWidth}
          r={radius}
          fill="transparent"
        />
        {props.percentages.map((p, i) => {
          const percentage = p;
          const maxPerc = 100 * percentage / max;
          const strokeDashOffset = cirlceCircumference - (cirlceCircumference * maxPerc) / 100;

          return (
            <Circle
              key={p + i}
              cx="50%"
              cy="50%"
              stroke={colors[i]}
              strokeWidth={strokeWidth}
              r={radius}
              fill="transparent"
              strokeDasharray={cirlceCircumference}
              strokeDashoffset={strokeDashOffset}
              strokeLinecap="round"
            />
          );
        })}
      </G>
    </Svg>
  );
}

export default Gauge;
