import cn from "classnames";

export default function ShadowText({
  text,
  size,
  addonClass,
}: {
  text: String;
  size: String;
  addonClass?: String;
}) {
  const rootClass = cn(
    'w-full relative flex justify-center font-ps2p',
    { 'text-[40px] leading-[56px]': size === 'lg' },
    { 'text-[30px] leading-[30px]': size === 'md' },
    // 传入的动态字符串，只有这样才能解析
    { [`${addonClass}`]: !!addonClass },
  )

  return (
    <div className={rootClass}>
      {/* 粉色的文字在底层，往右下方偏移 */}
      <span className="absolute top-0.5 left-0.5 z-20 text-center text-[#F17496]">{text}</span>
      {/* 紫色的文字在顶层 */}
      <span className="-ml-0.5 -mt-0.5 z-30 text-center text-[#5D1DD6]">{text}</span>
    </div>
  );
}
