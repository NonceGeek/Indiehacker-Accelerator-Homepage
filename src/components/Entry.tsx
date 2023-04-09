import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';
import ShadowText from './ShadowText';

import Close from '../../public/images/close.png';

export default function Entry({
  title,
  slogon,
  link,
  img,
  reverse,
}: {
  title: String;
  slogon: String;
  link: {
    text: String;
    url: String;
  };
  img: StaticImageData;
  reverse?: Boolean;
}) {
  const rootClass = cn('w-full h-[288px] relative flex items-center', { 'flex-row-reverse': reverse });
  const rightClass = cn(
    'right w-[536px] h-full flex flex-col justify-between',
    `${reverse ? 'items-end' : 'items-start'}`
  );
  const marginClass = reverse ? 'mr-8' : 'ml-8';
  const btnClass = link.url === '/' ? '' : 'cursor-pointer';
  const shadowStyle = reverse
    ? {
      boxShadow: '-12px 12px 0px #F17496',
    }
    : {
      boxShadow: '12px 12px 0px #F17496',
    };
  const justifyClass = reverse ? 'justify-end' : 'justify-start';

  const navTo = (url: String) => () => {
    if (url !== '/') {
      location.href = url as string;
    }
  }

  return (
    <div className={rootClass}>
      <div className="left w-[392px] h-full flex flex-col z-20">
        <div className="container w-full h-full overflow-hidden border-2 border-black" style={shadowStyle}>
          <div className="title h-10 border-b-2 border-black bg-white flex justify-between items-center px-4">
            <span className="font-ps2p text-[12px]">{title}</span>
            <Image
              // import 方式导入图片 src 的话
              // 可以不需要设置 width 和 height 属性
              // 还能通过 className 设置图片宽高
              className="w-4"
              src={Close}
              alt="close"
            />
          </div>
          <div className="banner overflow-hidden">
            <Image className="object-fit" src={img} alt="banner" />
          </div>
        </div>
      </div>
      <div className={rightClass}>
        <ShadowText text={title} size={'md'} addonClass={marginClass} />
        <div
          className={`${justifyClass} items-center flex slogon w-full min-h-[120px] border-2 border-black px-8 py-4 bg-[#F4C3A3] text-[20px] font-ale`}>
          {slogon}
        </div>
        <div
          onClick={navTo(link.url)}
          className={`${marginClass} ${btnClass} link w-[280px] h-16 border-2 border-black bg-[#B58DF8] flex justify-center items-center font-alef text-[32px] text-white`}
          style={shadowStyle}>
          {link.text}
        </div>
      </div>
    </div>
  );
}
