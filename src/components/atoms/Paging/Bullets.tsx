import React from "react";

interface BulletsProps {
  count: number;
  active: number;
}

const Bullets = (props: BulletsProps) => {
  return (
    <div className="flex gap-x-3">
      {Array.from({ length: props.count }, (_, i) => (
        <div
          className={`w-3 rounded-full h-3 bg-${props.active===i+1 ? "hippiegreen" : "alto"}`}
          key={`bullet-key-${i}`}
        ></div>
      ))}
    </div>
  );
};

export default Bullets;
