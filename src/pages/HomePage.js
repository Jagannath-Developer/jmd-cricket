import React from "react";

export default function HomePage() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/fir-app-b3afe.appspot.com/o/photo.jpg?alt=media&token=5f4bbdfd-b635-4547-95a1-38ada444c9ef";

  return (
    <div className="container">
      <div className="mt-4">
        <img src={url} alt="img" className="w-100" />
      </div>
    </div>
  );
}
