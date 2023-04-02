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
    'relative flex justify-center font-ps2p',
    { 'text-[40px] leading-[56px]': size === 'lg' },
    { 'text-[30px] leading-[30px]': size === 'md' },
    // 传入的动态字符串，只有这样才能解析
    { [`${addonClass}`]: !!addonClass },
  )

  return (
    <div
      className={rootClass}
      style={{
        textShadow: '4px 4px 0px #F17496',
      }}
    >
      <span className="text-center text-[#5D1DD6]">{text}</span>
    </div>
  );
}
