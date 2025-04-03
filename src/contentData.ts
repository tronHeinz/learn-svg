const lerningData = {
  sections: [
    {
      navigation: {
        to: '/',
        linkName: 'Home',
      },
      content: {
        title: 'Draw a simple line',
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
      content: {
        title: 'Draw a simple line',
        code: `<svg height="300">
  <path d="M50,50 h100 v200 h20 z" stroke="red" fill="aqua"></path>
</svg>`,
        details: `        <p>You have some commands in the d-attribute.</p>
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
`,
      },
    },
  ],
};

export default lerningData;
