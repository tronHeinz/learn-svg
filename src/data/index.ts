import section_1 from './section_1';
import section_2 from './section_2';

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
      content: section_2,
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
