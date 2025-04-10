import section_1 from './section_1';
import section_circles from './section_circles';
import section_retangles from './section_retangles';


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
      navigation: {
        to: '/lerning-section-1',
        linkName: 'Draw a simple line',
      },
      content: section_1,
    },
    {
      navigation: {
        to: '/lerning-section-2',
        linkName: 'Draw a simple line 2',
      },
      content: section_circles,
    },
    {
      navigation: {
        to: '/lerning-section-3',
        linkName: 'Draw a simple line 2',
      },
      content: section_retangles,
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
