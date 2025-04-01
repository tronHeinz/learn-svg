import { useRef, useEffect } from "react";

import styles from "./pages.module.scss";

const DrawLine = () => {
  const output = useRef(null);
  const sCode = `<svg>
   <path d="M0,0 h200 v100 h-20 z" fill="yellow" stroke="red"></path>
</svg>`;

  useEffect(() => {
    if (output.current) {
      (output.current as HTMLElement).innerHTML = sCode;
    }
  }, [sCode]);

  return (
    <div className={styles.container}>
      <h2>Draw a simple line</h2>
      {/* <img src="/learn-svg/assets/dummy-1280x720-White.jpg" /> */}
      <div className={styles.code}></div>
      <pre>
        <code>{sCode.toString()}</code>
      </pre>
      <h2>Here is the result:</h2>
      <hr />
      <div ref={output}></div>
      <hr />
      <h2>Explain the situation</h2>
      <p>You have some commands in the d-attribute.</p>
      <ul>
        <li>M define the x,y move start position</li>
        <li>
          h define a horizontal line, start from relative startpoint with width
          200
        </li>
        <li>lowercase v define a vertical line with width 100</li>
        <li>
          -h define a horizontal line, start from relative startpoint with width
          -20
        </li>
        <li>z close the whole path</li>
      </ul>
    </div>
  );
};

export default DrawLine;
