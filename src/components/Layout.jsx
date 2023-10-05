import NavBar from "./NavBar";

const Layout = ( { children }) => {

  return (
    <main className="min-h-screen max-w-[1440px] m-auto">
      <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gray-800 rounded-[24px] ">
        <NavBar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
