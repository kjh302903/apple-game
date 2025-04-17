interface Props {
  children: React.ReactNode;
}
const BackGround = ({ children }: Props) => {
  return <div className="h-dvh pt-16 bg-[#fff8e1]">{children}</div>;
};

export default BackGround;
