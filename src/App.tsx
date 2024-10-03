import "./styles.css";
import { DisplayFlex } from "./components/DisplayFlex/DisplayFlex";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";
import { useState } from "react";
export default function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  function onChangeDifficulty(difficulty) {
    setCurrentDifficulty(difficulty);
  }
  return (
    <>
      <div>
        <h1 className={s.title}>Choose the difficulty in react</h1>
        <div className={s.workspace}>
          <MenuList
            onItemsClick={onChangeDifficulty}
            difficulty={currentDifficulty}
          />
          <DisplayFlex difficulty={currentDifficulty} />
        </div>
      </div>
    </>
  );
}
