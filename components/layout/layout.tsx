import MainNavigation from "./main-navigation";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
