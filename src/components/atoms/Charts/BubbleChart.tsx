import React from "react";
import { Tooltip } from "../Tooltip";

export interface IBubble {
  label: string;
  xPos: number;
  yPos: number;
  radius: number;
  color: string;
  value?: number;
}
interface ISimpleBubbleChartProps {
  height: number;
  width: number;
  bubbles: IBubble[];
}

const SimpleBubbleChart = (props: ISimpleBubbleChartProps) => {
  //-------------------------------------------------------------------------------//
  const squareSize = 30;
  //-------------------------------------------------------------------------------//
  return (
    <div
      className={`w-full relative h-full items-center`}
      style={{ height: `${props.height}px` }}
    >
      <div className="absolute w-full h-full z-0 grid grid-cols-8">
        {Array.from({ length: 24 }, (_, index) => (
          <div
            key={index}
            className={`z-0 p-0 m-0 w-full h-full border border-gray-200 inline-block`}
          ></div>
        ))}
      </div>
      <div className="absolute w-full h-full overflow-x-auto">
        {props.bubbles.map((bubble: IBubble, i: number) => {
          return (
            <div
              key={`bubble-chart-${i}-${bubble.label}`}
              className={`absolute cursor-pointer z-20 opacity-90 hover:opacity-80 text-[8px] text-wrap rounded-full px] flex items-center justify-center`}
              style={{
                width: `${bubble.radius * squareSize * 2}px`,
                height: `${bubble.radius * squareSize * 2}px`,
                backgroundColor: `${bubble.color}`,
                left: `${(bubble.xPos * squareSize) / 2}px`,
                bottom: `${(bubble.yPos * squareSize) / 2}px`,
              }}
            >
              <Tooltip
                text={bubble.label}
                element={<div className="mx-5">{bubble.label}</div>}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleBubbleChart;
