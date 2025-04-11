import drawSimpleLine from './drawSimpleLine';
import drawCircles from './drawCircles';
import drawRectangles from './drawRectangles';
import drawPath from './drawPath';
import drawEllipse from './drawEllipse';
import drawPolygon from './drawPolygon';
import drawStar from './drawStar';

const getNavigations = (linkName: string) => {
  const to = linkName.replace(/ /g, '-').toLowerCase();
  return {
    to: `/${to}`,
    linkName,
  };
};

export default {
  sections: [
    {
      navigation: {
        to: '/',
        linkName: 'Home',
      },
      content: {
        title: 'Draw a simple line',
        componentType: 'learingSession',
        code: ``,
        details: `
        <p>asdasd</p>`,
      },
    },
    {
      navigation: getNavigations('Draw simple line'),
      content: drawSimpleLine,
    },
    {
      navigation: getNavigations('Draw circles'),
      content: drawCircles,
    },
    {
      navigation: getNavigations('Draw rectangles'),
      content: drawRectangles,
    },
    {
      navigation: getNavigations('Draw path'),
      content: drawPath,
    },
    {
      navigation: getNavigations('Draw ellipse'),
      content: drawEllipse,
    },
    {
      navigation: getNavigations('Draw polygon'),
      content: drawPolygon,
    },
    {
      navigation: getNavigations('Draw a star'),
      content: drawStar,
    },
  ],
};

/**
 * define all content what i want to share
 * - draw a line
 * - draw a polygone
 * - draw a path
 * - draw a more than one lines and group it
 * - transform
 */
