import React, {Component, Fragment} from 'react';
import styles from './styles/main.scss';


const content = 'Hello world!';

const App = () => (
  <Fragment>
    <div className={styles["resizeable-both"]}>{content}</div>
  </Fragment>
);

export default App;
