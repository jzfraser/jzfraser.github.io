import { Outlet } from "react-router-dom";

import { NavBar } from "./NavBar";

export function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
