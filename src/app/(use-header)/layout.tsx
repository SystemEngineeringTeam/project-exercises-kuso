import Header from '../_components/Header';
// import LoginProvider from '../_components/LoginProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {/* <LoginProvider> */}
        <main>{children}</main>
      {/* </LoginProvider> */}
    </>
  );
}
