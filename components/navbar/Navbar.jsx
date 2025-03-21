import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";


const Navbar = () => {
    return(
        <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/images/facebook.png" alt="facebook" width={24} height={24}/>
            <Image src="/images/instagram.png" alt="instagram" width={24} height={14}/>
            <Image src="/images/tiktok.png" alt="tiktok" width={24} height={24}/>
            <Image src="/images/youtube.png" alt="youtube" width={24} height={24}/>
        </div> 
        <div className={styles.logo}>lamablog</div>
        <div className={styles.links}>
            <ThemeToggle/>
            <Link href="/">Homepage</Link>
            <Link href="/">Contacts</Link>
            <Link href="/">About</Link>
            <AuthLinks/>
        </div>
        </div>
    )
}

export default Navbar;