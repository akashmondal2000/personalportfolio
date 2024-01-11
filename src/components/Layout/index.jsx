import CustomHeader from "./Header";
import CustomFooter from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <CustomHeader />
      {children}
      <CustomFooter />
    </div>
  );
};

export default Layout;
