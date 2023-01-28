import { Link } from "react-router-dom";
import Button from "./ui/Button"

function App() {
  //TODO: Implement Logic
  const handleOnlineGame = (e) => {
    e.preventDefault();
    console.log("hi");
  }

  return (
    <div className="flex text-slate-200 justify-center items-center h-full">
      <div>
        <Button name="New Game (Online)" click={handleOnlineGame} />
        <Link to='/cpu'>
          <Button name="New Game (CPU)" />
        </Link>
      </div>
    </div>
  )
}

export default App
