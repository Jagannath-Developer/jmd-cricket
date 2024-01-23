import React from "react";

export default function HomePage() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/fir-app-b3afe.appspot.com/o/cricket_jmd_demo.jpg?alt=media&token=760ed78f-e0b4-455c-b8b0-94db83ef55bf";

  return (
    <div className="container">
      <div className="mt-4">
        <img src={url} alt="img" className="w-100" />
      </div>
    </div>
  );
}
