import { Chess } from 'chess.js';
import { useState } from 'react'

import { Chessboard } from "react-chessboard"
import Button from '../ui/Button';

import './css/online.css';

export default function OnlineGame() {

  const [game, setGame] = useState(new Chess());
  const [moveFrom, setMoveFrom] = useState("");
  const [moveSquares, setMoveSquares] = useState({});
  const [optionSquares, setOptionSquares] = useState({});
  
  const [self, setSelf] = useState("You");
  const [player2, setPlayer2] = useState("Player 2");
  const orientation = ""

  

  return (
    <div className="flex h-full justify-center items-center">
      <div id="chess-div">
        <div id="names">{player2}
          <div className="text-base font-normal">ELO: TO BE IMPLEMENTED</div>
        </div>
        <Chessboard boardWidth={(screen.width / 3)} boardOrientation={orientation}/>
        <div id="names" className="mb-0 mt-4">
          {self}
          <div className="text-base font-normal">ELO: TO BE IMPLEMENTED</div>
        </div>
      </div>
      <div className="text-slate-200 border ml-4">
        <Button name="Resign" />
        <Button name="Ask for Draw" />
      </div>
    </div>
  )
}