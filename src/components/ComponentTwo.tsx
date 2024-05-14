"use client";

import React from "react";

export default function ComponentTwo({ data }: any) {
  return (
    <div
      style={{
        margin: "30px",
      }}
    >
      <h3>Component Two</h3>
      <button
        onClick={() => {
          alert("clicked");
        }}
        style={{
          padding: "16px",
          background: "teal",
          borderRadius: "4px",
          border: "2px solid black",
        }}
      >
        {data.button.label}
      </button>
    </div>
  );
}
