import Header from "../../components/Header";

export default function ReviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      {children}
    </div>
  );
}
