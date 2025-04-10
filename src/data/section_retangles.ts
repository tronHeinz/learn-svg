export default {
  title: 'Draw rectangles',
  componentType: 'learingSession',
  code: `
<svg width="500">
  <rect x="20" y="20" width="150" height="100" fill="blue" stroke="black" stroke-width="2"/>
</svg>`,
  details: `
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
`,
};
