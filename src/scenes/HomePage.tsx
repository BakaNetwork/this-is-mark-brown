import React from "react";
import { DialogCard } from "../components/DialogCard";
import { TypedSpan } from "../components/TypedSpan";

export default function HomePage() {
  let prologue = [
    "Hi, I'm Mark Brown^1000, and this is Game Maker's Toolkit.^1000\n\n" +
      "I'm a YouTuber who recently hosted a Game Jam, the GMTK Game Jam 2023.\n\n" +
      "Now, I'm going to play through the games submitted to itch.io for the jam, " +
      "pick the most unique and enjoyable ones, " +
      `then edit a video titled "The Best Games from GMTK Game Jam 2023."`,
  ];
  // let prologue = [""];
  return (
    <>
      <DialogCard>
        <TypedSpan typeSpeed={50} strings={prologue}></TypedSpan>
      </DialogCard>
    </>
  );
}
