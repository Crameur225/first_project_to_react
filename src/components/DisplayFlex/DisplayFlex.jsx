import s from "./style.module.css";
export function DisplayFlex(props) {
  return (
    <div className={s.container}>
      {props.difficulty
        ? `Difficulty React is: ${props.difficulty}`
        : "No difficulty Entrie"}
    </div>
  );
}
