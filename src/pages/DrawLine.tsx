import { useRef, useEffect, useState } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';

import styles from './pages.module.scss';

const DrawLine = () => {
  const editor = useRef(null);
  const outputRef = useRef(null);
  const [suggestions, setSuggestions] = useState([] as string[]);

  const sCode = `<svg>
   <path d="M0,0 h200 v100 h-20 z" fill="yellow" stroke="red"></path>
</svg>`;

  useEffect(() => {
    const startValue = sCode;
    const editorState = EditorState.create({
      doc: startValue,
      extensions: [basicSetup],
    });

    const view = new EditorView({
      state: editorState,
      parent: editor.current!,
    });

    // Update the output whenever the document changes
    const updateOutput = (state: EditorState) => {
      if (outputRef.current) {
        const code = state.doc.toString();

        (outputRef.current as HTMLDivElement).innerHTML = code;
      }
    };

    // const selectSuggestion = (suggestion) => {
    //   const view = editorContainer.current.view; // Referencing the editor view
    //   const wordToInsert = suggestion;
    //   const [suggestions, setSuggestions] = useState([]);
    //   const [cursorPosition, setCursorPosition] = useState(null);

    //   // Apply the selected suggestion into the editor
    //   const transaction = view.state.update({
    //     changes: {
    //       from: cursorPos - suggestion.length,
    //       to: cursorPos,
    //       insert: wordToInsert,
    //     },
    //   });

    //   view.dispatch(transaction);
    //   setSuggestions([]);
    // };

    const triggerAutocomplete = (view) => {
      const pos = view.state.selection.main.head; // Get current position of the cursor
      const line = view.state.doc.lineAt(pos);
      const currentWord = line.text.slice(0, pos - line.from).trim();

      const keywords = ['path'];

      if (currentWord) {
        const matches = keywords.filter((keyword) =>
          keyword.startsWith(currentWord),
        );
        if (matches.length) {
          setSuggestions(matches);
          // setCursorPosition(pos);
        } else {
          setSuggestions([]);
        }
      } else {
        setSuggestions([]);
      }
    };

    // Listening to changes
    view.setState(
      EditorState.create({
        doc: startValue,
        extensions: [
          basicSetup,
          EditorView.updateListener.of((update) => {
            if (update.changes) {
              updateOutput(view.state);
              triggerAutocomplete(view);
            }
          }),
        ],
      }),
    );

    // view.dom.on('change', () => {
    //   console.log('asd');
    // });
  }, [sCode]);

  return (
    <div className={styles.container}>
      <h2>Draw a simple line</h2>
      {/* <img src="/learn-svg/assets/dummy-1280x720-White.jpg" /> */}
      <div className={styles.code}></div>
      <div ref={editor}></div>
      {/* <pre>
        <code>{sCode.toString()}</code>
      </pre> */}
      <h2>Here is the result:</h2>
      <hr />
      <div ref={outputRef}></div>
      <hr />
      <h2>Explain the situation</h2>
      <p>You have some commands in the d-attribute.</p>
      <ul>
        <li>M define the x,y move start position</li>
        <li>
          h define a horizontal line, start from relative startpoint with width
          200
        </li>
        <li>lowercase v define a vertical line with width 100</li>
        <li>
          -h define a horizontal line, start from relative startpoint with width
          -20
        </li>
        <li>z close the whole path</li>
      </ul>
    </div>
  );
};

export default DrawLine;
