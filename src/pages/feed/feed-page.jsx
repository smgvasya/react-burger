import styles from './feed-page.module.css';


export const FeedPage = () => {

  return (
    <div className={styles.feedPage}>
          <h1 className="text text_type_main-large">Лента заказов</h1>
          <div className={styles.container}>
            <FeedOrderInfo />
            <FeedOrder />
          </div>
    </div>
  );
};
