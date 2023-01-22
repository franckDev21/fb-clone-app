import React, { FC, ReactNode } from "react";
import Header from "./Header";

interface MainLayoutProps {
  className?: string;
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ className = "", children }) => {
  return (
    <div className={`${className} h-screen bg-light overflow-hidden`}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
