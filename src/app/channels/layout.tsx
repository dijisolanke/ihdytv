"use client";
import { Layout } from "./style";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      {/* <button style={{ all: "unset" }}>
        <img
          style={{ height: `200px`, border: "1px solid", borderRadius: "10px" }}
          src="/All icons.png"
          alt=""
        />
      </button>
      <h1>test</h1> */}
      {children}
    </Layout>
  );
}
