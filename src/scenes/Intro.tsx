import React from "react";
import { DialogCard } from "../components/DialogCard";
import { TypedSpan } from "../components/TypedSpan";
import { YoutubeLayout } from "../components/Layout";
import useScene from "../store";
import { shallow } from "zustand/shallow";

export default function Intro() {
  let [prologueFinished, setPrologueFinished, nextScene] = useScene(
    (state) => [
      state.prologueFinished,
      state.setPrologueFinished,
      state.nextScene,
    ],
    shallow,
  );

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
      <YoutubeLayout>
        <div className={`flex flex-col gap-4`}>
          <DialogCard>
            <TypedSpan
              typeSpeed={1}
              strings={prologue}
              onTypingFinished={() => setPrologueFinished(true)}
            ></TypedSpan>
          </DialogCard>
          {prologueFinished && (
            <>
              <button onClick={nextScene}>Start Playing Games!</button>
            </>
          )}
        </div>
      </YoutubeLayout>
    </>
  );
}
