import React from "react";

export default function HelloWorld() {
  const res: Response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return <div>{res.text()}</div>;
}
