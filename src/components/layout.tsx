import Navbar from "./Navbar";
import Image from "next/image";

import Logo from '../../public/images/logo.png';

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <div className="w-[928px] mx-auto pt-14">{children}</div>
      <div className="footer mt-16 w-full border-t border-dashed border-black h-20 flex justify-center items-center">
        <Image
          className="w-[120px]"
          src={Logo}
          alt="logo"
        />
      </div>
      <div className='w-full pb-4 flex justify-center items-center'>Copyright © {new Date().getFullYear()} NonceGeek</div>
    </>
  );
}