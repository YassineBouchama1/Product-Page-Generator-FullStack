import React from "react";
type titleText = any;
export default function TitlePage({ text }: titleText) {
  return (
    <div className="w-full p-5 bg-white rounded-sm font-black">{text}</div>
  );
}
