import React from "react";
import Logo from "./Logo";

export const Header = () => {
  return (
    <>
      <header
        className="sticky inset-x-0 top-0 z-20 flex items-center
      justify-between bg-white py-2 px-2 shadow-lg"
      >
        <div className="flex grow-0 basis-1/3">Menu BTN</div>
        <div className="flex grow-0 basis-1/3 justify-center">
          <Logo />
        </div>
        <div className="flex grow-0 basis-1/3 justify-end">Menu BTN</div>
      </header>
    </>
  );
};
