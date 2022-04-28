import React from 'react';
import styles from './app.scss';
const App = () => (
  <div className={styles.app}>
    <h1 className={styles.text}>
      clean-react-app{' '}
      <span role='img' aria-label='can'>
        🗑️
      </span>
    </h1>
  </div>
);
export default App;
