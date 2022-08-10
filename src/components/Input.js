import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Input({ label, type = "text", ...props }) {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);

  useEffect(() => {
    if (show) {
      setType("text");
      inputRef.current.focus();
    } else if (type === "password") {
      setType("password");
      inputRef.current.focus();
    }
  }, [show]);

  return (
    <label className=" relative flex bg-zinc-50 focus-within:border-gray-400">
      <input
        ref={inputRef}
        type={inputType}
        required={true}
        className=" px-2 border w-full h-[38px]  rounded-sm  outline-none valid:pt-[10px] peer text-xs"
        {...props}
      ></input>
      <small className="absolute top-1/2 left-[9px] text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 cursor-text pointer-events-none">
        {label}
      </small>
      {type === "password" && props?.value && (
        <button
          className="h-full flex items-center text-sm font-semibold pr-2"
          onClick={() => setShow((show) => !show)}
        >
          {show ? "Hide" : "Show"}{" "}
        </button>
      )}
    </label>
  );
}
