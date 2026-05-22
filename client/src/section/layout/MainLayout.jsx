import { Toaster } from "react-hot-toast";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FiXCircle } from "react-icons/fi";


export default function MainLayout({ children }) {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            fontSize: "14px",
            padding: "10px 14px",           
          },
          success: {
            icon:<RiCheckboxCircleLine size={22} />,
            style: {
              background: "#15be5c",
              color: "#ffff",
              border: "1px solid #ABEFC6",
            },
          },
          error: {
            icon: <FiXCircle  size={22} />,
            style: {
              background: "#FEF3F2",
              color: "#B42318",
              border: "1px solid #FECDCA",
            },
          }
        }}
      />
      {children}
    </>
  );
}