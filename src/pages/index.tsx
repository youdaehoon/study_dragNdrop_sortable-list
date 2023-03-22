import { Inter } from "next/font/google";
import Link from "next/link";

import s from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={s.container + " tb1"}>
      <div>
        <Link className="tb2" href={"/manual"}>
          no library
        </Link>
      </div>
    </div>
  );
}
