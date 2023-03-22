import React from "react";

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
  const handleMouseover: React.MouseEventHandler<HTMLElement> = (e) => {
    e.currentTarget.style.animation = "slide-left 1s infinite";
    console.log(title + "_overlab");
    setOverlab(title);
  };

  const handleDragStart: React.MouseEventHandler<HTMLElement> = (e) => {
    setGrap({ title, logo });
    console.log(title + "_grap and ovelab is " + overlab);
  };

  const handleDragEnd: React.MouseEventHandler<HTMLElement> = (e) => {
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

      setList(newList);
      setOverlab(null);
    }

    setGrap(null);
    setOverlab(null);

    console.log(title + "_ungrap");
  };
  return (
    <article
      className={overlab === title ? "leftSlide" : ""}
      draggable
      onDragEnter={
        overlab !== title && title !== grap?.title ? handleMouseover : () => {}
      }
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <img src={logo&&logo.src}></img>
      <span>{title}</span>
    </article>
  );
};

export default Card;
