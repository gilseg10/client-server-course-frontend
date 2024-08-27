import React from "react"

export default function Header() {
  return (
    <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-10 py-12 px-4">
            <h1 className="text-3xl text-center sm:text-5xl text-cyan-800 font-medium py-2">
              Largest Companies by Market Cap
            </h1>
        </div>
    </div>
  )
};
