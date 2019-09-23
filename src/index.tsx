import * as React from "react";
import { render } from "react-dom";
import RandomColorButton from "./components/RandomColorButton";
import ColorChip from "./components/ColorChip";
import "./styles.css";
interface IProps {}
class App extends React.Component<IProps> {
  public state = {
    colorHash: "#000000",
    colorName: "Black"
  };
  public onClick = () => {
    this.getNewColour();
  };
  public getNewColour = async () => {
    fetch("https://api.noopschallenge.com/hexbot?count=10")
      .then(res => {
        return res.json();
      })
      .then(value => {
        const colorJson = value;
        const { colors } = colorJson;
        const colorNumber = Math.floor(Math.random() * 10);
        return colors[colorNumber].value;
      })
      .then(color => {
        return this.setColorName(color);
      });
  };
  public setColorName = (color: string) => {
    fetch(
      `https://www.thecolorapi.com/id?format=json&hex=${color.replace("#", "")}`
    )
      .then(res => {
        return res.json();
      })
      .then(value => {
        this.setState({
          colorHash: value.name.closest_named_hex,
          colorName: value.name.value
        });
        return value;
      });
  };
  public render() {
    const { colorHash, colorName } = this.state;
    return (
      <div className="App">
        <ColorChip colorName={colorName} colorHash={colorHash} />
        <RandomColorButton handleClick={this.onClick} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
