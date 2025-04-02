import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';

type refType = HTMLDivElement | null;

class Editor {
  editorState: EditorState;
  outputRef: refType;
  view: EditorView;

  constructor(
    startCode: string = 'defaultTex missing',
    editorRef: refType,
    outputRef: refType,
  ) {
    this.outputRef = outputRef;

    this.editorState = EditorState.create({
      doc: startCode,
      extensions: [basicSetup],
    });

    this.view = new EditorView({
      state: this.editorState,
      parent: editorRef as Element,
    });

    // Listening to changes
    this.view.setState(
      EditorState.create({
        doc: startCode,
        extensions: [
          basicSetup,
          EditorView.updateListener.of((update) => {
            if (update.changes) {
              this.updateOutput();
              this.triggerAutocomplete();
            }
          }),
        ],
      }),
    );
  }

  updateOutput() {
    const { outputRef } = this;
    const { state } = this.view;

    if (outputRef) {
      const code = state.doc.toString();
      outputRef.innerHTML = code;
    }
  }

  // @todo make it easier in order to type code into editor
  triggerAutocomplete = () => {
    const { state } = this.view;
    const pos = state.selection.main.head; // Get current position of the cursor
    const line = state.doc.lineAt(pos);
    const currentWord = line.text.slice(0, pos - line.from).trim();

    const keywords = ['path'];

    if (currentWord) {
      const matches = keywords.filter((keyword) =>
        keyword.startsWith(currentWord),
      );
      if (matches.length) {
        // setSuggestions(matches);
        // setCursorPosition(pos);
      } else {
        // setSuggestions([]);
      }
    } else {
      // setSuggestions([]);
    }
  };
}

export default Editor;
