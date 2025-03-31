import styles from "./pages.module.scss";

const DrawLine = () => {
  return (
    <div className={styles.container}>
      <h2>Draw a simple line</h2>
      {/* <img src="/learn-svg/assets/dummy-1280x720-White.jpg" /> */}
      <code>
        <svg>
          <path d="M0,0 h100" stroke="red"></path>
        </svg>
      </code>
      This is the About PAGE
    </div>
  );
};

export default DrawLine;
