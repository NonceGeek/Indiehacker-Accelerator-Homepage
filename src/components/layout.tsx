import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <div className="w-[928px] mx-auto pt-14">{children}</div>
    </>
  );
}