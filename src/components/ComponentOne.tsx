import React from "react";

export default function ComponentOne({ data }: any) {
  return (
    <div
      style={{
        margin: "30px",
      }}
    >
      <h3>Component One</h3>
      <img src={data.image.src} alt={data.image.alt} width={300} height={300} />
      <caption style={{ width: "100%" }}>{data.image.caption}</caption>
    </div>
  );
}
