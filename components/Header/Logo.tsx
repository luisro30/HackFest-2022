import clsx from "clsx";
import React from "react";

export default function Logo() {
  return (
    <span
      className={clsx(
        " uppercase bg-gradient-to-r from-green-800 via-green-600 to-green-800 bg-clip-text align-middle text-3xl font-black tracking-widest text-transparent"
      )}
    >
      praedium
    </span>
  );
}
