import "./globals.css"; 
import CustomSessionProvider from "../components/session-provider";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "interv2",
  description: "GitHub Auth App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomSessionProvider>
          <Navbar />
          {children}
        </CustomSessionProvider>
      </body>
    </html>
  );
}
