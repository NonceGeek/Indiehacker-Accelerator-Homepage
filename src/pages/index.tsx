import Layout from "@/components/layout";
import Image from "next/image";

import Banner from '../../public/images/index-banner.png';

export default function index() {
  return (
    <Layout>
      <div className="banner w-full">
        <Image
          className="object-cover"
          src={Banner}
          alt="Banner"
        />
      </div>
    </Layout>
  );
}
