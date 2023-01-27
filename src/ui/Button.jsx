function Button({name, click}) {
return (
  <div className="font-semibold py-4 px-6 rounded hover:opacity-70 active:opacity-60 bg-[#8a00c2] m-2 text-center" onClick={click}>
    {name}
  </div>
);
}

export default Button;