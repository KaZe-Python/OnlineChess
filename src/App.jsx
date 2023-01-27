import Button from "./ui/Button"

function App() {
  //TODO: Implement Logic
  const handleOnlineGame = (e) => {
    e.preventDefault();
    console.log("hi");
  }

  const handleCPUGame = (e) => {
    e.preventDefault();
    console.log("hi1");
  }


  return (
    <div className="flex text-slate-200 justify-center items-center h-screen">
      <div className="flex flex-col">
        <Button name="New Game (Online)" click={handleOnlineGame} />
        <Button name="New Game (CPU)" click={handleCPUGame} />
      </div>
    </div>
  )
}

export default App
