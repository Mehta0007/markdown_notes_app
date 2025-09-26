
import "./globals.css";
import "./fun.css"
import Head from "./head";

export const metadata = {
  title: "T Notes | Markdown for Memories "

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body>
        
            <div id="app"> {children}  </div>
            <div id="portal"> </div>
      </body>
    </html>
  );
}
