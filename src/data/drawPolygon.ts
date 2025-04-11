export default {
  title: 'Draw polygon',
  componentType: 'learingSession',
  code: `
<svg width="400" height="200">
  <polygon points="100,10 40,190 190,190" style="fill:purple;"/>
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
