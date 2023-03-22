import React from "react";

import s from "@/styles/Manual.module.css";

interface IProps {
  logo: any;
  title: string;
  idx: number;
  grap?: { logo: any; title: string };
  setGrap: any;
  overlab?: string;
  setOverlab: any;
  list: { logo: any; title: string }[];
  setList: any;
}
const Card: React.FC<IProps> = ({
  logo,
  title,
  idx,
  setGrap,
  grap,
  setOverlab,
  overlab,
  list,
  setList,
}) => {
  const [timer, setTimer] = React.useState();

  const handleMouseover: React.MouseEventHandler<HTMLElement> = (e) => {
    setOverlab(title);
    let newList: { logo: any; title: string }[] = [...list];
    console.log("grap is " + grap?.title + " and ovelab is " + title);
    // e.currentTarget.style.backgroundColor = "blue";
    let grapIdx = 0;
    if (grap) {
      list.map((v, i) => {
        if (v.title === grap.title) {
          grapIdx = i;
          return;
        }
      });
      console.log(grapIdx, idx);
      if (grapIdx > idx) {
        e.currentTarget.classList.add(s.leftSlide);

        newList.splice(idx, 0, grap);
        newList = newList.filter((v, i) => v.title !== grap.title || idx === i);
      } else {
        e.currentTarget.classList.add(s.rightSlide);

        newList.splice(idx + 1, 0, grap);
        newList = newList.filter(
          (v, i) => v.title !== grap.title || idx + 1 === i
        );
      }

      setTimeout(() => setList(newList), 300);
    }
  };

  const handleDragStart: React.MouseEventHandler<HTMLElement> = (e) => {
    setGrap({ title, logo });
    e.currentTarget.classList.add(s.grab);
    console.log(title + "_grap and ovelab is " + overlab);
  };

  const handleDragEnd: React.MouseEventHandler<HTMLElement> = (e) => {
    // e.currentTarget.classList.remove(s.grab);

    let newList: { logo: any; title: string }[] = [...list];
    if (grap) {
      let grapIdx = 0;
      list.map((v, i) => {
        if (v.title === grap.title) {
          grapIdx = i;
          return;
        }
      });

      let ovelabIdx = 0;

      list.map((v, i) => {
        if (v.title === overlab) {
          ovelabIdx = i;
          return;
        }
      });

      if (grapIdx > ovelabIdx) {
        newList.splice(ovelabIdx, 0, grap);
        newList = newList.filter(
          (v, i) => v.title !== grap.title || ovelabIdx === i
        );
      } else {
        newList.splice(ovelabIdx + 1, 0, grap);
        newList = newList.filter(
          (v, i) => v.title !== grap.title || ovelabIdx + 1 === i
        );
      }
      //   setTimeout(() => setList(newList), 1000);

      setOverlab(null);
    }

    setGrap(null);

    setOverlab(null);

    console.log(title + "_ungrap");
  };
  return (
    <article
      className={""}
      draggable
      onDragEnter={title !== grap?.title ? handleMouseover : (e) => {}}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <img src={logo && logo.src}></img>
      <span>{title}</span>
    </article>
  );
};

export default Card;
