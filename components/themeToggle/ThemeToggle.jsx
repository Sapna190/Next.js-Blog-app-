"use client";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/themeContext";

const ThemeToggle = () => {

    const {theme, } = useContext(ThemeContext)
    console.log(theme)

    return(
        <div className={styles.container}>
            <div className={styles.ball}></div>
            <Image src="/images/sun.png" alt="" width={14} height={14} />
            </div>
    )
}

export default ThemeToggle;