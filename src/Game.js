import React, {useState, useEffect} from "react";
import './Game.css';

function Game(){
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect((handleMovement)=>{
    window.addEventListener('keydown', handleMovement);
    return ()=> {
      window.removeEventListener('keydown', handleMovement);
    };
  }, []);

  const handleMovement = (e) => {
    switch(e.key){
      case 'ArrowLeft':
        setPosition ((previousPosition)=>({...previousPosition, x: previousPosition.x -100}));
        break;
      case 'ArrowRight':
        setPosition((previousPosition)=>({...previousPosition, x: previousPosition.x +100}));
        break;
      case 'ArrowUp':
        setPosition((previousPosition)=>({...previousPosition, y: previousPosition.y -100}));
        break;
      case 'ArrowDown':
        setPosition((previousPosition)=>({...previousPosition, y: previousPosition.y +100}));
        break;
        default:
          break;
    }
  };

  return(
    <div className="game" onKeyDown={handleMovement} tabIndex="0">
      <div className="character" style={{left: position.x, top: position.y}}/>
    </div>
  )
}

export default Game;