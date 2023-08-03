import { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import '../App.scss';
import '../styles/home.css';
import 'react-simple-keyboard/build/css/index.css';
import KeyBoardSimple from '@/components/KeyBoardSimple';
import InputAndKeyBoard from '@/components/InputAndKeyBoard';

function Home() {
  const [activarKeyBoard, setActivarKeyBoard] = useState(false);
  const [inputIN, setInputIN] = useState({input1:"", input2:""});
  const [focus, setFocus] = useState("");
  const [layout, setLayout] = useState('default');
 // const keyboard = useRef();

  const onChange = (input: string) => {
    setInputIN({
      ...inputIN,
      [focus]: input
    });
  };
  const onKeyPress = (button: string) => {
    console.log('Button pressed', button);
    if (button === '{enter}') setActivarKeyBoard(false);
    if (button === '{shift}' || button === '{lock}') handleShift();
  };

  const seleccion = (e) => {
  
  };
  const onInputFocus = (dataFocus: string) => {
    if(dataFocus !== focus){
    }
    setActivarKeyBoard(true);
    setFocus(dataFocus)
  };
  return (
    <div className="contenedor-home">
      <input
        onFocus={() => onInputFocus('input1')}
        value={inputIN.input1}
        onSelect={(e) => seleccion(e)}
        placeholder="teclado-virtual"
      />
            <input
        onFocus={() => onInputFocus('input2')}
        value={inputIN.input2}
        onSelect={(e) => seleccion(e)}
        placeholder="teclado-virtual"
      />
      {activarKeyBoard ? (
            <div className="teclado">
            <Keyboard
           
              layoutName={layout}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          </div>
      ) : null}
    </div>
   
  );
}

export default Home;
