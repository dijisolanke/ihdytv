"use client";
import { Layout } from "./style";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
