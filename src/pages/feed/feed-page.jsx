import styles from './feed-page.module.css';
import { FeedOrderInfo } from '../../components/feed-order-info/feed-order-info';
import { FeedOrder } from '../../components/feed-order/feed-order';

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
