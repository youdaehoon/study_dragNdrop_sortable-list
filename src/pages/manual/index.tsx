import Link from "next/link";
import React from "react";

import s from "@/styles/Manual.module.css";
import Card from "./component/Card";
import icon from "@/icon";

const index = () => {
  const initdata: {
    logo: any;
    title: string;
  }[] = [
    { logo: icon.github, title: "github" },
    { logo: icon.vecel, title: "vercel" },
    { logo: icon.react, title: "react" },
    { logo: icon.php, title: "php" },
  ];
  const [list, setList] =
    React.useState<{ logo: any; title: string }[]>(initdata);
  const [grap, setGrap] = React.useState<{ logo: any; title: string }>();
  const [overlab, setOverlab] = React.useState<string>();
  return (
    <div className={s.container + " tb1"}>
      <div>
        <Link href={"/"}>메인으로</Link>
      </div>
      <div>
        <div className={s["wrap-card"]}>
          {list.map((v, idx) => (
            <Card
              logo={v.logo}
              title={v.title}
              key={v.title + idx}
              idx={idx}
              setGrap={setGrap}
              setOverlab={setOverlab}
              grap={grap}
              overlab={overlab}
              setList={setList}
              list={list}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
