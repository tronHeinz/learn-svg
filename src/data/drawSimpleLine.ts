export default {
  title: 'Draw a simple line',
  componentType: 'learingSession',
  code: `
<svg width="400" height="200">
  <line x1="10" y1="10" x2="190" y2="190" stroke="black" stroke-width="2" />  
  <line x1="50" y1="10" x2="240" y2="190" stroke="red" stroke-width="1" />
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
