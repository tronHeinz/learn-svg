import { useEffect, useRef } from 'react';

type propTypes = {
  htmlContent: string;
};

const HtmlRenderer = ({ htmlContent }: propTypes) => {
  const htmlContainer = useRef(null);

  useEffect(() => {
    (htmlContainer.current! as HTMLDivElement).innerHTML =
      htmlContent.toString();
  }, [htmlContent]);

  return <div ref={htmlContainer} />;
};

export default HtmlRenderer;
