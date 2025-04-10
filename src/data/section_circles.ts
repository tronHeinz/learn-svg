export default {
  title: 'Draw cirlces',
  componentType: 'learingSession',
  code: `
<svg width="500">
  <circle cx="100" cy="100" r="40" fill="blue" />
  <circle cx="200" cy="100" r="30" fill="blue" />
  <circle cx="300" cy="100" r="20" fill="red" />
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
