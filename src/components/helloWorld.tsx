"use client";

import { useEffect, useState } from "react";

export default function HelloWorld() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/`)
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    };
    fetchData();
  }, [message]);

  return <div>{message}</div>;
}
