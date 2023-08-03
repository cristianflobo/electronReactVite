import { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";

function KeyBoardSimple({ changeKey, activeKeyBoard }) {
  const [inputState, setInputState] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();
 
  const onChange = (input: string) => {
    changeKey(input);
  };

  const onKeyPress = (button: string) => {
    if (button === "{enter}") {
      activeKeyBoard(false);
      changeKey("")
    }
    if (button === "{shift}" || button === "{lock}") handleShift();
  };
  return (
    <div className="teclado">
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default KeyBoardSimple;
