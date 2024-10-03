import { useState } from "react";
import s from "./style.module.css";
export function MenuListItem({ onClick, difficulty, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  function getBackground() {
    if (isHovered) {
      return "#a5e9ff";
    } else if (isSelected) {
      return "#26baea";
    } else {
      return "#eff0ef";
    }
  }

  return (
    <div
      onClick={() => onClick(difficulty)}
      className={s.container}
      style={{ backgroundColor: getBackground() }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Set to: {difficulty}
    </div>
  );
}
