import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { activeTab } from "../../services/actions/tabs-ingredients";

const IngredientsTabs: React.FC = () => {
  const dispatch = useDispatch();

  const currentTab = useSelector((state) => state.tab.currentTab);

  const handleTabClick = (tab: string) => {
    dispatch(activeTab(tab));
    const item = document.getElementById(tab) as HTMLElement;
    item.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.tabs}>
      <Tab value={"bun"} active={currentTab === "bun"} onClick={handleTabClick}>
        Булки
      </Tab>
      <Tab
        value={"sauce"}
        active={currentTab === "sauce"}
        onClick={handleTabClick}
      >
        Соусы
      </Tab>
      <Tab
        value={"main"}
        active={currentTab === "main"}
        onClick={handleTabClick}
      >
        Начинки
      </Tab>
    </div>
  );
};

export default IngredientsTabs;
