import * as React from "react";
import * as styles from "./RandomColorButton.module.scss";

interface IProps {
  handleClick: () => void;
}
const RandomColorButton: React.SFC<IProps> = ({ handleClick }) => (
  <button className={styles.container} onClick={handleClick}>
    Random Colour!
  </button>
);
export default RandomColorButton;
