const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
      {children}
    </div>
  );
};
export default Container;
