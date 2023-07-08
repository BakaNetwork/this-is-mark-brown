import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { EditorTimeline } from "./EditorTimeline";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const YoutubeLayout = ({ children, ...props }: Props) => {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </>
  );
};

export const VideoEditorLayout = ({ children, ...props }: Props) => {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
      <EditorTimeline></EditorTimeline>
    </>
  );
};
