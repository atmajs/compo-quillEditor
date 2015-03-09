var TOOLBAR = `
.a-ql-toolbar {
    span.ql-format-group{
        select.ql-font title=Font{
            option value=sans-serif selected=selected > 
                "Sans Serif"
            option value=serif > 
                "Serif"
            option value=monospace > 
                "Monospace"
        }
        select.ql-size title=Size{
            option value=10px > 
                "Small"
            option value=13px selected=selected > 
                "Normal"
            option value=18px > 
                "Large"
            option value=32px > 
                "Huge"
        }
    }
    span.ql-format-group{
        span.ql-format-button.ql-bold title=Bold;
        span.ql-format-separator;
        span.ql-format-button.ql-italic title=Italic;
        span.ql-format-separator;
        span.ql-format-button.ql-underline title=Underline;
        span.ql-format-separator;
        span.ql-format-button.ql-strike title=Strikethrough;
    }
    span.ql-format-group{
        select.ql-color title="Text Color"{
            option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)" selected=selected;
            option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)";
            option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)";
            option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)";
            option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)";
            option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)";
            option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)";
            option value="rgb(255, 255, 255)" label="rgb(255, 255, 255)";
            option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)";
            option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)";
            option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)";
            option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)";
            option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)";
            option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)";
            option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)";
            option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)";
            option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)";
            option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)";
            option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)";
            option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)";
            option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)";
            option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)";
            option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)";
            option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)";
            option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)";
            option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)";
            option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)";
            option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)";
            option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)";
            option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)";
            option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)";
            option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)";
            option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)";
            option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)";
            option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)";
        }
        span.ql-format-separator;
        select.ql-background title="Background Color"{
            option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)";
            option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)";
            option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)";
            option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)";
            option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)";
            option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)";
            option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)";
            option value="rgb(255, 255, 255)" label="rgb(255, 255, 255)" selected=selected;
            option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)";
            option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)";
            option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)";
            option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)";
            option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)";
            option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)";
            option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)";
            option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)";
            option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)";
            option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)";
            option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)";
            option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)";
            option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)";
            option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)";
            option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)";
            option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)";
            option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)";
            option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)";
            option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)";
            option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)";
            option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)";
            option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)";
            option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)";
            option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)";
            option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)";
            option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)";
            option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)";
        }
    }
    span.ql-format-group{
        span.ql-format-button.ql-list title=List;
        span.ql-format-separator;
        span.ql-format-button.ql-bullet title=Bullet;
        span.ql-format-separator;
        select.ql-align title="Text Alignment"{
            option value=left label=Left selected=selected;
            option value=center label=Center;
            option value=right label=Right;
            option value=justify label=Justify;
        }
    }
    span.ql-format-group > 
        span.ql-format-button.ql-link title=Link;
}`;
var FILL = 'position:absolute; top: 0; right: 0; bottom: 0; left:0;';

var QuillCompo = mask.Compo({
	tagName: 'div',
	template: `
		${TOOLBAR}

		.a-ql-content style='${FILL}; height: auto; top: 40px;' > :html > @placeholder (::text);
		
		@placeholder (::node);
	`,
	attr: {
		'style': FILL,
		'class': 'a-quill'
	},
	slots: {
		domInsert () {
			var $$content = this.$.find('.a-ql-content')[0],
				$$toolbar = this.$.find('.a-ql-toolbar')[0];
			
			this.editor = new global.Quill($$content, {
				theme: this.xTheme
			});

			this.editor.addModule('toolbar', {
		    	container: $$toolbar
		  	});


			this.editor.on('text-change', this.onChange_.bind(this));
			if (this.xLive !== true) {
				this.$.find('.ql-editor').on('blur', this.onBlur_.bind(this));
			}

            var height = $$toolbar.scrollHeight;
            if (height > 0)
		  	   $$content.style.top = height + 'px';
		}
	},
	meta: {
		'template': 'merge',
		'attributes': {
			'?x-live': 'boolean',
            '?x-theme': { default: 'snow' }
		}
	},

	

	get () {
		if (this.editor == null)
			return mask.jmask(this).text();
		
		return this.editor.getHTML();
	},
	set (str, el) {
		if (this.editor == null) {
            var $el = el == null ? this.$ : $(el);
            if ($el == null) {
                $el = mask.jmask(this);
            }
			$el.find('.a-ql-content').html(str);
			return;
		}
		this.editor.setHTML(str);
	},
	
	dispose () {
		this.editor.destroy();
	},
	
	changed_: false,
	onBlur_ () {
		if (this.changed_ !== true) 
			return;
		
		this.emitChange_();
	},
	onChange_ () {
		if (this.xLive) 
			return this.emitChange_();
		
		this.changed_ = true;
	},
	emitChange_ () {
		this.changed_ = false;
		this.emitOut('quillEditor_Change', this.get());
	}
})