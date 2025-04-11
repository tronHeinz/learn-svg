export default {
  title: 'Draw a simple line',
  componentType: 'learingSession',
  code: `
<svg height="200">
  <path d="M50,50 l10 20 l40 50 l100 10 l100 -50" stroke="blue" fill="none"></path>
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
};
