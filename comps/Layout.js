import Navbar from "./Navbar";
import Footer from "./Footer";

const envBackgroundColor = process.env.NEXT_PUBLIC_BACKGROUND_COLOR;
const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR;
const secondaryColor = process.env.NEXT_PUBLIC_SECONDARY_COLOR;

const style = {
  backgroundColor: envBackgroundColor
};

const Layout = ({ children }) => {
  return (
    <div className="mx-auto w-full">
          <style global jsx>{`
          .primary-color{
            background-color: ${primaryColor};
          }
          .secondary-color{
            background-color: ${secondaryColor};
          }
          button {
            color: black;
          }
          button:hover {
            background-color: ${secondaryColor};
            color: white;
          }
 
      `}</style>

      <div style={style}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
