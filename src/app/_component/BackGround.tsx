interface Props {
  children: React.ReactNode;
}
const BackGround = ({ children }: Props) => {
  return <div className="h-dvh pt-16 bg-gray-200">{children}</div>;
};

export default BackGround;
