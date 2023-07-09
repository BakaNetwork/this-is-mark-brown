import React, { useEffect, useState } from "react";
import { YoutubeLayout } from "../components/Layout";
import { UserComment } from "../data/UserComments";
import { getFinalComments } from "../utils/UserCommentUtils";
import setRandomInterval from "set-random-interval";
import FlipMove from "react-flip-move";
import useScene, { useGameStore } from "../store";
import { shallow } from "zustand/shallow";
import { useInterval } from "usehooks-ts";
import { Simulate } from "react-dom/test-utils";
import play = Simulate.play;
import { TypedSpan } from "../components/TypedSpan";
import { DialogCard } from "../components/DialogCard";
import { Separator } from "../components/ui/Separator";
import MarkBrown from "../resources/mark-brown.png";
import score, { rightNum } from "../utils/Distance";
import _ from "lodash";

export default function Ending() {
  const [reset] = useScene((state) => [state.reset], shallow);

  const { selectedGameList, playableGameList } = useGameStore();

  const [scoreNumber, setScoreNumber] = useState(60);

  useEffect(() => {
    const s = score(selectedGameList, playableGameList);
    setScoreNumber(_.round(s, 2));
    console.log(s);
  }, [selectedGameList, playableGameList]);

  return (
    <>
      <YoutubeLayout>
        <div
          className={`flex flex-row w-full h-full bg-blue-950 justify-center`}
        >
          <div className={`flex items-end basis-3/12`}>
            <img
              src={MarkBrown}
              alt={`Mark Brown`}
              className={`absolute w-[37vw]`}
            />
          </div>
          <div className={`flex flex-col basis-6/12 `}>
            <DialogCard className={`m-4`}>
              <TypedSpan>
                <span>I'm Mark Brown, and this is Game Maker's Toolkit.</span>
                <br />
                <span>I'll see you, next time.</span>
              </TypedSpan>
            </DialogCard>

            <div className={`border-amber-200 border-2 flex-auto m-4 p-4`}>
              Correctly sorted games:&nbsp;
              {rightNum(selectedGameList, playableGameList)}
              <br />
              Precision: {scoreNumber}
              <br />
              User comments: Good
              <br />
            </div>
          </div>
          <div className={`flex flex-col gap-8 m-4 p-4 basis-3/12`}>
            <button
              onClick={reset}
              className={`text-center flex flex-row flex-auto justify-center items-center text-3xl rounded-2xl border-4 border-orange-700 py-4`}
            >
              Play Again!
            </button>
            <div
              className={`text-center rounded-2xl border-4 border-orange-700 py-4`}
            >
              <span className={`text-xl`}>Developer:</span>
              <br />
              Travis Road, Ridd Ma
            </div>
            <div
              className={`text-center rounded-2xl border-4 border-orange-700 py-4`}
            >
              <span className={`text-xl`}>Special Thanks:</span>
              <br />
              Mark Brown and ALL of you who take part in GMTK Game Jam that
              makes amazing games!
            </div>
            <div></div>
          </div>
          <div
            className={`absolute bg-blue-400 opacity-0 w-screen pointer-events-none`}
          ></div>
        </div>
      </YoutubeLayout>
    </>
  );
}
