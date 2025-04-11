export default {
  title: 'Draw rectangles',
  componentType: 'learingSession',
  code: `
<svg height="200">
  <rect x="20" y="20" width="150" height="100" fill="blue" stroke="black" stroke-width="2"/>
  <rect x="200" y="20" width="50" height="50" fill="red" stroke="black" stroke-width="2"/>
  <rect x="200" y="80" width="25" height="25" fill="yellow" stroke="blue" stroke-width="2"/>
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
