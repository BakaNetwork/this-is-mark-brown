import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { EditorTimeline } from "./EditorTimeline";
import YouTubeHeader from "./YouTubeHeader";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const YoutubeLayout = ({ children, ...props }: Props) => {
  return (
    <>
      <YouTubeHeader></YouTubeHeader>
      <div className={`w-screen flex justify-center items-center align-middle`}>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
};

export const MainGameLayout = ({ children, ...props }: Props) => {
  return (
    <>
      <div className={`w-screen`}>{children}</div>
      <EditorTimeline></EditorTimeline>
    </>
  );
};
