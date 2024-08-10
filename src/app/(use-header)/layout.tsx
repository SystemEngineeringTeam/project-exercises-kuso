export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>へっだー(仮)</header>
      <main>{children}</main>
    </>
  );
}
