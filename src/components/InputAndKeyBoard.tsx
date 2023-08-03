import { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "../App.scss";
import "../styles/home.css";
import "react-simple-keyboard/build/css/index.css";
import KeyBoardSimple from "@/components/KeyBoardSimple";

function InputAndKeyBoard({changeKey, activeKeyBoard}) {
  const [input, setInput] = useState("");
  const [activarKeyBoard, setActivarKeyBoard] = useState(false);
  const [inputIN, setInputIN] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };
  const onKeyPress = (button: string) => {
    console.log("Button pressed", button);
    if (button === "{enter}") setActivarKeyBoard(false);
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const seleccion = (e) => {
    console.log(e);
  };
  const onInputFocus = (hola: string) => {
    setActivarKeyBoard(true);
  };
  return (
    <div className="contenedor-home">
      <input
        onFocus={() => onInputFocus("input1")}
        value={input}
        onSelect={(e) => seleccion(e)}
        placeholder="teclado-virtual"
      />
      {activarKeyBoard ? (
        <div className="teclado">
          <div className="teclado">
            <Keyboard
              keyboardRef={(r) => (keyboard.current = r)}
              layoutName={layout}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default InputAndKeyBoard;
