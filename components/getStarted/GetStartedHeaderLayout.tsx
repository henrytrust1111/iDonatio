import GetStartedHeader from "./GetStartedHeader";

function GetStartedHeaderLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-full">
      <GetStartedHeader />
      {children}
    </div>
  );
}

export default GetStartedHeaderLayout;
