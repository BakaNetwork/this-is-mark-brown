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
import { getGameComment } from "../utils/GameComments";
import useRank from "../storeRank";

export default function Presentation() {
  const { selectedGameList } = useGameStore();
  let selectedGames = selectedGameList;

  const [finalComments] = useState<UserComment[]>(getFinalComments(0.6));
  let [shownComments, setShownComments] = useState<UserComment[]>([]);
  let [index, setIndex] = useState(0);
  let timer: any;

  const [presentationIdx, setPresentation, nextScene] = useScene(
    (state) => [state.presentationIdx, state.setPresentation, state.nextScene],
    shallow
  );

  const { map } = useRank();

  const updateComments = () => {
    timer = setRandomInterval(
      () => {
        setShownComments((prevComments) => {
          return [...prevComments, finalComments[index]];
        });
        setIndex((prevIndex) => prevIndex + 1);
      },
      500,
      4000
    );
    if (index >= finalComments.length) {
      timer.clear();
    }
  };

  useEffect(() => {
    updateComments();
    return () => timer.clear();
  }, [index]);

  let [playVideo, setPlayVideo] = useState(true);
  useInterval(
    () => {
      console.log(presentationIdx);
      if (presentationIdx >= selectedGames.length - 1) {
        setPlayVideo(false);
        console.log("end");
        nextScene();
      } else {
        setPresentation(presentationIdx + 1);
      }
    },
    // Delay in milliseconds or null to stop it
    playVideo ? 9000 : null
  );

  useEffect(() => {
    setPresentation(0);
    setPlayVideo(true);
    return () => {
      setPlayVideo(false);
    };
  }, []);

  return (
    <>
      <YoutubeLayout>
        <div
          className={`flex flex-row w-full h-full bg-gray-600 justify-center`}
        >
          <div className={`border-amber-200 border-2 basis-3/12`}>
            {presentationIdx}
            <button onClick={() => setPresentation(presentationIdx + 1)}>
              nextPre
            </button>
          </div>
          <div className={`flex flex-col bg-gray-500 basis-6/12`}>
            <div className={`flex flex-row border-amber-200 border-2`}>
              <div className={`border-amber-200 border-2 m-4 p-4`}>
                {selectedGames?.[presentationIdx]?.title}
              </div>
              <div className={`border-amber-200 border-2 m-4 p-4`}>
                {selectedGames?.[presentationIdx]?.description}
              </div>
            </div>
            <div className={`border-amber-200 border-2 flex-auto m-4 p-4`}>
              {/* TODO: */}
              {/* {selectedGames?.[presentationIdx]?.url} */}
              {/* {map.get(selectedGames[presentationIdx].url) as number[]} */}
              {getGameComment(
                map.get(selectedGames[presentationIdx].url) as number[]
              )}
            </div>
          </div>
          <div
            className={`flex flex-col-reverse border-amber-200 border-2 m-4 p-4 basis-3/12 overflow-y-hidden`}
          >
            {/*{index}*/}
            <FlipMove enterAnimation="elevator" leaveAnimation="elevator">
              {shownComments.map((el: UserComment, index: number) => {
                return (
                  <div key={index} className={`mb-4`}>
                    <p>
                      <span className={`text-blue-300`}>{el.username}</span>
                      <span className={`text-gray-300`}> says:</span>
                    </p>
                    <p>{el.comment}</p>
                  </div>
                );
              })}
            </FlipMove>
          </div>
          <div
            className={`absolute bg-blue-400 opacity-0 w-screen pointer-events-none`}
          ></div>
        </div>
      </YoutubeLayout>
    </>
  );
}
