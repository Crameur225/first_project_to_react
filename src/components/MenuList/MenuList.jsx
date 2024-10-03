import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
export function MenuList({ onItemsClick, difficulty }) {
  return (
    <>
      <div className={s.container}>
        <MenuListItem
          onClick={onItemsClick}
          difficulty="Low"
          isSelected={difficulty === "Low"}
        />
        <MenuListItem
          onClick={onItemsClick}
          difficulty="Hard"
          isSelected={difficulty === "Hard"}
        />
        <MenuListItem
          onClick={onItemsClick}
          difficulty="High"
          isSelected={difficulty === "High"}
        />
        <MenuListItem
          onClick={onItemsClick}
          difficulty="Isane"
          isSelected={difficulty === "Isane"}
        />
      </div>
    </>
  );
}
