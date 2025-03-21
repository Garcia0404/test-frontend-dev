import "./globals.css";

export const metadata = {
  title: "MyModules",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://test-frontend-dev.onrender.com" />
        <link rel="dns-prefetch" href="https://test-frontend-dev.onrender.com" />
      </head>
      <body
        className='bg-slate-900 flex flex-col'
      >
        {children}
      </body>
    </html>
  );
}
