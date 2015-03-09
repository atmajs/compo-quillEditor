// source /src/umd.es6
mask.factory('a:quillEditor', function(global, $, done) {
  var TOOLBAR = "\n.a-ql-toolbar {\n    span.ql-format-group{\n        select.ql-font title=Font{\n            option value=sans-serif selected=selected > \n                \"Sans Serif\"\n            option value=serif > \n                \"Serif\"\n            option value=monospace > \n                \"Monospace\"\n        }\n        select.ql-size title=Size{\n            option value=10px > \n                \"Small\"\n            option value=13px selected=selected > \n                \"Normal\"\n            option value=18px > \n                \"Large\"\n            option value=32px > \n                \"Huge\"\n        }\n    }\n    span.ql-format-group{\n        span.ql-format-button.ql-bold title=Bold;\n        span.ql-format-separator;\n        span.ql-format-button.ql-italic title=Italic;\n        span.ql-format-separator;\n        span.ql-format-button.ql-underline title=Underline;\n        span.ql-format-separator;\n        span.ql-format-button.ql-strike title=Strikethrough;\n    }\n    span.ql-format-group{\n        select.ql-color title=\"Text Color\"{\n            option value=\"rgb(0, 0, 0)\" label=\"rgb(0, 0, 0)\" selected=selected;\n            option value=\"rgb(230, 0, 0)\" label=\"rgb(230, 0, 0)\";\n            option value=\"rgb(255, 153, 0)\" label=\"rgb(255, 153, 0)\";\n            option value=\"rgb(255, 255, 0)\" label=\"rgb(255, 255, 0)\";\n            option value=\"rgb(0, 138, 0)\" label=\"rgb(0, 138, 0)\";\n            option value=\"rgb(0, 102, 204)\" label=\"rgb(0, 102, 204)\";\n            option value=\"rgb(153, 51, 255)\" label=\"rgb(153, 51, 255)\";\n            option value=\"rgb(255, 255, 255)\" label=\"rgb(255, 255, 255)\";\n            option value=\"rgb(250, 204, 204)\" label=\"rgb(250, 204, 204)\";\n            option value=\"rgb(255, 235, 204)\" label=\"rgb(255, 235, 204)\";\n            option value=\"rgb(255, 255, 204)\" label=\"rgb(255, 255, 204)\";\n            option value=\"rgb(204, 232, 204)\" label=\"rgb(204, 232, 204)\";\n            option value=\"rgb(204, 224, 245)\" label=\"rgb(204, 224, 245)\";\n            option value=\"rgb(235, 214, 255)\" label=\"rgb(235, 214, 255)\";\n            option value=\"rgb(187, 187, 187)\" label=\"rgb(187, 187, 187)\";\n            option value=\"rgb(240, 102, 102)\" label=\"rgb(240, 102, 102)\";\n            option value=\"rgb(255, 194, 102)\" label=\"rgb(255, 194, 102)\";\n            option value=\"rgb(255, 255, 102)\" label=\"rgb(255, 255, 102)\";\n            option value=\"rgb(102, 185, 102)\" label=\"rgb(102, 185, 102)\";\n            option value=\"rgb(102, 163, 224)\" label=\"rgb(102, 163, 224)\";\n            option value=\"rgb(194, 133, 255)\" label=\"rgb(194, 133, 255)\";\n            option value=\"rgb(136, 136, 136)\" label=\"rgb(136, 136, 136)\";\n            option value=\"rgb(161, 0, 0)\" label=\"rgb(161, 0, 0)\";\n            option value=\"rgb(178, 107, 0)\" label=\"rgb(178, 107, 0)\";\n            option value=\"rgb(178, 178, 0)\" label=\"rgb(178, 178, 0)\";\n            option value=\"rgb(0, 97, 0)\" label=\"rgb(0, 97, 0)\";\n            option value=\"rgb(0, 71, 178)\" label=\"rgb(0, 71, 178)\";\n            option value=\"rgb(107, 36, 178)\" label=\"rgb(107, 36, 178)\";\n            option value=\"rgb(68, 68, 68)\" label=\"rgb(68, 68, 68)\";\n            option value=\"rgb(92, 0, 0)\" label=\"rgb(92, 0, 0)\";\n            option value=\"rgb(102, 61, 0)\" label=\"rgb(102, 61, 0)\";\n            option value=\"rgb(102, 102, 0)\" label=\"rgb(102, 102, 0)\";\n            option value=\"rgb(0, 55, 0)\" label=\"rgb(0, 55, 0)\";\n            option value=\"rgb(0, 41, 102)\" label=\"rgb(0, 41, 102)\";\n            option value=\"rgb(61, 20, 102)\" label=\"rgb(61, 20, 102)\";\n        }\n        span.ql-format-separator;\n        select.ql-background title=\"Background Color\"{\n            option value=\"rgb(0, 0, 0)\" label=\"rgb(0, 0, 0)\";\n            option value=\"rgb(230, 0, 0)\" label=\"rgb(230, 0, 0)\";\n            option value=\"rgb(255, 153, 0)\" label=\"rgb(255, 153, 0)\";\n            option value=\"rgb(255, 255, 0)\" label=\"rgb(255, 255, 0)\";\n            option value=\"rgb(0, 138, 0)\" label=\"rgb(0, 138, 0)\";\n            option value=\"rgb(0, 102, 204)\" label=\"rgb(0, 102, 204)\";\n            option value=\"rgb(153, 51, 255)\" label=\"rgb(153, 51, 255)\";\n            option value=\"rgb(255, 255, 255)\" label=\"rgb(255, 255, 255)\" selected=selected;\n            option value=\"rgb(250, 204, 204)\" label=\"rgb(250, 204, 204)\";\n            option value=\"rgb(255, 235, 204)\" label=\"rgb(255, 235, 204)\";\n            option value=\"rgb(255, 255, 204)\" label=\"rgb(255, 255, 204)\";\n            option value=\"rgb(204, 232, 204)\" label=\"rgb(204, 232, 204)\";\n            option value=\"rgb(204, 224, 245)\" label=\"rgb(204, 224, 245)\";\n            option value=\"rgb(235, 214, 255)\" label=\"rgb(235, 214, 255)\";\n            option value=\"rgb(187, 187, 187)\" label=\"rgb(187, 187, 187)\";\n            option value=\"rgb(240, 102, 102)\" label=\"rgb(240, 102, 102)\";\n            option value=\"rgb(255, 194, 102)\" label=\"rgb(255, 194, 102)\";\n            option value=\"rgb(255, 255, 102)\" label=\"rgb(255, 255, 102)\";\n            option value=\"rgb(102, 185, 102)\" label=\"rgb(102, 185, 102)\";\n            option value=\"rgb(102, 163, 224)\" label=\"rgb(102, 163, 224)\";\n            option value=\"rgb(194, 133, 255)\" label=\"rgb(194, 133, 255)\";\n            option value=\"rgb(136, 136, 136)\" label=\"rgb(136, 136, 136)\";\n            option value=\"rgb(161, 0, 0)\" label=\"rgb(161, 0, 0)\";\n            option value=\"rgb(178, 107, 0)\" label=\"rgb(178, 107, 0)\";\n            option value=\"rgb(178, 178, 0)\" label=\"rgb(178, 178, 0)\";\n            option value=\"rgb(0, 97, 0)\" label=\"rgb(0, 97, 0)\";\n            option value=\"rgb(0, 71, 178)\" label=\"rgb(0, 71, 178)\";\n            option value=\"rgb(107, 36, 178)\" label=\"rgb(107, 36, 178)\";\n            option value=\"rgb(68, 68, 68)\" label=\"rgb(68, 68, 68)\";\n            option value=\"rgb(92, 0, 0)\" label=\"rgb(92, 0, 0)\";\n            option value=\"rgb(102, 61, 0)\" label=\"rgb(102, 61, 0)\";\n            option value=\"rgb(102, 102, 0)\" label=\"rgb(102, 102, 0)\";\n            option value=\"rgb(0, 55, 0)\" label=\"rgb(0, 55, 0)\";\n            option value=\"rgb(0, 41, 102)\" label=\"rgb(0, 41, 102)\";\n            option value=\"rgb(61, 20, 102)\" label=\"rgb(61, 20, 102)\";\n        }\n    }\n    span.ql-format-group{\n        span.ql-format-button.ql-list title=List;\n        span.ql-format-separator;\n        span.ql-format-button.ql-bullet title=Bullet;\n        span.ql-format-separator;\n        select.ql-align title=\"Text Alignment\"{\n            option value=left label=Left selected=selected;\n            option value=center label=Center;\n            option value=right label=Right;\n            option value=justify label=Justify;\n        }\n    }\n    span.ql-format-group > \n        span.ql-format-button.ql-link title=Link;\n}";
  var FILL = 'position:absolute; top: 0; right: 0; bottom: 0; left:0;';
  var QuillCompo = mask.Compo({
    tagName: 'div',
    template: ("\n\t\t" + TOOLBAR + "\n\n\t\t.a-ql-content style='" + FILL + "; height: auto' > :html > @placeholder (::text);\n\t\t\n\t\t@placeholder (::node);\n\t"),
    attr: {
      'style': FILL,
      'class': 'a-quill'
    },
    slots: {domInsert: function() {
        var $$content = this.$.find('.a-ql-content')[0],
            $$toolbar = this.$.find('.a-ql-toolbar')[0];
        this.editor = new global.Quill($$content, {theme: this.xTheme});
        this.editor.addModule('toolbar', {container: $$toolbar});
        this.editor.on('text-change', this.onChange_.bind(this));
        if (this.xLive !== true) {
          this.$.find('.ql-editor').on('blur', this.onBlur_.bind(this));
        }
        $$content.style.top = $$toolbar.scrollHeight + 'px';
      }},
    meta: {
      'template': 'merge',
      'attributes': {
        '?x-live': 'boolean',
        '?x-theme': {default: 'snow'}
      }
    },
    get: function() {
      if (this.editor == null)
        return mask.jmask(this).text();
      return this.editor.getHTML();
    },
    set: function(str, el) {
      if (this.editor == null) {
        var $el = el == null ? mask.jmask(this) : $(el);
        $el.find('.a-ql-content').html(str);
        return;
      }
      this.editor.setHTML(str);
    },
    dispose: function() {
      this.editor.destroy();
    },
    changed_: false,
    onBlur_: function() {
      if (this.changed_ !== true)
        return;
      this.emitChange_();
    },
    onChange_: function() {
      if (this.xLive)
        return this.emitChange_();
      this.changed_ = true;
    },
    emitChange_: function() {
      this.changed_ = false;
      this.emitOut('quillEditor_Change', this.get());
    }
  });
  done(QuillCompo);
});

// end:source /src/umd.es6