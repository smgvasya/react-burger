import styles from './feed-order.module.css';



export const FeedOrder = () => {



  return (
    <div className={styles.feedPage__ordersInfo}>
      <div className={styles.feedPage__ordersStatus}>
        <div>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <ul className={styles.feedPage__ordersStatusList}>

                <li key={order._id}>
                  <p
                    className={`text text_type_digits-default ${styles.feedPage__orderNumber_done}`}
                  >
                    {order.number}
                  </p>
                </li>

          </ul>
        </div>
        <div>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <ul className={styles.feedPage__ordersStatusList}>
                <li key={order._id}>
                  <p className="text text_type_digits-default">
                    {order.number}
                  </p>
                </li>

          </ul>
        </div>
      </div>
      <div className={styles.feedPage__ordersTotal}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className="text text_type_digits-large">{totalOrders}</p>
      </div>
      <div className={styles.feedPage__ordersToday}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className="text text_type_digits-large">{todayOrders}</p>
      </div>
    </div>
  );
};
