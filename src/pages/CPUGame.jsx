import { useEffect, useState } from 'react';

import { Chessboard } from "react-chessboard";

import Button from '../ui/Button';
import './css/offline.css';

export default function CPUGame() {
  const [self, setSelf] = useState({ name: "You" });
  const [orientation, setOrientation] = useState();
  const [show, setShow] = useState(false);

  const [side, setSide] = useState();
  const [level, setLevel] = useState('1400');


  const handleSubmit = () => {
    if (side === undefined) {
      alert("Select a side")
      return;
    }
    const data = {
      side: side,
      level: level,
    };

    // TODO: Impelement  API

    setOrientation(side);
    //setShow(true);
    console.log(data)
  }


  return (
    <div className="flex h-full justify-center items-center">
      <div>
        <div id="names">CPU
          <div className="text-base font-normal">ELO: TO BE IMPLEMENTED</div>
        </div>
        <Chessboard boardWidth={screen.width / 3} boardOrientation={orientation}/>
        <div id="names" className="mb-0 mt-4">
          {self.name}
          <div className="text-base font-normal">ELO: TO BE IMPLEMENTED</div>
        </div>
      </div>
      <div className={`text-slate-200 p-4 ${show ? "hidden" : null}`}>
        <div className="text-3xl mb-4">Setup your game</div>
        <div className="flex">
          <div className="flex flex-col pr-4">
            <div>Choose your side</div>
            <div className="flex justify-between">
              <div>White</div>
              <input type="radio" name="side" id="white" onChange={(e) => setSide(e.target.id)}></input>
            </div>
            <div className="flex justify-between">
              <div>Black</div>
              <input type="radio" name="side" id="black" onChange={(e) => setSide(e.target.id)}></input>
            </div>
          </div>
          <div>
            <div>Engine Level: {level}</div>
            <input type="range" min="0" max="2600" step="100" value={level} onChange={e => setLevel(e.target.value)}></input>
          </div>
        </div>
        <div>
          <Button name="Submit" click={handleSubmit}/>
        </div>
      </div>
      <div className={`text-slate-200 ml-4 ${!show ? "hidden" : null}`}>
        <Button name="Resign" />
        <Button name="Ask for Draw" />
      </div>
    </div>
  )
}