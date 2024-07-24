import { Navbar } from "@/components";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
