interface FontBlockProps {
  children: React.ReactNode;
}

export const FontBlock: React.FC<FontBlockProps> = ({ children }) => {
  return <div className={"bg-gray-200 p-6 w-full "}>{children}</div>;
};
