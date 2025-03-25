"use client";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/themeContext";

const ThemeToggle = () => {

    const {theme} = useContext(ThemeContext)

    return(
        <div className={styles.container}>
            <Image src="/images/moon.png" alt="" width={14} height={14} />
            <div className={styles.ball}></div>
            <Image src="/images/sun.png" alt="" width={14} height={14} />
            </div>
    )
}

export default ThemeToggle;