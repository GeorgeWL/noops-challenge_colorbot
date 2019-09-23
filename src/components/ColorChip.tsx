import * as React from "react";
import * as styles from "./ColorChip.module.scss";
interface IProps {
  colorHash: string;
  colorName: string;
}

const ColorChip: React.SFC<IProps> = ({ colorHash, colorName }) => (
  <div style={{ backgroundColor: colorHash }} className={styles.container}>
    <h1 style={{ color: colorHash }}>{colorHash}</h1>
    <h1 style={{ color: colorHash }}>{colorName}</h1>
  </div>
);
export default ColorChip;
