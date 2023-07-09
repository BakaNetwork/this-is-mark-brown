import React, { useEffect, useState } from "react";
import { YoutubeLayout } from "../components/Layout";
import { UserComment } from "../data/UserComments";
import { getFinalComments } from "../utils/UserCommentUtils";
import setRandomInterval from "set-random-interval";
import FlipMove from "react-flip-move";
import useScene from "../store";
import { shallow } from "zustand/shallow";
import { useInterval } from "usehooks-ts";
import { Simulate } from "react-dom/test-utils";
import play = Simulate.play;
import { TypedSpan } from "../components/TypedSpan";
import { DialogCard } from "../components/DialogCard";

export default function Ending() {
  const [finalComments] = useState<UserComment[]>(getFinalComments(0.6));
  let [shownComments, setShownComments] = useState<UserComment[]>([]);

  return (
    <>
      <YoutubeLayout>
        <div className={`flex flex-row w-full h-full bg-gray-600 justify-center`}>
          <div className={`border-amber-200 border-2 basis-3/12`}></div>
          <div className={`flex flex-col bg-gray-500 basis-6/12 `}>
            <DialogCard className={`m-4`}>
              <TypedSpan>
                <span>I'm Mark Brown, and this is Game Maker's Toolkit.</span>
                <br />
                <span>I'll see you, next time.</span>
              </TypedSpan>
            </DialogCard>

            <div className={`border-amber-200 border-2 flex-auto m-4 p-4`}>
              Precision: 80%
              <br />
              User comments: Good
              <br />
            </div>
          </div>
          <div
            className={`flex flex-col-reverse border-amber-200 border-2 m-4 p-4 basis-3/12 overflow-y-hidden`}
          ></div>
          <div
            className={`absolute bg-blue-400 opacity-0 w-screen pointer-events-none`}
          ></div>
        </div>
      </YoutubeLayout>
    </>
  );
}
