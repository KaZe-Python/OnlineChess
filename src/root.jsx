import { Outlet } from "react-router";

import Footer from "./components/Footer";

export default function Root() {
  return (
    <div className="flex flex-col h-screen">
      <Outlet />
      <Footer />
    </div>
  )
}