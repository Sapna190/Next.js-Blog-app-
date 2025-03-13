"use client";
import Image from "next/image";
import React from "react";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
    return(
        <div className={styles.container}>
            <Image src="/images/moon.png" alt="" width={14} height={14} />
            <div className={styles.ball}></div>
            <Image src="/images/sun.png" alt="" width={14} height={14} />
            </div>
    )
}

export default ThemeToggle;