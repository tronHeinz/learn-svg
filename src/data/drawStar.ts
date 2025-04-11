export default {
  title: 'Draw a star',
  componentType: 'learingSession',
  code: `
<svg width="400" height="200">
  <polygon points="100,10 120,60 170,60 130,90 150,140 100,110 50,140 70,90 30,60 80,60" style="fill:gold;"/>
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
