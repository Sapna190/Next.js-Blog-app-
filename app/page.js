import CardList from "@/components/cardList/CardList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import CategoryList from "@/components/categoryList/CategoryList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>      
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
    </div>
  );
}
