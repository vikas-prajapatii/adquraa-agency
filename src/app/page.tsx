"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/`)
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Backend connection failed ❌");
      });
  }, []);

  return (
    <main style={{ padding: "40px", fontSize: "22px" }}>
      <h1>Frontend → Backend Connection Test</h1>
      <p>{message}</p>
    </main>
  );
}
