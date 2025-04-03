import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Editor from '../components/Editor';
import HtmlRenderer from '../components/HtmlRenderer';
import contentData from '../contentData';

import styles from './learningSession.module.scss';

const LearingSession = () => {
  const editorRef = useRef(null);
  const outputRef = useRef(null);

  // search for active lerning session
  const location = useLocation();

  const currentSessionData = contentData.sections.find(
    (item) => item.navigation.to === location.pathname,
  );

  const { title, code, details } = currentSessionData!.content;

  useEffect(() => {
    new Editor(code, editorRef.current, outputRef.current);
  }, [code]);

  return (
    <div className={styles.containerSections}>
      <section>
        <h2>{title}</h2>
        {/* <img src="/learn-svg/assets/dummy-1280x720-White.jpg" /> */}
        <p className={styles.inputEditor} ref={editorRef}></p>
      </section>
      <section>
        <h2>Result</h2>
        <p className={styles.outputEditor} ref={outputRef}></p>
      </section>
      <section>
        <h2>Details</h2>
        <HtmlRenderer htmlContent={details}></HtmlRenderer>
      </section>
    </div>
  );
};

export default LearingSession;
