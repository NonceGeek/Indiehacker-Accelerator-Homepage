import Layout from "@/components/layout";
import Image from "next/image";
import ShadowText from "@/components/ShadowText";

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
      <ShadowText
        text={'MOVE MICRO ACCELERATOR FULFIL EVERY AMBITION'}
        size={'lg'}
        addonClass={'mt-5'}
      />
    </Layout>
  );
}
