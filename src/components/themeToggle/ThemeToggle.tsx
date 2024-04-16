"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={toggle}
    >{theme === "dark"
      ? <Image src="/sun.png" alt="sun" loading="lazy" width={25} height={25} />
      : <Image src="/moon.png" alt="moon" loading="lazy" width={25} height={25} />
      }
    </div>
  );
};

export default ThemeToggle;
