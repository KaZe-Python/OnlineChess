import { Instagram, Github } from "./Social"
export default function Footer() {
  return (
    <div className="text-slate-200 opacity-50 mb-3 flex w-full px-[16rem]">
      <div className="flex-1">
        Copyright &copy; {new Date().getFullYear()} Bruno Pio Cosentini
      </div>
      <div className="flex">
        <Instagram />
        <Github/>
      </div>
    </div>
  )
}