import { useRef, useEffect } from 'react';
import Editor from '../components/Editor';

import styles from './pages.module.scss';

const DrawLine = () => {
  const editorRef = useRef(null);
  const outputRef = useRef(null);

  const defaultCode = `<svg>
  <path d="M0,0 h200 v100 h-20 z" fill="yellow" stroke="red"></path>
</svg>`;

  useEffect(() => {
    new Editor(defaultCode, editorRef.current, outputRef.current);
  }, [defaultCode]);

  return (
    <div className={styles.container}>
      <section>
        <h2>Draw a simple line</h2>
        {/* <img src="/learn-svg/assets/dummy-1280x720-White.jpg" /> */}
        <div className={styles.code}></div>
        <div className={styles.inputEditor} ref={editorRef}></div>
        <h2>Result</h2>
        <hr />
        <div className={styles.outputEditor} ref={outputRef}></div>
        <hr />
        <h2>Details</h2>
        <p>You have some commands in the d-attribute.</p>
        <ul>
          <li>M define the x,y move start position</li>
          <li>
            h define a horizontal line, start from relative startpoint with
            width 200
          </li>
          <li>lowercase v define a vertical line with width 100</li>
          <li>
            -h define a horizontal line, start from relative startpoint with
            width -20
          </li>
          <li>z close the whole path</li>
        </ul>
      </section>
    </div>
  );
};

export default DrawLine;
