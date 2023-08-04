import { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import '../App.scss';
import '../styles/home.css';
import 'react-simple-keyboard/build/css/index.css';

interface State {
  input1: string;
  input2: string;
}

function Home() {
  const [activarKeyBoard, setActivarKeyBoard] = useState(false);
  const [inputIN, setInputIN] = useState<State>({input1:"", input2:""});
  const [focus, setFocus] = useState<string>("");
  const [layout, setLayout] = useState('default');
 // const keyboard = useRef();
 
  const onChange = (input: string) => {
    // setInputIN({
    //   ...inputIN,
    //   [focus]: input
    // });
  };
  const onKeyPress = (button: string) => 
  {
    if(button == "{bksp}"){
      setInputIN({
        ...inputIN,
        [focus]: inputIN[focus as keyof State].substring(0, inputIN[focus as keyof State].length - 1)
      });
    }else {
      setInputIN({
        ...inputIN,
        [focus]: inputIN[focus as keyof State] +  button
      });
    }
    

    if (button === '{enter}') setActivarKeyBoard(false);
    //if (button === '{shift}' || button === '{lock}') handleShift();
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
        
        placeholder="teclado-virtual"
      />
            <input
        onFocus={() => onInputFocus('input2')}
        value={inputIN.input2}
  
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
