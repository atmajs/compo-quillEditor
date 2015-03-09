### [Quill](http://quilljs.com/) Component Wrapper

[![Build Status](https://travis-ci.org/atmajs/compo-quillEditor.png?branch=master)](https://travis-ci.org/atmajs/compo-quillEditor)
[![Bower version](https://badge.fury.io/bo/compo-quilleditor.svg)](http://badge.fury.io/bo/compo-quilleditor)

```scss
a:quillEditor;
```
### Attributes

Attributes | Description
---------- | ---
`?x-theme` | Quill theme (_default_ `snow`)
`?x-live`  | Define this attribute, to emit `quillEditor_Changed` signal on each `keypress`, otherwise this signal is deferred until `blur` event


### Signals
Signal | Description
--- | ---
`quillEditor_Changed` | `(sender, text)` is emitted each time text is changed

### Install
```bash
bower install compo-quilleditor
```

### API

- **`editor`** <a name='input'>#</a>

	Quill `Editor` instance

- **`get()`** <a name='get'>#</a>
	
	Get text
	
- **`set(value)`** <a name='set'>#</a>

	Set text

### Dependencies

- `QuillJS`: embed quill sources in any way into your application.

### Examples

- [/examples](/examples)

```bash
# install atma toolkit
npm install atma
# run server
atma server

# navigate `http://localhost:5777/examples/simple.html`
```

### Test
```bash
npm test
```

:copyright: MIT - The Atma.js Project