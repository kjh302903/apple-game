interface Props {
  children: React.ReactNode;
}
const InnerContainer = ({ children }: Props) => {
  return <div className="px-8 pt-8">{children}</div>;
};

export default InnerContainer;
