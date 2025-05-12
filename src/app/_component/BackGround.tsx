interface Props {
  children: React.ReactNode;
}
const BackGround = ({ children }: Props) => {
  return (
    <div className="h-dvh pt-24 bg-[#fff8e1]  min-w-[780px]">{children}</div>
  );
};

export default BackGround;
