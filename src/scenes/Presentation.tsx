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

export default function Presentation() {
  let selectedGames = [
    {
      url: "https://v6p9d9t4.ssl.hwcdn.net/html/6171704/index.html",
      title: "Chancemancer",
      description: "A dice rolling,  dungeon crawling, adventure!",
      thumbnail:
        "https://img.itch.zone/aW1nLzk1MTQ0NjcuZ2lm/300x240%23cm/%2FYIZM7.gif",
      width: 960,
      height: 540,
    },
    {
      url: "https://v6p9d9t4.ssl.hwcdn.net/html/6153994/WebGL1.0/index.html",
      title: "High Roller (GMTK 2022)",
      description: "Roll your way to victory!",
      thumbnail:
        "https://img.itch.zone/aW1nLzk0NzIwNDEucG5n/300x240%23c/g46UJ5.png",
      width: 980,
      height: 652,
    },
    {
      url: "https://v6p9d9t4.ssl.hwcdn.net/html/6180759/index.html",
      title: "Rollemental",
      description: "An elemental dice clicker game made for GMTK 2022",
      thumbnail:
        "https://img.itch.zone/aW1nLzk1MzczMDIucG5n/300x240%23c/IZrQtu.png",
      width: 960,
      height: 540,
    },
    {
      url: "https://v6p9d9t4.ssl.hwcdn.net/html/6176850/All Bets Are Off (WebGL 2.0)/index.html",
      title: "All Bets Are Off",
      description: "Ya feelin' lucky today?",
      thumbnail:
        "https://img.itch.zone/aW1nLzk1NDc2OTcuZ2lm/300x240%23cm/YdMpcQ.gif",
      width: 960,
      height: 540,
    },
    {
      url: "",
      title: "123",
      description: "",
      thumbnail: "",
      width: 0,
      height: 0,
    },
  ];

  let sampleComment = `以下是一个包含200个字符的样例字符串：
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur diam ac velit tincidunt, sed fringilla nunc varius. Quisque pretium fringilla nisi ac semper. Vivamus aliquet varius leo, et malesuada massa pharetra vitae. Sed feugiat euismod nibh, non malesuada ligula tincidunt ut. Donec diam metus, volutpat sit amet viverra a, eleifend sit amet libero. In lobortis pharetra ante, a pharetra lectus tempus id. Suspendisse potenti. Aenean ligula nunc, dictum at maximus id, vestibulum sed est. Nunc at nunc justo. Maecenas consequat tortor a erat tempor, vel pulvinar diam luctus. Vestibulum dapibus ligula quis eleifend varius. Etiam sagittis nulla nec velit varius, sit amet lacinia nisl fringilla. Quisque accumsan sem id ex tempor ullamcorper. Sed eget est id nisl finibus lacinia.
Spero ut hoc exemplum tibi placeat!`;

  const [finalComments] = useState<UserComment[]>(getFinalComments(0.6));
  let [shownComments, setShownComments] = useState<UserComment[]>([]);
  let [index, setIndex] = useState(0);
  let timer: any;

  const [presentationIdx, setPresentation, nextScene] = useScene(
    (state) => [state.presentationIdx, state.setPresentation, state.nextScene],
    shallow,
  );

  const updateComments = () => {
    timer = setRandomInterval(
      () => {
        setShownComments((prevComments) => {
          return [...prevComments, finalComments[index]];
        });
        setIndex((prevIndex) => prevIndex + 1);
      },
      500,
      4000,
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
    playVideo ? 1000 : null,
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
        <div className={`flex flex-row w-full h-full bg-gray-600 justify-center`}>
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
              {selectedGames?.[presentationIdx]?.url}
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
