import React from "react";

export default function Thumbnail({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  return (
    <>
      {src ? (
        <div
          className={`relative w-80 justify-center flex flex-col ${
            className ? className : ""
          } `}
        >
          {title && (
            <div className="absolute top-0 w-full text-center bg-black/50">
              {title}
            </div>
          )}
          <img src={src} alt="" />
        </div>
      ) : (
        <div className="w-80 h-64 bg-slate-700"></div>
      )}
    </>
  );
}
