/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");

__webpack_require__(/*! ./scripts */ "./resources/js/scripts.js");

__webpack_require__(/*! ./editormd.min */ "./resources/js/editormd.min.js");

/***/ }),

/***/ "./resources/js/editormd.min.js":
/*!**************************************!*\
  !*** ./resources/js/editormd.min.js ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Editor.md v1.5.0 | editormd.min.js | Open source online markdown editor. | MIT License | By: Pandao | https://github.com/pandao/editor.md | 2015-06-09 */
!function (e) {
  "use strict";

   true && "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = e :  true ? __webpack_require__.amdO || 0 : 0;
}(function () {
  "use strict";

  var e = "undefined" != typeof jQuery ? jQuery : Zepto;

  if ("undefined" != typeof e) {
    var t = function t(e, i) {
      return new t.fn.init(e, i);
    };

    t.title = t.$name = "Editor.md", t.version = "1.5.0", t.homePage = "https://pandao.github.io/editor.md/", t.classPrefix = "editormd-", t.toolbarModes = {
      full: ["undo", "redo", "|", "bold", "del", "italic", "quote", "ucwords", "uppercase", "lowercase", "|", "h1", "h2", "h3", "h4", "h5", "h6", "|", "list-ul", "list-ol", "hr", "|", "link", "reference-link", "image", "code", "preformatted-text", "code-block", "table", "datetime", "emoji", "html-entities", "pagebreak", "|", "goto-line", "watch", "preview", "fullscreen", "clear", "search", "|", "help", "info"],
      simple: ["undo", "redo", "|", "bold", "del", "italic", "quote", "uppercase", "lowercase", "|", "h1", "h2", "h3", "h4", "h5", "h6", "|", "list-ul", "list-ol", "hr", "|", "watch", "preview", "fullscreen", "|", "help", "info"],
      mini: ["undo", "redo", "|", "watch", "preview", "|", "help", "info"]
    }, t.defaults = {
      mode: "gfm",
      name: "",
      value: "",
      theme: "",
      editorTheme: "default",
      previewTheme: "",
      markdown: "",
      appendMarkdown: "",
      width: "100%",
      height: "100%",
      path: "./lib/",
      pluginPath: "",
      delay: 300,
      autoLoadModules: !0,
      watch: !0,
      placeholder: "Enjoy Markdown! coding now...",
      gotoLine: !0,
      codeFold: !1,
      autoHeight: !1,
      autoFocus: !0,
      autoCloseTags: !0,
      searchReplace: !0,
      syncScrolling: !0,
      readOnly: !1,
      tabSize: 4,
      indentUnit: 4,
      lineNumbers: !0,
      lineWrapping: !0,
      autoCloseBrackets: !0,
      showTrailingSpace: !0,
      matchBrackets: !0,
      indentWithTabs: !0,
      styleSelectedText: !0,
      matchWordHighlight: !0,
      styleActiveLine: !0,
      dialogLockScreen: !0,
      dialogShowMask: !0,
      dialogDraggable: !0,
      dialogMaskBgColor: "#fff",
      dialogMaskOpacity: .1,
      fontSize: "13px",
      saveHTMLToTextarea: !1,
      disabledKeyMaps: [],
      onload: function onload() {},
      onresize: function onresize() {},
      onchange: function onchange() {},
      onwatch: null,
      onunwatch: null,
      onpreviewing: function onpreviewing() {},
      onpreviewed: function onpreviewed() {},
      onfullscreen: function onfullscreen() {},
      onfullscreenExit: function onfullscreenExit() {},
      onscroll: function onscroll() {},
      onpreviewscroll: function onpreviewscroll() {},
      imageUpload: !1,
      imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
      imageUploadURL: "",
      crossDomainUpload: !1,
      uploadCallbackURL: "",
      toc: !0,
      tocm: !1,
      tocTitle: "",
      tocDropdown: !1,
      tocContainer: "",
      tocStartLevel: 1,
      htmlDecode: !1,
      pageBreak: !0,
      atLink: !0,
      emailLink: !0,
      taskList: !1,
      emoji: !1,
      tex: !1,
      flowChart: !1,
      sequenceDiagram: !1,
      previewCodeHighlight: !0,
      toolbar: !0,
      toolbarAutoFixed: !0,
      toolbarIcons: "full",
      toolbarTitles: {},
      toolbarHandlers: {
        ucwords: function ucwords() {
          return t.toolbarHandlers.ucwords;
        },
        lowercase: function lowercase() {
          return t.toolbarHandlers.lowercase;
        }
      },
      toolbarCustomIcons: {
        lowercase: '<a href="javascript:;" title="Lowercase" unselectable="on"><i class="fa" name="lowercase" style="font-size:24px;margin-top: -10px;">a</i></a>',
        ucwords: '<a href="javascript:;" title="ucwords" unselectable="on"><i class="fa" name="ucwords" style="font-size:20px;margin-top: -3px;">Aa</i></a>'
      },
      toolbarIconsClass: {
        undo: "fa-undo",
        redo: "fa-repeat",
        bold: "fa-bold",
        del: "fa-strikethrough",
        italic: "fa-italic",
        quote: "fa-quote-left",
        uppercase: "fa-font",
        h1: t.classPrefix + "bold",
        h2: t.classPrefix + "bold",
        h3: t.classPrefix + "bold",
        h4: t.classPrefix + "bold",
        h5: t.classPrefix + "bold",
        h6: t.classPrefix + "bold",
        "list-ul": "fa-list-ul",
        "list-ol": "fa-list-ol",
        hr: "fa-minus",
        link: "fa-link",
        "reference-link": "fa-anchor",
        image: "fa-picture-o",
        code: "fa-code",
        "preformatted-text": "fa-file-code-o",
        "code-block": "fa-file-code-o",
        table: "fa-table",
        datetime: "fa-clock-o",
        emoji: "fa-smile-o",
        "html-entities": "fa-copyright",
        pagebreak: "fa-newspaper-o",
        "goto-line": "fa-terminal",
        watch: "fa-eye-slash",
        unwatch: "fa-eye",
        preview: "fa-desktop",
        search: "fa-search",
        fullscreen: "fa-arrows-alt",
        clear: "fa-eraser",
        help: "fa-question-circle",
        info: "fa-info-circle"
      },
      toolbarIconTexts: {},
      lang: {
        name: "zh-cn",
        description: "开源在线Markdown编辑器<br/>Open source online Markdown editor.",
        tocTitle: "目录",
        toolbar: {
          undo: "撤销（Ctrl+Z）",
          redo: "重做（Ctrl+Y）",
          bold: "粗体",
          del: "删除线",
          italic: "斜体",
          quote: "引用",
          ucwords: "将每个单词首字母转成大写",
          uppercase: "将所选转换成大写",
          lowercase: "将所选转换成小写",
          h1: "标题1",
          h2: "标题2",
          h3: "标题3",
          h4: "标题4",
          h5: "标题5",
          h6: "标题6",
          "list-ul": "无序列表",
          "list-ol": "有序列表",
          hr: "横线",
          link: "链接",
          "reference-link": "引用链接",
          image: "添加图片",
          code: "行内代码",
          "preformatted-text": "预格式文本 / 代码块（缩进风格）",
          "code-block": "代码块（多语言风格）",
          table: "添加表格",
          datetime: "日期时间",
          emoji: "Emoji表情",
          "html-entities": "HTML实体字符",
          pagebreak: "插入分页符",
          "goto-line": "跳转到行",
          watch: "关闭实时预览",
          unwatch: "开启实时预览",
          preview: "全窗口预览HTML（按 Shift + ESC还原）",
          fullscreen: "全屏（按ESC还原）",
          clear: "清空",
          search: "搜索",
          help: "使用帮助",
          info: "关于" + t.title
        },
        buttons: {
          enter: "确定",
          cancel: "取消",
          close: "关闭"
        },
        dialog: {
          link: {
            title: "添加链接",
            url: "链接地址",
            urlTitle: "链接标题",
            urlEmpty: "错误：请填写链接地址。"
          },
          referenceLink: {
            title: "添加引用链接",
            name: "引用名称",
            url: "链接地址",
            urlId: "链接ID",
            urlTitle: "链接标题",
            nameEmpty: "错误：引用链接的名称不能为空。",
            idEmpty: "错误：请填写引用链接的ID。",
            urlEmpty: "错误：请填写引用链接的URL地址。"
          },
          image: {
            title: "添加图片",
            url: "图片地址",
            link: "图片链接",
            alt: "图片描述",
            uploadButton: "本地上传",
            imageURLEmpty: "错误：图片地址不能为空。",
            uploadFileEmpty: "错误：上传的图片不能为空。",
            formatNotAllowed: "错误：只允许上传图片文件，允许上传的图片文件格式有："
          },
          preformattedText: {
            title: "添加预格式文本或代码块",
            emptyAlert: "错误：请填写预格式文本或代码的内容。"
          },
          codeBlock: {
            title: "添加代码块",
            selectLabel: "代码语言：",
            selectDefaultText: "请选择代码语言",
            otherLanguage: "其他语言",
            unselectedLanguageAlert: "错误：请选择代码所属的语言类型。",
            codeEmptyAlert: "错误：请填写代码内容。"
          },
          htmlEntities: {
            title: "HTML 实体字符"
          },
          help: {
            title: "使用帮助"
          }
        }
      }
    }, t.classNames = {
      tex: t.classPrefix + "tex"
    }, t.dialogZindex = 99999, t.$katex = null, t.$marked = null, t.$CodeMirror = null, t.$prettyPrint = null;
    var i, o;
    t.prototype = t.fn = {
      state: {
        watching: !1,
        loaded: !1,
        preview: !1,
        fullscreen: !1
      },
      init: function init(i, o) {
        o = o || {}, "object" == _typeof(i) && (o = i);
        var r = this.classPrefix = t.classPrefix,
            n = this.settings = e.extend(!0, t.defaults, o);
        i = "object" == _typeof(i) ? n.id : i;
        var a = this.editor = e("#" + i);
        this.id = i, this.lang = n.lang;
        var s = this.classNames = {
          textarea: {
            html: r + "html-textarea",
            markdown: r + "markdown-textarea"
          }
        };
        n.pluginPath = "" === n.pluginPath ? n.path + "../plugins/" : n.pluginPath, this.state.watching = n.watch ? !0 : !1, a.hasClass("editormd") || a.addClass("editormd"), a.css({
          width: "number" == typeof n.width ? n.width + "px" : n.width,
          height: "number" == typeof n.height ? n.height + "px" : n.height
        }), n.autoHeight && a.css("height", "auto");
        var l = this.markdownTextarea = a.children("textarea");
        l.length < 1 && (a.append("<textarea></textarea>"), l = this.markdownTextarea = a.children("textarea")), l.addClass(s.textarea.markdown).attr("placeholder", n.placeholder), ("undefined" == typeof l.attr("name") || "" === l.attr("name")) && l.attr("name", "" !== n.name ? n.name : i + "-markdown-doc");
        var c = [n.readOnly ? "" : '<a href="javascript:;" class="fa fa-close ' + r + 'preview-close-btn"></a>', n.saveHTMLToTextarea ? '<textarea class="' + s.textarea.html + '" name="' + i + '-html-code"></textarea>' : "", '<div class="' + r + 'preview"><div class="markdown-body ' + r + 'preview-container"></div></div>', '<div class="' + r + 'container-mask" style="display:block;"></div>', '<div class="' + r + 'mask"></div>'].join("\n");
        return a.append(c).addClass(r + "vertical"), "" !== n.theme && a.addClass(r + "theme-" + n.theme), this.mask = a.children("." + r + "mask"), this.containerMask = a.children("." + r + "container-mask"), "" !== n.markdown && l.val(n.markdown), "" !== n.appendMarkdown && l.val(l.val() + n.appendMarkdown), this.htmlTextarea = a.children("." + s.textarea.html), this.preview = a.children("." + r + "preview"), this.previewContainer = this.preview.children("." + r + "preview-container"), "" !== n.previewTheme && this.preview.addClass(r + "preview-theme-" + n.previewTheme),  true && ("undefined" != typeof katex && (t.$katex = katex), n.searchReplace && !n.readOnly && (t.loadCSS(n.path + "codemirror/addon/dialog/dialog"), t.loadCSS(n.path + "codemirror/addon/search/matchesonscrollbar"))),  true ? ("undefined" != typeof CodeMirror && (t.$CodeMirror = CodeMirror), "undefined" != typeof marked && (t.$marked = marked), this.setCodeMirror().setToolbar().loadedDisplay()) : 0, this;
      },
      loadQueues: function loadQueues() {
        var e = this,
            i = this.settings,
            o = i.path,
            r = function r() {
          return t.isIE8 ? void e.loadedDisplay() : void (i.flowChart || i.sequenceDiagram ? t.loadScript(o + "raphael.min", function () {
            t.loadScript(o + "underscore.min", function () {
              !i.flowChart && i.sequenceDiagram ? t.loadScript(o + "sequence-diagram.min", function () {
                e.loadedDisplay();
              }) : i.flowChart && !i.sequenceDiagram ? t.loadScript(o + "flowchart.min", function () {
                t.loadScript(o + "jquery.flowchart.min", function () {
                  e.loadedDisplay();
                });
              }) : i.flowChart && i.sequenceDiagram && t.loadScript(o + "flowchart.min", function () {
                t.loadScript(o + "jquery.flowchart.min", function () {
                  t.loadScript(o + "sequence-diagram.min", function () {
                    e.loadedDisplay();
                  });
                });
              });
            });
          }) : e.loadedDisplay());
        };

        return t.loadCSS(o + "codemirror/codemirror.min"), i.searchReplace && !i.readOnly && (t.loadCSS(o + "codemirror/addon/dialog/dialog"), t.loadCSS(o + "codemirror/addon/search/matchesonscrollbar")), i.codeFold && t.loadCSS(o + "codemirror/addon/fold/foldgutter"), t.loadScript(o + "codemirror/codemirror.min", function () {
          t.$CodeMirror = CodeMirror, t.loadScript(o + "codemirror/modes.min", function () {
            t.loadScript(o + "codemirror/addons.min", function () {
              return e.setCodeMirror(), "gfm" !== i.mode && "markdown" !== i.mode ? (e.loadedDisplay(), !1) : (e.setToolbar(), void t.loadScript(o + "marked.min", function () {
                t.$marked = marked, i.previewCodeHighlight ? t.loadScript(o + "prettify.min", function () {
                  r();
                }) : r();
              }));
            });
          });
        }), this;
      },
      setTheme: function setTheme(e) {
        var t = this.editor,
            i = this.settings.theme,
            o = this.classPrefix + "theme-";
        return t.removeClass(o + i).addClass(o + e), this.settings.theme = e, this;
      },
      setEditorTheme: function setEditorTheme(e) {
        var i = this.settings;
        return i.editorTheme = e, "default" !== e && t.loadCSS(i.path + "codemirror/theme/" + i.editorTheme), this.cm.setOption("theme", e), this;
      },
      setCodeMirrorTheme: function setCodeMirrorTheme(e) {
        return this.setEditorTheme(e), this;
      },
      setPreviewTheme: function setPreviewTheme(e) {
        var t = this.preview,
            i = this.settings.previewTheme,
            o = this.classPrefix + "preview-theme-";
        return t.removeClass(o + i).addClass(o + e), this.settings.previewTheme = e, this;
      },
      setCodeMirror: function setCodeMirror() {
        var e = this.settings,
            i = this.editor;
        "default" !== e.editorTheme && t.loadCSS(e.path + "codemirror/theme/" + e.editorTheme);
        var o = {
          mode: e.mode,
          theme: e.editorTheme,
          tabSize: e.tabSize,
          dragDrop: !1,
          autofocus: e.autoFocus,
          autoCloseTags: e.autoCloseTags,
          readOnly: e.readOnly ? "nocursor" : !1,
          indentUnit: e.indentUnit,
          lineNumbers: e.lineNumbers,
          lineWrapping: e.lineWrapping,
          extraKeys: {
            "Ctrl-Q": function CtrlQ(e) {
              e.foldCode(e.getCursor());
            }
          },
          foldGutter: e.codeFold,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          matchBrackets: e.matchBrackets,
          indentWithTabs: e.indentWithTabs,
          styleActiveLine: e.styleActiveLine,
          styleSelectedText: e.styleSelectedText,
          autoCloseBrackets: e.autoCloseBrackets,
          showTrailingSpace: e.showTrailingSpace,
          highlightSelectionMatches: e.matchWordHighlight ? {
            showToken: "onselected" === e.matchWordHighlight ? !1 : /\w/
          } : !1
        };
        return this.codeEditor = this.cm = t.$CodeMirror.fromTextArea(this.markdownTextarea[0], o), this.codeMirror = this.cmElement = i.children(".CodeMirror"), "" !== e.value && this.cm.setValue(e.value), this.codeMirror.css({
          fontSize: e.fontSize,
          width: e.watch ? "50%" : "100%"
        }), e.autoHeight && (this.codeMirror.css("height", "auto"), this.cm.setOption("viewportMargin", 1 / 0)), e.lineNumbers || this.codeMirror.find(".CodeMirror-gutters").css("border-right", "none"), this;
      },
      getCodeMirrorOption: function getCodeMirrorOption(e) {
        return this.cm.getOption(e);
      },
      setCodeMirrorOption: function setCodeMirrorOption(e, t) {
        return this.cm.setOption(e, t), this;
      },
      addKeyMap: function addKeyMap(e, t) {
        return this.cm.addKeyMap(e, t), this;
      },
      removeKeyMap: function removeKeyMap(e) {
        return this.cm.removeKeyMap(e), this;
      },
      gotoLine: function gotoLine(t) {
        var i = this.settings;
        if (!i.gotoLine) return this;
        var o = this.cm,
            r = (this.editor, o.lineCount()),
            n = this.preview;
        if ("string" == typeof t && ("last" === t && (t = r), "first" === t && (t = 1)), "number" != typeof t) return alert("Error: The line number must be an integer."), this;
        if (t = parseInt(t) - 1, t > r) return alert("Error: The line number range 1-" + r), this;
        o.setCursor({
          line: t,
          ch: 0
        });
        var a = o.getScrollInfo(),
            s = a.clientHeight,
            l = o.charCoords({
          line: t,
          ch: 0
        }, "local");

        if (o.scrollTo(null, (l.top + l.bottom - s) / 2), i.watch) {
          var c = this.codeMirror.find(".CodeMirror-scroll")[0],
              h = e(c).height(),
              d = c.scrollTop,
              u = d / c.scrollHeight;
          n.scrollTop(0 === d ? 0 : d + h >= c.scrollHeight - 16 ? n[0].scrollHeight : n[0].scrollHeight * u);
        }

        return o.focus(), this;
      },
      extend: function extend() {
        return "undefined" != typeof arguments[1] && ("function" == typeof arguments[1] && (arguments[1] = e.proxy(arguments[1], this)), this[arguments[0]] = arguments[1]), "object" == _typeof(arguments[0]) && "undefined" == typeof arguments[0].length && e.extend(!0, this, arguments[0]), this;
      },
      set: function set(t, i) {
        return "undefined" != typeof i && "function" == typeof i && (i = e.proxy(i, this)), this[t] = i, this;
      },
      config: function config(t, i) {
        var o = this.settings;
        return "object" == _typeof(t) && (o = e.extend(!0, o, t)), "string" == typeof t && (o[t] = i), this.settings = o, this.recreate(), this;
      },
      on: function on(t, i) {
        var o = this.settings;
        return "undefined" != typeof o["on" + t] && (o["on" + t] = e.proxy(i, this)), this;
      },
      off: function off(e) {
        var t = this.settings;
        return "undefined" != typeof t["on" + e] && (t["on" + e] = function () {}), this;
      },
      showToolbar: function showToolbar(t) {
        var i = this.settings;
        return i.readOnly ? this : (i.toolbar && (this.toolbar.length < 1 || "" === this.toolbar.find("." + this.classPrefix + "menu").html()) && this.setToolbar(), i.toolbar = !0, this.toolbar.show(), this.resize(), e.proxy(t || function () {}, this)(), this);
      },
      hideToolbar: function hideToolbar(t) {
        var i = this.settings;
        return i.toolbar = !1, this.toolbar.hide(), this.resize(), e.proxy(t || function () {}, this)(), this;
      },
      setToolbarAutoFixed: function setToolbarAutoFixed(t) {
        var i = this.state,
            o = this.editor,
            r = this.toolbar,
            n = this.settings;
        "undefined" != typeof t && (n.toolbarAutoFixed = t);

        var a = function a() {
          var t = e(window),
              i = t.scrollTop();
          return n.toolbarAutoFixed ? void r.css(i - o.offset().top > 10 && i < o.height() ? {
            position: "fixed",
            width: o.width() + "px",
            left: (t.width() - o.width()) / 2 + "px"
          } : {
            position: "absolute",
            width: "100%",
            left: 0
          }) : !1;
        };

        return !i.fullscreen && !i.preview && n.toolbar && n.toolbarAutoFixed && e(window).bind("scroll", a), this;
      },
      setToolbar: function setToolbar() {
        var e = this.settings;
        if (e.readOnly) return this;
        var i = this.editor,
            o = (this.preview, this.classPrefix),
            r = this.toolbar = i.children("." + o + "toolbar");

        if (e.toolbar && r.length < 1) {
          var n = '<div class="' + o + 'toolbar"><div class="' + o + 'toolbar-container"><ul class="' + o + 'menu"></ul></div></div>';
          i.append(n), r = this.toolbar = i.children("." + o + "toolbar");
        }

        if (!e.toolbar) return r.hide(), this;
        r.show();

        for (var a = "function" == typeof e.toolbarIcons ? e.toolbarIcons() : "string" == typeof e.toolbarIcons ? t.toolbarModes[e.toolbarIcons] : e.toolbarIcons, s = r.find("." + this.classPrefix + "menu"), l = "", c = !1, h = 0, d = a.length; d > h; h++) {
          var u = a[h];
          if ("||" === u) c = !0;else if ("|" === u) l += '<li class="divider" unselectable="on">|</li>';else {
            var f = /h(\d)/.test(u),
                g = u;
            "watch" !== u || e.watch || (g = "unwatch");
            var p = e.lang.toolbar[g],
                m = e.toolbarIconTexts[g],
                w = e.toolbarIconsClass[g];
            p = "undefined" == typeof p ? "" : p, m = "undefined" == typeof m ? "" : m, w = "undefined" == typeof w ? "" : w;
            var v = c ? '<li class="pull-right">' : "<li>";
            "undefined" != typeof e.toolbarCustomIcons[u] && "function" != typeof e.toolbarCustomIcons[u] ? v += e.toolbarCustomIcons[u] : (v += '<a href="javascript:;" title="' + p + '" unselectable="on">', v += '<i class="fa ' + w + '" name="' + u + '" unselectable="on">' + (f ? u.toUpperCase() : "" === w ? m : "") + "</i>", v += "</a>"), v += "</li>", l = c ? v + l : l + v;
          }
        }

        return s.html(l), s.find('[title="Lowercase"]').attr("title", e.lang.toolbar.lowercase), s.find('[title="ucwords"]').attr("title", e.lang.toolbar.ucwords), this.setToolbarHandler(), this.setToolbarAutoFixed(), this;
      },
      dialogLockScreen: function dialogLockScreen() {
        return e.proxy(t.dialogLockScreen, this)(), this;
      },
      dialogShowMask: function dialogShowMask(i) {
        return e.proxy(t.dialogShowMask, this)(i), this;
      },
      getToolbarHandles: function getToolbarHandles(e) {
        var i = this.toolbarHandlers = t.toolbarHandlers;
        return e && "undefined" != typeof toolbarIconHandlers[e] ? i[e] : i;
      },
      setToolbarHandler: function setToolbarHandler() {
        var i = this,
            o = this.settings;
        if (!o.toolbar || o.readOnly) return this;
        var r = this.toolbar,
            n = this.cm,
            a = this.classPrefix,
            s = this.toolbarIcons = r.find("." + a + "menu > li > a"),
            l = this.getToolbarHandles();
        return s.bind(t.mouseOrTouch("click", "touchend"), function (t) {
          var r = e(this).children(".fa"),
              a = r.attr("name"),
              s = n.getCursor(),
              c = n.getSelection();
          return "" !== a ? (i.activeIcon = r, "undefined" != typeof l[a] ? e.proxy(l[a], i)(n) : "undefined" != typeof o.toolbarHandlers[a] && e.proxy(o.toolbarHandlers[a], i)(n, r, s, c), "link" !== a && "reference-link" !== a && "image" !== a && "code-block" !== a && "preformatted-text" !== a && "watch" !== a && "preview" !== a && "search" !== a && "fullscreen" !== a && "info" !== a && n.focus(), !1) : void 0;
        }), this;
      },
      createDialog: function createDialog(i) {
        return e.proxy(t.createDialog, this)(i);
      },
      createInfoDialog: function createInfoDialog() {
        var e = this,
            i = this.editor,
            o = this.classPrefix,
            r = ['<div class="' + o + "dialog " + o + 'dialog-info" style="">', '<div class="' + o + 'dialog-container">', '<h1><i class="editormd-logo editormd-logo-lg editormd-logo-color"></i> ' + t.title + "<small>v" + t.version + "</small></h1>", "<p>" + this.lang.description + "</p>", '<p style="margin: 10px 0 20px 0;"><a href="' + t.homePage + '" target="_blank">' + t.homePage + ' <i class="fa fa-external-link"></i></a></p>', '<p style="font-size: 0.85em;">Copyright &copy; 2015 <a href="https://github.com/pandao" target="_blank" class="hover-link">Pandao</a>, The <a href="https://github.com/pandao/editor.md/blob/master/LICENSE" target="_blank" class="hover-link">MIT</a> License.</p>', "</div>", '<a href="javascript:;" class="fa fa-close ' + o + 'dialog-close"></a>', "</div>"].join("\n");
        i.append(r);
        var n = this.infoDialog = i.children("." + o + "dialog-info");
        return n.find("." + o + "dialog-close").bind(t.mouseOrTouch("click", "touchend"), function () {
          e.hideInfoDialog();
        }), n.css("border", t.isIE8 ? "1px solid #ddd" : "").css("z-index", t.dialogZindex).show(), this.infoDialogPosition(), this;
      },
      infoDialogPosition: function infoDialogPosition() {
        var t = this.infoDialog,
            i = function i() {
          t.css({
            top: (e(window).height() - t.height()) / 2 + "px",
            left: (e(window).width() - t.width()) / 2 + "px"
          });
        };

        return i(), e(window).resize(i), this;
      },
      showInfoDialog: function showInfoDialog() {
        e("html,body").css("overflow-x", "hidden");
        var i = this.editor,
            o = this.settings,
            r = this.infoDialog = i.children("." + this.classPrefix + "dialog-info");
        return r.length < 1 && this.createInfoDialog(), this.lockScreen(!0), this.mask.css({
          opacity: o.dialogMaskOpacity,
          backgroundColor: o.dialogMaskBgColor
        }).show(), r.css("z-index", t.dialogZindex).show(), this.infoDialogPosition(), this;
      },
      hideInfoDialog: function hideInfoDialog() {
        return e("html,body").css("overflow-x", ""), this.infoDialog.hide(), this.mask.hide(), this.lockScreen(!1), this;
      },
      lockScreen: function lockScreen(e) {
        return t.lockScreen(e), this.resize(), this;
      },
      recreate: function recreate() {
        var e = this.editor,
            t = this.settings;
        return this.codeMirror.remove(), this.setCodeMirror(), t.readOnly || (e.find(".editormd-dialog").length > 0 && e.find(".editormd-dialog").remove(), t.toolbar && (this.getToolbarHandles(), this.setToolbar())), this.loadedDisplay(!0), this;
      },
      previewCodeHighlight: function previewCodeHighlight() {
        var e = this.settings,
            t = this.previewContainer;
        return e.previewCodeHighlight && (t.find("pre").addClass("prettyprint linenums"), "undefined" != typeof prettyPrint && prettyPrint()), this;
      },
      katexRender: function katexRender() {
        return null === i ? this : (this.previewContainer.find("." + t.classNames.tex).each(function () {
          var i = e(this);
          t.$katex.render(i.text(), i[0]), i.find(".katex").css("font-size", "1.6em");
        }), this);
      },
      flowChartAndSequenceDiagramRender: function flowChartAndSequenceDiagramRender() {
        var i = this,
            r = this.settings,
            n = this.previewContainer;
        if (t.isIE8) return this;

        if (r.flowChart) {
          if (null === o) return this;
          n.find(".flowchart").flowChart();
        }

        r.sequenceDiagram && n.find(".sequence-diagram").sequenceDiagram({
          theme: "simple"
        });
        var a = i.preview,
            s = i.codeMirror,
            l = s.find(".CodeMirror-scroll"),
            c = l.height(),
            h = l.scrollTop(),
            d = h / l[0].scrollHeight,
            u = 0;
        a.find(".markdown-toc-list").each(function () {
          u += e(this).height();
        });
        var f = a.find(".editormd-toc-menu").height();
        return f = f ? f : 0, a.scrollTop(0 === h ? 0 : h + c >= l[0].scrollHeight - 16 ? a[0].scrollHeight : (a[0].scrollHeight + u + f) * d), this;
      },
      registerKeyMaps: function registerKeyMaps(i) {
        var o = this,
            r = this.cm,
            n = this.settings,
            a = t.toolbarHandlers,
            s = n.disabledKeyMaps;

        if (i = i || null) {
          for (var l in i) {
            if (e.inArray(l, s) < 0) {
              var c = {};
              c[l] = i[l], r.addKeyMap(i);
            }
          }
        } else {
          for (var h in t.keyMaps) {
            var d = t.keyMaps[h],
                u = "string" == typeof d ? e.proxy(a[d], o) : e.proxy(d, o);

            if (e.inArray(h, ["F9", "F10", "F11"]) < 0 && e.inArray(h, s) < 0) {
              var f = {};
              f[h] = u, r.addKeyMap(f);
            }
          }

          e(window).keydown(function (t) {
            var i = {
              120: "F9",
              121: "F10",
              122: "F11"
            };
            if (e.inArray(i[t.keyCode], s) < 0) switch (t.keyCode) {
              case 120:
                return e.proxy(a.watch, o)(), !1;

              case 121:
                return e.proxy(a.preview, o)(), !1;

              case 122:
                return e.proxy(a.fullscreen, o)(), !1;
            }
          });
        }

        return this;
      },
      bindScrollEvent: function bindScrollEvent() {
        var i = this,
            o = this.preview,
            r = this.settings,
            n = this.codeMirror,
            a = t.mouseOrTouch;
        if (!r.syncScrolling) return this;

        var s = function s() {
          n.find(".CodeMirror-scroll").bind(a("scroll", "touchmove"), function (t) {
            var n = e(this).height(),
                a = e(this).scrollTop(),
                s = a / e(this)[0].scrollHeight,
                l = 0;
            o.find(".markdown-toc-list").each(function () {
              l += e(this).height();
            });
            var c = o.find(".editormd-toc-menu").height();
            c = c ? c : 0, o.scrollTop(0 === a ? 0 : a + n >= e(this)[0].scrollHeight - 16 ? o[0].scrollHeight : (o[0].scrollHeight + l + c) * s), e.proxy(r.onscroll, i)(t);
          });
        },
            l = function l() {
          n.find(".CodeMirror-scroll").unbind(a("scroll", "touchmove"));
        },
            c = function c() {
          o.bind(a("scroll", "touchmove"), function (t) {
            var o = e(this).height(),
                a = e(this).scrollTop(),
                s = a / e(this)[0].scrollHeight,
                l = n.find(".CodeMirror-scroll");
            l.scrollTop(0 === a ? 0 : a + o >= e(this)[0].scrollHeight ? l[0].scrollHeight : l[0].scrollHeight * s), e.proxy(r.onpreviewscroll, i)(t);
          });
        },
            h = function h() {
          o.unbind(a("scroll", "touchmove"));
        };

        return n.bind({
          mouseover: s,
          mouseout: l,
          touchstart: s,
          touchend: l
        }), "single" === r.syncScrolling ? this : (o.bind({
          mouseover: c,
          mouseout: h,
          touchstart: c,
          touchend: h
        }), this);
      },
      bindChangeEvent: function bindChangeEvent() {
        var e = this,
            t = this.cm,
            o = this.settings;
        return o.syncScrolling ? (t.on("change", function (t, r) {
          o.watch && e.previewContainer.css("padding", o.autoHeight ? "20px 20px 50px 40px" : "20px"), i = setTimeout(function () {
            clearTimeout(i), e.save(), i = null;
          }, o.delay);
        }), this) : this;
      },
      loadedDisplay: function loadedDisplay(t) {
        t = t || !1;
        var i = this,
            o = this.editor,
            r = this.preview,
            n = this.settings;
        return this.containerMask.hide(), this.save(), n.watch && r.show(), o.data("oldWidth", o.width()).data("oldHeight", o.height()), this.resize(), this.registerKeyMaps(), e(window).resize(function () {
          i.resize();
        }), this.bindScrollEvent().bindChangeEvent(), t || e.proxy(n.onload, this)(), this.state.loaded = !0, this;
      },
      width: function width(e) {
        return this.editor.css("width", "number" == typeof e ? e + "px" : e), this.resize(), this;
      },
      height: function height(e) {
        return this.editor.css("height", "number" == typeof e ? e + "px" : e), this.resize(), this;
      },
      resize: function resize(t, i) {
        t = t || null, i = i || null;
        var o = this.state,
            r = this.editor,
            n = this.preview,
            a = this.toolbar,
            s = this.settings,
            l = this.codeMirror;
        if (t && r.css("width", "number" == typeof t ? t + "px" : t), !s.autoHeight || o.fullscreen || o.preview ? (i && r.css("height", "number" == typeof i ? i + "px" : i), o.fullscreen && r.height(e(window).height()), s.toolbar && !s.readOnly ? l.css("margin-top", a.height() + 1).height(r.height() - a.height()) : l.css("margin-top", 0).height(r.height())) : (r.css("height", "auto"), l.css("height", "auto")), s.watch) {
          if (l.width(r.width() / 2), n.width(o.preview ? r.width() : r.width() / 2), this.previewContainer.css("padding", s.autoHeight ? "20px 20px 50px 40px" : "20px"), s.toolbar && !s.readOnly ? n.css("top", a.height() + 1) : n.css("top", 0), !s.autoHeight || o.fullscreen || o.preview) {
            var c = s.toolbar && !s.readOnly ? r.height() - a.height() : r.height();
            n.height(c);
          } else n.height("");
        } else l.width(r.width()), n.hide();
        return o.loaded && e.proxy(s.onresize, this)(), this;
      },
      save: function save() {
        if (null === i) return this;
        var r = this,
            n = this.state,
            a = this.settings,
            s = this.cm,
            l = s.getValue(),
            c = this.previewContainer;
        if ("gfm" !== a.mode && "markdown" !== a.mode) return this.markdownTextarea.val(l), this;
        var h = t.$marked,
            d = this.markdownToC = [],
            u = this.markedRendererOptions = {
          toc: a.toc,
          tocm: a.tocm,
          tocStartLevel: a.tocStartLevel,
          pageBreak: a.pageBreak,
          taskList: a.taskList,
          emoji: a.emoji,
          tex: a.tex,
          atLink: a.atLink,
          emailLink: a.emailLink,
          flowChart: a.flowChart,
          sequenceDiagram: a.sequenceDiagram,
          previewCodeHighlight: a.previewCodeHighlight
        },
            f = this.markedOptions = {
          renderer: t.markedRenderer(d, u),
          gfm: !0,
          tables: !0,
          breaks: !0,
          pedantic: !1,
          sanitize: a.htmlDecode ? !1 : !0,
          smartLists: !0,
          smartypants: !0
        };
        h.setOptions(f);
        var g = t.$marked(l, f);

        if (g = t.filterHTMLTags(g, a.htmlDecode), this.markdownTextarea.text(l), s.save(), a.saveHTMLToTextarea && this.htmlTextarea.text(g), a.watch || !a.watch && n.preview) {
          if (c.html(g), this.previewCodeHighlight(), a.toc) {
            var p = "" === a.tocContainer ? c : e(a.tocContainer),
                m = p.find("." + this.classPrefix + "toc-menu");
            p.attr("previewContainer", "" === a.tocContainer ? "true" : "false"), "" !== a.tocContainer && m.length > 0 && m.remove(), t.markdownToCRenderer(d, p, a.tocDropdown, a.tocStartLevel), (a.tocDropdown || p.find("." + this.classPrefix + "toc-menu").length > 0) && t.tocDropdownMenu(p, "" !== a.tocTitle ? a.tocTitle : this.lang.tocTitle), "" !== a.tocContainer && c.find(".markdown-toc").css("border", "none");
          }

          a.tex && (!t.kaTeXLoaded && a.autoLoadModules ? t.loadKaTeX(function () {
            t.$katex = katex, t.kaTeXLoaded = !0, r.katexRender();
          }) : (t.$katex = katex, this.katexRender())), (a.flowChart || a.sequenceDiagram) && (o = setTimeout(function () {
            clearTimeout(o), r.flowChartAndSequenceDiagramRender(), o = null;
          }, 10)), n.loaded && e.proxy(a.onchange, this)();
        }

        return this;
      },
      focus: function focus() {
        return this.cm.focus(), this;
      },
      setCursor: function setCursor(e) {
        return this.cm.setCursor(e), this;
      },
      getCursor: function getCursor() {
        return this.cm.getCursor();
      },
      setSelection: function setSelection(e, t) {
        return this.cm.setSelection(e, t), this;
      },
      getSelection: function getSelection() {
        return this.cm.getSelection();
      },
      setSelections: function setSelections(e) {
        return this.cm.setSelections(e), this;
      },
      getSelections: function getSelections() {
        return this.cm.getSelections();
      },
      replaceSelection: function replaceSelection(e) {
        return this.cm.replaceSelection(e), this;
      },
      insertValue: function insertValue(e) {
        return this.replaceSelection(e), this;
      },
      appendMarkdown: function appendMarkdown(e) {
        var t = (this.settings, this.cm);
        return t.setValue(t.getValue() + e), this;
      },
      setMarkdown: function setMarkdown(e) {
        return this.cm.setValue(e || this.settings.markdown), this;
      },
      getMarkdown: function getMarkdown() {
        return this.cm.getValue();
      },
      getValue: function getValue() {
        return this.cm.getValue();
      },
      setValue: function setValue(e) {
        return this.cm.setValue(e), this;
      },
      clear: function clear() {
        return this.cm.setValue(""), this;
      },
      getHTML: function getHTML() {
        return this.settings.saveHTMLToTextarea ? this.htmlTextarea.val() : (alert("Error: settings.saveHTMLToTextarea == false"), !1);
      },
      getTextareaSavedHTML: function getTextareaSavedHTML() {
        return this.getHTML();
      },
      getPreviewedHTML: function getPreviewedHTML() {
        return this.settings.watch ? this.previewContainer.html() : (alert("Error: settings.watch == false"), !1);
      },
      watch: function watch(t) {
        var o = this.settings;
        if (e.inArray(o.mode, ["gfm", "markdown"]) < 0) return this;

        if (this.state.watching = o.watch = !0, this.preview.show(), this.toolbar) {
          var r = o.toolbarIconsClass.watch,
              n = o.toolbarIconsClass.unwatch,
              a = this.toolbar.find(".fa[name=watch]");
          a.parent().attr("title", o.lang.toolbar.watch), a.removeClass(n).addClass(r);
        }

        return this.codeMirror.css("border-right", "1px solid #ddd").width(this.editor.width() / 2), i = 0, this.save().resize(), o.onwatch || (o.onwatch = t || function () {}), e.proxy(o.onwatch, this)(), this;
      },
      unwatch: function unwatch(t) {
        var i = this.settings;

        if (this.state.watching = i.watch = !1, this.preview.hide(), this.toolbar) {
          var o = i.toolbarIconsClass.watch,
              r = i.toolbarIconsClass.unwatch,
              n = this.toolbar.find(".fa[name=watch]");
          n.parent().attr("title", i.lang.toolbar.unwatch), n.removeClass(o).addClass(r);
        }

        return this.codeMirror.css("border-right", "none").width(this.editor.width()), this.resize(), i.onunwatch || (i.onunwatch = t || function () {}), e.proxy(i.onunwatch, this)(), this;
      },
      show: function show(t) {
        t = t || function () {};

        var i = this;
        return this.editor.show(0, function () {
          e.proxy(t, i)();
        }), this;
      },
      hide: function hide(t) {
        t = t || function () {};

        var i = this;
        return this.editor.hide(0, function () {
          e.proxy(t, i)();
        }), this;
      },
      previewing: function previewing() {
        var i = this,
            o = this.editor,
            r = this.preview,
            n = this.toolbar,
            a = this.settings,
            s = this.codeMirror,
            l = this.previewContainer;
        if (e.inArray(a.mode, ["gfm", "markdown"]) < 0) return this;
        a.toolbar && n && (n.toggle(), n.find(".fa[name=preview]").toggleClass("active")), s.toggle();

        var c = function c(e) {
          e.shiftKey && 27 === e.keyCode && i.previewed();
        };

        "none" === s.css("display") ? (this.state.preview = !0, this.state.fullscreen && r.css("background", "#fff"), o.find("." + this.classPrefix + "preview-close-btn").show().bind(t.mouseOrTouch("click", "touchend"), function () {
          i.previewed();
        }), a.watch ? l.css("padding", "") : this.save(), l.addClass(this.classPrefix + "preview-active"), r.show().css({
          position: "",
          top: 0,
          width: o.width(),
          height: a.autoHeight && !this.state.fullscreen ? "auto" : o.height()
        }), this.state.loaded && e.proxy(a.onpreviewing, this)(), e(window).bind("keyup", c)) : (e(window).unbind("keyup", c), this.previewed());
      },
      previewed: function previewed() {
        var i = this.editor,
            o = this.preview,
            r = this.toolbar,
            n = this.settings,
            a = this.previewContainer,
            s = i.find("." + this.classPrefix + "preview-close-btn");
        return this.state.preview = !1, this.codeMirror.show(), n.toolbar && r.show(), o[n.watch ? "show" : "hide"](), s.hide().unbind(t.mouseOrTouch("click", "touchend")), a.removeClass(this.classPrefix + "preview-active"), n.watch && a.css("padding", "20px"), o.css({
          background: null,
          position: "absolute",
          width: i.width() / 2,
          height: n.autoHeight && !this.state.fullscreen ? "auto" : i.height() - r.height(),
          top: n.toolbar ? r.height() : 0
        }), this.state.loaded && e.proxy(n.onpreviewed, this)(), this;
      },
      fullscreen: function fullscreen() {
        var t = this,
            i = this.state,
            o = this.editor,
            r = (this.preview, this.toolbar),
            n = this.settings,
            a = this.classPrefix + "fullscreen";
        r && r.find(".fa[name=fullscreen]").parent().toggleClass("active");

        var s = function s(e) {
          e.shiftKey || 27 !== e.keyCode || i.fullscreen && t.fullscreenExit();
        };

        return o.hasClass(a) ? (e(window).unbind("keyup", s), this.fullscreenExit()) : (i.fullscreen = !0, e("html,body").css("overflow", "hidden"), o.css({
          width: e(window).width(),
          height: e(window).height()
        }).addClass(a), this.resize(), e.proxy(n.onfullscreen, this)(), e(window).bind("keyup", s)), this;
      },
      fullscreenExit: function fullscreenExit() {
        var t = this.editor,
            i = this.settings,
            o = this.toolbar,
            r = this.classPrefix + "fullscreen";
        return this.state.fullscreen = !1, o && o.find(".fa[name=fullscreen]").parent().removeClass("active"), e("html,body").css("overflow", ""), t.css({
          width: t.data("oldWidth"),
          height: t.data("oldHeight")
        }).removeClass(r), this.resize(), e.proxy(i.onfullscreenExit, this)(), this;
      },
      executePlugin: function executePlugin(i, o) {
        var r = this,
            n = this.cm,
            a = this.settings;
        return o = a.pluginPath + o,  true ? "undefined" == typeof this[i] ? (alert("Error: " + i + " plugin is not found, you are not load this plugin."), this) : (this[i](n), this) : (0);
      },
      search: function search(e) {
        var t = this.settings;
        return t.searchReplace ? (t.readOnly || this.cm.execCommand(e || "find"), this) : (alert("Error: settings.searchReplace == false"), this);
      },
      searchReplace: function searchReplace() {
        return this.search("replace"), this;
      },
      searchReplaceAll: function searchReplaceAll() {
        return this.search("replaceAll"), this;
      }
    }, t.fn.init.prototype = t.fn, t.dialogLockScreen = function () {
      var t = this.settings || {
        dialogLockScreen: !0
      };
      t.dialogLockScreen && (e("html,body").css("overflow", "hidden"), this.resize());
    }, t.dialogShowMask = function (t) {
      var i = this.editor,
          o = this.settings || {
        dialogShowMask: !0
      };
      t.css({
        top: (e(window).height() - t.height()) / 2 + "px",
        left: (e(window).width() - t.width()) / 2 + "px"
      }), o.dialogShowMask && i.children("." + this.classPrefix + "mask").css("z-index", parseInt(t.css("z-index")) - 1).show();
    }, t.toolbarHandlers = {
      undo: function undo() {
        this.cm.undo();
      },
      redo: function redo() {
        this.cm.redo();
      },
      bold: function bold() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        e.replaceSelection("**" + i + "**"), "" === i && e.setCursor(t.line, t.ch + 2);
      },
      del: function del() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        e.replaceSelection("~~" + i + "~~"), "" === i && e.setCursor(t.line, t.ch + 2);
      },
      italic: function italic() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        e.replaceSelection("*" + i + "*"), "" === i && e.setCursor(t.line, t.ch + 1);
      },
      quote: function quote() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        0 !== t.ch ? (e.setCursor(t.line, 0), e.replaceSelection("> " + i), e.setCursor(t.line, t.ch + 2)) : e.replaceSelection("> " + i);
      },
      ucfirst: function ucfirst() {
        var e = this.cm,
            i = e.getSelection(),
            o = e.listSelections();
        e.replaceSelection(t.firstUpperCase(i)), e.setSelections(o);
      },
      ucwords: function ucwords() {
        var e = this.cm,
            i = e.getSelection(),
            o = e.listSelections();
        e.replaceSelection(t.wordsFirstUpperCase(i)), e.setSelections(o);
      },
      uppercase: function uppercase() {
        var e = this.cm,
            t = e.getSelection(),
            i = e.listSelections();
        e.replaceSelection(t.toUpperCase()), e.setSelections(i);
      },
      lowercase: function lowercase() {
        var e = this.cm,
            t = (e.getCursor(), e.getSelection()),
            i = e.listSelections();
        e.replaceSelection(t.toLowerCase()), e.setSelections(i);
      },
      h1: function h1() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        0 !== t.ch ? (e.setCursor(t.line, 0), e.replaceSelection("# " + i), e.setCursor(t.line, t.ch + 2)) : e.replaceSelection("# " + i);
      },
      h2: function h2() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        0 !== t.ch ? (e.setCursor(t.line, 0), e.replaceSelection("## " + i), e.setCursor(t.line, t.ch + 3)) : e.replaceSelection("## " + i);
      },
      h3: function h3() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        0 !== t.ch ? (e.setCursor(t.line, 0), e.replaceSelection("### " + i), e.setCursor(t.line, t.ch + 4)) : e.replaceSelection("### " + i);
      },
      h4: function h4() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        0 !== t.ch ? (e.setCursor(t.line, 0), e.replaceSelection("#### " + i), e.setCursor(t.line, t.ch + 5)) : e.replaceSelection("#### " + i);
      },
      h5: function h5() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        0 !== t.ch ? (e.setCursor(t.line, 0), e.replaceSelection("##### " + i), e.setCursor(t.line, t.ch + 6)) : e.replaceSelection("##### " + i);
      },
      h6: function h6() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        0 !== t.ch ? (e.setCursor(t.line, 0), e.replaceSelection("###### " + i), e.setCursor(t.line, t.ch + 7)) : e.replaceSelection("###### " + i);
      },
      "list-ul": function listUl() {
        var e = this.cm,
            t = (e.getCursor(), e.getSelection());
        if ("" === t) e.replaceSelection("- " + t);else {
          for (var i = t.split("\n"), o = 0, r = i.length; r > o; o++) {
            i[o] = "" === i[o] ? "" : "- " + i[o];
          }

          e.replaceSelection(i.join("\n"));
        }
      },
      "list-ol": function listOl() {
        var e = this.cm,
            t = (e.getCursor(), e.getSelection());
        if ("" === t) e.replaceSelection("1. " + t);else {
          for (var i = t.split("\n"), o = 0, r = i.length; r > o; o++) {
            i[o] = "" === i[o] ? "" : o + 1 + ". " + i[o];
          }

          e.replaceSelection(i.join("\n"));
        }
      },
      hr: function hr() {
        {
          var e = this.cm,
              t = e.getCursor();
          e.getSelection();
        }
        e.replaceSelection((0 !== t.ch ? "\n\n" : "\n") + "------------\n\n");
      },
      tex: function tex() {
        if (!this.settings.tex) return alert("settings.tex === false"), this;
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        e.replaceSelection("$$" + i + "$$"), "" === i && e.setCursor(t.line, t.ch + 2);
      },
      link: function link() {
        this.executePlugin("linkDialog", "link-dialog/link-dialog");
      },
      "reference-link": function referenceLink() {
        this.executePlugin("referenceLinkDialog", "reference-link-dialog/reference-link-dialog");
      },
      pagebreak: function pagebreak() {
        if (!this.settings.pageBreak) return alert("settings.pageBreak === false"), this;
        {
          var e = this.cm;
          e.getSelection();
        }
        e.replaceSelection("\r\n[========]\r\n");
      },
      image: function image() {
        this.executePlugin("imageDialog", "image-dialog/image-dialog");
      },
      code: function code() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        e.replaceSelection("`" + i + "`"), "" === i && e.setCursor(t.line, t.ch + 1);
      },
      "code-block": function codeBlock() {
        this.executePlugin("codeBlockDialog", "code-block-dialog/code-block-dialog");
      },
      "preformatted-text": function preformattedText() {
        this.executePlugin("preformattedTextDialog", "preformatted-text-dialog/preformatted-text-dialog");
      },
      table: function table() {
        this.executePlugin("tableDialog", "table-dialog/table-dialog");
      },
      datetime: function datetime() {
        var e = this.cm,
            i = (e.getSelection(), new Date(), this.settings.lang.name),
            o = t.dateFormat() + " " + t.dateFormat("zh-cn" === i || "zh-tw" === i ? "cn-week-day" : "week-day");
        e.replaceSelection(o);
      },
      emoji: function emoji() {
        this.executePlugin("emojiDialog", "emoji-dialog/emoji-dialog");
      },
      "html-entities": function htmlEntities() {
        this.executePlugin("htmlEntitiesDialog", "html-entities-dialog/html-entities-dialog");
      },
      "goto-line": function gotoLine() {
        this.executePlugin("gotoLineDialog", "goto-line-dialog/goto-line-dialog");
      },
      watch: function watch() {
        this[this.settings.watch ? "unwatch" : "watch"]();
      },
      preview: function preview() {
        this.previewing();
      },
      fullscreen: function fullscreen() {
        this.fullscreen();
      },
      clear: function clear() {
        this.clear();
      },
      search: function search() {
        this.search();
      },
      help: function help() {
        this.executePlugin("helpDialog", "help-dialog/help-dialog");
      },
      info: function info() {
        this.showInfoDialog();
      }
    }, t.keyMaps = {
      "Ctrl-1": "h1",
      "Ctrl-2": "h2",
      "Ctrl-3": "h3",
      "Ctrl-4": "h4",
      "Ctrl-5": "h5",
      "Ctrl-6": "h6",
      "Ctrl-B": "bold",
      "Ctrl-D": "datetime",
      "Ctrl-E": function CtrlE() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        return this.settings.emoji ? (e.replaceSelection(":" + i + ":"), void ("" === i && e.setCursor(t.line, t.ch + 1))) : void alert("Error: settings.emoji == false");
      },
      "Ctrl-Alt-G": "goto-line",
      "Ctrl-H": "hr",
      "Ctrl-I": "italic",
      "Ctrl-K": "code",
      "Ctrl-L": function CtrlL() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection(),
            o = "" === i ? "" : ' "' + i + '"';
        e.replaceSelection("[" + i + "](" + o + ")"), "" === i && e.setCursor(t.line, t.ch + 1);
      },
      "Ctrl-U": "list-ul",
      "Shift-Ctrl-A": function ShiftCtrlA() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        return this.settings.atLink ? (e.replaceSelection("@" + i), void ("" === i && e.setCursor(t.line, t.ch + 1))) : void alert("Error: settings.atLink == false");
      },
      "Shift-Ctrl-C": "code",
      "Shift-Ctrl-Q": "quote",
      "Shift-Ctrl-S": "del",
      "Shift-Ctrl-K": "tex",
      "Shift-Alt-C": function ShiftAltC() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection();
        e.replaceSelection(["```", i, "```"].join("\n")), "" === i && e.setCursor(t.line, t.ch + 3);
      },
      "Shift-Ctrl-Alt-C": "code-block",
      "Shift-Ctrl-H": "html-entities",
      "Shift-Alt-H": "help",
      "Shift-Ctrl-E": "emoji",
      "Shift-Ctrl-U": "uppercase",
      "Shift-Alt-U": "ucwords",
      "Shift-Ctrl-Alt-U": "ucfirst",
      "Shift-Alt-L": "lowercase",
      "Shift-Ctrl-I": function ShiftCtrlI() {
        var e = this.cm,
            t = e.getCursor(),
            i = e.getSelection(),
            o = "" === i ? "" : ' "' + i + '"';
        e.replaceSelection("![" + i + "](" + o + ")"), "" === i && e.setCursor(t.line, t.ch + 4);
      },
      "Shift-Ctrl-Alt-I": "image",
      "Shift-Ctrl-L": "link",
      "Shift-Ctrl-O": "list-ol",
      "Shift-Ctrl-P": "preformatted-text",
      "Shift-Ctrl-T": "table",
      "Shift-Alt-P": "pagebreak",
      F9: "watch",
      F10: "preview",
      F11: "fullscreen"
    };

    var r = function r(e) {
      return String.prototype.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };

    t.trim = r;

    var n = function n(e) {
      return e.toLowerCase().replace(/\b(\w)|\s(\w)/g, function (e) {
        return e.toUpperCase();
      });
    };

    t.ucwords = t.wordsFirstUpperCase = n;

    var a = function a(e) {
      return e.toLowerCase().replace(/\b(\w)/, function (e) {
        return e.toUpperCase();
      });
    };

    return t.firstUpperCase = t.ucfirst = a, t.urls = {
      atLinkBase: "https://github.com/"
    }, t.regexs = {
      atLink: /@(\w+)/g,
      email: /(\w+)@(\w+)\.(\w+)\.?(\w+)?/g,
      emailLink: /(mailto:)?([\w\.\_]+)@(\w+)\.(\w+)\.?(\w+)?/g,
      emoji: /:([\w\+-]+):/g,
      emojiDatetime: /(\d{2}:\d{2}:\d{2})/g,
      twemoji: /:(tw-([\w]+)-?(\w+)?):/g,
      fontAwesome: /:(fa-([\w]+)(-(\w+)){0,}):/g,
      editormdLogo: /:(editormd-logo-?(\w+)?):/g,
      pageBreak: /^\[[=]{8,}\]$/
    }, t.emoji = {
      path: "http://www.emoji-cheat-sheet.com/graphics/emojis/",
      ext: ".png"
    }, t.twemoji = {
      path: "http://twemoji.maxcdn.com/36x36/",
      ext: ".png"
    }, t.markedRenderer = function (i, o) {
      var n = {
        toc: !0,
        tocm: !1,
        tocStartLevel: 1,
        pageBreak: !0,
        atLink: !0,
        emailLink: !0,
        taskList: !1,
        emoji: !1,
        tex: !1,
        flowChart: !1,
        sequenceDiagram: !1
      },
          a = e.extend(n, o || {}),
          s = t.$marked,
          l = new s.Renderer();
      i = i || [];
      var c = t.regexs,
          h = c.atLink,
          d = c.emoji,
          u = c.email,
          f = c.emailLink,
          g = c.twemoji,
          p = c.fontAwesome,
          m = c.editormdLogo,
          w = c.pageBreak;
      return l.emoji = function (e) {
        e = e.replace(t.regexs.emojiDatetime, function (e) {
          return e.replace(/:/g, "&#58;");
        });
        var i = e.match(d);
        if (!i || !a.emoji) return e;

        for (var o = 0, r = i.length; r > o; o++) {
          ":+1:" === i[o] && (i[o] = ":\\+1:"), e = e.replace(new RegExp(i[o]), function (e, i) {
            var o = e.match(p),
                r = e.replace(/:/g, "");
            if (o) for (var n = 0, a = o.length; a > n; n++) {
              var s = o[n].replace(/:/g, "");
              return '<i class="fa ' + s + ' fa-emoji" title="' + s.replace("fa-", "") + '"></i>';
            } else {
              var l = e.match(m),
                  c = e.match(g);
              if (l) for (var h = 0, d = l.length; d > h; h++) {
                var u = l[h].replace(/:/g, "");
                return '<i class="' + u + '" title="Editor.md logo (' + u + ')"></i>';
              } else {
                if (!c) {
                  var f = "+1" === r ? "plus1" : r;
                  return f = "black_large_square" === f ? "black_square" : f, f = "moon" === f ? "waxing_gibbous_moon" : f, '<img src="' + t.emoji.path + f + t.emoji.ext + '" class="emoji" title="&#58;' + r + '&#58;" alt="&#58;' + r + '&#58;" />';
                }

                for (var w = 0, v = c.length; v > w; w++) {
                  var k = c[w].replace(/:/g, "").replace("tw-", "");
                  return '<img src="' + t.twemoji.path + k + t.twemoji.ext + '" title="twemoji-' + k + '" alt="twemoji-' + k + '" class="emoji twemoji" />';
                }
              }
            }
          });
        }

        return e;
      }, l.atLink = function (i) {
        return h.test(i) ? (a.atLink && (i = i.replace(u, function (e, t, i, o) {
          return e.replace(/@/g, "_#_&#64;_#_");
        }), i = i.replace(h, function (e, i) {
          return '<a href="' + t.urls.atLinkBase + i + '" title="&#64;' + i + '" class="at-link">' + e + "</a>";
        }).replace(/_#_&#64;_#_/g, "@")), a.emailLink && (i = i.replace(f, function (t, i, o, r, n) {
          return !i && e.inArray(n, "jpg|jpeg|png|gif|webp|ico|icon|pdf".split("|")) < 0 ? '<a href="mailto:' + t + '">' + t + "</a>" : t;
        })), i) : i;
      }, l.link = function (e, t, i) {
        if (this.options.sanitize) {
          try {
            var o = decodeURIComponent(unescape(e)).replace(/[^\w:]/g, "").toLowerCase();
          } catch (r) {
            return "";
          }

          if (0 === o.indexOf("javascript:")) return "";
        }

        var n = '<a href="' + e + '"';
        return h.test(t) || h.test(i) ? (t && (n += ' title="' + t.replace(/@/g, "&#64;")), n + '">' + i.replace(/@/g, "&#64;") + "</a>") : (t && (n += ' title="' + t + '"'), n += ">" + i + "</a>");
      }, l.heading = function (e, t, o) {
        var n = e,
            a = /\s*\<a\s*href\=\"(.*)\"\s*([^\>]*)\>(.*)\<\/a\>\s*/;

        if (a.test(e)) {
          var s = [];
          e = e.split(/\<a\s*([^\>]+)\>([^\>]*)\<\/a\>/);

          for (var l = 0, c = e.length; c > l; l++) {
            s.push(e[l].replace(/\s*href\=\"(.*)\"\s*/g, ""));
          }

          e = s.join(" ");
        }

        e = r(e);
        var h = e.toLowerCase().replace(/[^\w]+/g, "-"),
            d = {
          text: e,
          level: t,
          slug: h
        },
            u = /^[\u4e00-\u9fa5]+$/.test(e),
            f = u ? escape(e).replace(/\%/g, "") : e.toLowerCase().replace(/[^\w]+/g, "-");
        i.push(d);
        var g = "<h" + t + ' id="h' + t + "-" + this.options.headerPrefix + f + '">';
        return g += '<a name="' + e + '" class="reference-link"></a>', g += '<span class="header-link octicon octicon-link"></span>', g += this.atLink(a ? this.emoji(n) : this.emoji(e)), g += "</h" + t + ">";
      }, l.pageBreak = function (e) {
        return w.test(e) && a.pageBreak && (e = '<hr style="page-break-after:always;" class="page-break editormd-page-break" />'), e;
      }, l.paragraph = function (e) {
        var i = /\$\$(.*)\$\$/g.test(e),
            o = /^\$\$(.*)\$\$$/.test(e),
            r = o ? ' class="' + t.classNames.tex + '"' : "",
            n = a.tocm ? /^(\[TOC\]|\[TOCM\])$/.test(e) : /^\[TOC\]$/.test(e),
            s = /^\[TOCM\]$/.test(e);
        e = !o && i ? e.replace(/(\$\$([^\$]*)\$\$)+/g, function (e, i) {
          return '<span class="' + t.classNames.tex + '">' + i.replace(/\$/g, "") + "</span>";
        }) : o ? e.replace(/\$/g, "") : e;
        var l = '<div class="markdown-toc editormd-markdown-toc">' + e + "</div>";
        return n ? s ? '<div class="editormd-toc-menu">' + l + "</div><br/>" : l : w.test(e) ? this.pageBreak(e) : "<p" + r + ">" + this.atLink(this.emoji(e)) + "</p>\n";
      }, l.code = function (e, i, o) {
        return "seq" === i || "sequence" === i ? '<div class="sequence-diagram">' + e + "</div>" : "flow" === i ? '<div class="flowchart">' + e + "</div>" : "math" === i || "latex" === i || "katex" === i ? '<p class="' + t.classNames.tex + '">' + e + "</p>" : s.Renderer.prototype.code.apply(this, arguments);
      }, l.tablecell = function (e, t) {
        var i = t.header ? "th" : "td",
            o = t.align ? "<" + i + ' style="text-align:' + t.align + '">' : "<" + i + ">";
        return o + this.atLink(this.emoji(e)) + "</" + i + ">\n";
      }, l.listitem = function (e) {
        return a.taskList && /^\s*\[[x\s]\]\s*/.test(e) ? (e = e.replace(/^\s*\[\s\]\s*/, '<input type="checkbox" class="task-list-item-checkbox" /> ').replace(/^\s*\[x\]\s*/, '<input type="checkbox" class="task-list-item-checkbox" checked disabled /> '), '<li style="list-style: none;">' + this.atLink(this.emoji(e)) + "</li>") : "<li>" + this.atLink(this.emoji(e)) + "</li>";
      }, l;
    }, t.markdownToCRenderer = function (e, t, i, o) {
      var r = "",
          n = 0,
          a = this.classPrefix;
      o = o || 1;

      for (var s = 0, l = e.length; l > s; s++) {
        var c = e[s].text,
            h = e[s].level;
        o > h || (r += h > n ? "" : n > h ? new Array(n - h + 2).join("</ul></li>") : "</ul></li>", r += '<li><a class="toc-level-' + h + '" href="#' + c + '" level="' + h + '">' + c + "</a><ul>", n = h);
      }

      var d = t.find(".markdown-toc");

      if (d.length < 1 && "false" === t.attr("previewContainer")) {
        var u = '<div class="markdown-toc ' + a + 'markdown-toc"></div>';
        u = i ? '<div class="' + a + 'toc-menu">' + u + "</div>" : u, t.html(u), d = t.find(".markdown-toc");
      }

      return i && d.wrap('<div class="' + a + 'toc-menu"></div><br/>'), d.html('<ul class="markdown-toc-list"></ul>').children(".markdown-toc-list").html(r.replace(/\r?\n?\<ul\>\<\/ul\>/g, "")), d;
    }, t.tocDropdownMenu = function (t, i) {
      i = i || "Table of Contents";
      var o = 400,
          r = t.find("." + this.classPrefix + "toc-menu");
      return r.each(function () {
        var t = e(this),
            r = t.children(".markdown-toc"),
            n = '<i class="fa fa-angle-down"></i>',
            a = '<a href="javascript:;" class="toc-menu-btn">' + n + i + "</a>",
            s = r.children("ul"),
            l = s.find("li");
        r.append(a), l.first().before("<li><h1>" + i + " " + n + "</h1></li>"), t.mouseover(function () {
          s.show(), l.each(function () {
            var t = e(this),
                i = t.children("ul");

            if ("" === i.html() && i.remove(), i.length > 0 && "" !== i.html()) {
              var r = t.children("a").first();
              r.children(".fa").length < 1 && r.append(e(n).css({
                "float": "right",
                paddingTop: "4px"
              }));
            }

            t.mouseover(function () {
              i.css("z-index", o).show(), o += 1;
            }).mouseleave(function () {
              i.hide();
            });
          });
        }).mouseleave(function () {
          s.hide();
        });
      }), r;
    }, t.filterHTMLTags = function (t, i) {
      if ("string" != typeof t && (t = new String(t)), "string" != typeof i) return t;

      for (var o = i.split("|"), r = o[0].split(","), n = o[1], a = 0, s = r.length; s > a; a++) {
        var l = r[a];
        t = t.replace(new RegExp("<s*" + l + "s*([^>]*)>([^>]*)<s*/" + l + "s*>", "igm"), "");
      }

      if ("undefined" != typeof n) {
        var c = /\<(\w+)\s*([^\>]*)\>([^\>]*)\<\/(\w+)\>/gi;
        t = "*" === n ? t.replace(c, function (e, t, i, o, r) {
          return "<" + t + ">" + o + "</" + r + ">";
        }) : "on*" === n ? t.replace(c, function (t, i, o, r, n) {
          var a = e("<" + i + ">" + r + "</" + n + ">"),
              s = e(t)[0].attributes,
              l = {};
          e.each(s, function (e, t) {
            '"' !== t.nodeName && (l[t.nodeName] = t.nodeValue);
          }), e.each(l, function (e) {
            0 === e.indexOf("on") && delete l[e];
          }), a.attr(l);
          var c = "undefined" != typeof a[1] ? e(a[1]).text() : "";
          return a[0].outerHTML + c;
        }) : t.replace(c, function (t, i, o, r) {
          var a = n.split(","),
              s = e(t);
          return s.html(r), e.each(a, function (e) {
            s.attr(a[e], null);
          }), s[0].outerHTML;
        });
      }

      return t;
    }, t.markdownToHTML = function (i, o) {
      var r = {
        gfm: !0,
        toc: !0,
        tocm: !1,
        tocStartLevel: 1,
        tocTitle: "目录",
        tocDropdown: !1,
        tocContainer: "",
        markdown: "",
        markdownSourceCode: !1,
        htmlDecode: !1,
        autoLoadKaTeX: !0,
        pageBreak: !0,
        atLink: !0,
        emailLink: !0,
        tex: !1,
        taskList: !1,
        emoji: !1,
        flowChart: !1,
        sequenceDiagram: !1,
        previewCodeHighlight: !0
      };
      t.$marked = marked;
      var n = e("#" + i),
          a = n.settings = e.extend(!0, r, o || {}),
          s = n.find("textarea");
      s.length < 1 && (n.append("<textarea></textarea>"), s = n.find("textarea"));
      var l = "" === a.markdown ? s.val() : a.markdown,
          c = [],
          h = {
        toc: a.toc,
        tocm: a.tocm,
        tocStartLevel: a.tocStartLevel,
        taskList: a.taskList,
        emoji: a.emoji,
        tex: a.tex,
        pageBreak: a.pageBreak,
        atLink: a.atLink,
        emailLink: a.emailLink,
        flowChart: a.flowChart,
        sequenceDiagram: a.sequenceDiagram,
        previewCodeHighlight: a.previewCodeHighlight
      },
          d = {
        renderer: t.markedRenderer(c, h),
        gfm: a.gfm,
        tables: !0,
        breaks: !0,
        pedantic: !1,
        sanitize: a.htmlDecode ? !1 : !0,
        smartLists: !0,
        smartypants: !0
      };
      l = new String(l);
      var u = marked(l, d);
      u = t.filterHTMLTags(u, a.htmlDecode), a.markdownSourceCode ? s.text(l) : s.remove(), n.addClass("markdown-body " + this.classPrefix + "html-preview").append(u);
      var f = "" !== a.tocContainer ? e(a.tocContainer) : n;

      if ("" !== a.tocContainer && f.attr("previewContainer", !1), a.toc && (n.tocContainer = this.markdownToCRenderer(c, f, a.tocDropdown, a.tocStartLevel), (a.tocDropdown || n.find("." + this.classPrefix + "toc-menu").length > 0) && this.tocDropdownMenu(n, a.tocTitle), "" !== a.tocContainer && n.find(".editormd-toc-menu, .editormd-markdown-toc").remove()), a.previewCodeHighlight && (n.find("pre").addClass("prettyprint linenums"), prettyPrint()), t.isIE8 || (a.flowChart && n.find(".flowchart").flowChart(), a.sequenceDiagram && n.find(".sequence-diagram").sequenceDiagram({
        theme: "simple"
      })), a.tex) {
        var g = function g() {
          n.find("." + t.classNames.tex).each(function () {
            var t = e(this);
            katex.render(t.html().replace(/&lt;/g, "<").replace(/&gt;/g, ">"), t[0]), t.find(".katex").css("font-size", "1.6em");
          });
        };

        !a.autoLoadKaTeX || t.$katex || t.kaTeXLoaded ? g() : this.loadKaTeX(function () {
          t.$katex = katex, t.kaTeXLoaded = !0, g();
        });
      }

      return n.getMarkdown = function () {
        return s.val();
      }, n;
    }, t.themes = ["default", "dark"], t.previewThemes = ["default", "dark"], t.editorThemes = ["default", "3024-day", "3024-night", "ambiance", "ambiance-mobile", "base16-dark", "base16-light", "blackboard", "cobalt", "eclipse", "elegant", "erlang-dark", "lesser-dark", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "paraiso-dark", "paraiso-light", "pastel-on-dark", "rubyblue", "solarized", "the-matrix", "tomorrow-night-eighties", "twilight", "vibrant-ink", "xq-dark", "xq-light"], t.loadPlugins = {}, t.loadFiles = {
      js: [],
      css: [],
      plugin: []
    }, t.loadPlugin = function (e, i, o) {
      i = i || function () {}, this.loadScript(e, function () {
        t.loadFiles.plugin.push(e), i();
      }, o);
    }, t.loadCSS = function (e, i, o) {
      o = o || "head", i = i || function () {};
      var r = document.createElement("link");
      r.type = "text/css", r.rel = "stylesheet", r.onload = r.onreadystatechange = function () {
        t.loadFiles.css.push(e), i();
      }, r.href = e + ".css", "head" === o ? document.getElementsByTagName("head")[0].appendChild(r) : document.body.appendChild(r);
    }, t.isIE = "Microsoft Internet Explorer" == navigator.appName, t.isIE8 = t.isIE && "8." == navigator.appVersion.match(/8./i), t.loadScript = function (e, i, o) {
      o = o || "head", i = i || function () {};
      var r = null;
      r = document.createElement("script"), r.id = e.replace(/[\./]+/g, "-"), r.type = "text/javascript", r.src = e + ".js", t.isIE8 ? r.onreadystatechange = function () {
        r.readyState && ("loaded" === r.readyState || "complete" === r.readyState) && (r.onreadystatechange = null, t.loadFiles.js.push(e), i());
      } : r.onload = function () {
        t.loadFiles.js.push(e), i();
      }, "head" === o ? document.getElementsByTagName("head")[0].appendChild(r) : document.body.appendChild(r);
    }, t.katexURL = {
      css: "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min",
      js: "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min"
    }, t.kaTeXLoaded = !1, t.loadKaTeX = function (e) {
      t.loadCSS(t.katexURL.css, function () {
        t.loadScript(t.katexURL.js, e || function () {});
      });
    }, t.lockScreen = function (t) {
      e("html,body").css("overflow", t ? "hidden" : "");
    }, t.createDialog = function (i) {
      var o = {
        name: "",
        width: 420,
        height: 240,
        title: "",
        drag: !0,
        closed: !0,
        content: "",
        mask: !0,
        maskStyle: {
          backgroundColor: "#fff",
          opacity: .1
        },
        lockScreen: !0,
        footer: !0,
        buttons: !1
      };
      i = e.extend(!0, o, i);
      var r = this,
          n = this.editor,
          a = t.classPrefix,
          s = new Date().getTime(),
          l = "" === i.name ? a + "dialog-" + s : i.name,
          c = t.mouseOrTouch,
          h = '<div class="' + a + "dialog " + l + '">';
      "" !== i.title && (h += '<div class="' + a + 'dialog-header"' + (i.drag ? ' style="cursor: move;"' : "") + ">", h += '<strong class="' + a + 'dialog-title">' + i.title + "</strong>", h += "</div>"), i.closed && (h += '<a href="javascript:;" class="fa fa-close ' + a + 'dialog-close"></a>'), h += '<div class="' + a + 'dialog-container">' + i.content, (i.footer || "string" == typeof i.footer) && (h += '<div class="' + a + 'dialog-footer">' + ("boolean" == typeof i.footer ? "" : i.footer) + "</div>"), h += "</div>", h += '<div class="' + a + "dialog-mask " + a + 'dialog-mask-bg"></div>', h += '<div class="' + a + "dialog-mask " + a + 'dialog-mask-con"></div>', h += "</div>", n.append(h);
      var d = n.find("." + l);
      d.lockScreen = function (t) {
        return i.lockScreen && (e("html,body").css("overflow", t ? "hidden" : ""), r.resize()), d;
      }, d.showMask = function () {
        return i.mask && n.find("." + a + "mask").css(i.maskStyle).css("z-index", t.dialogZindex - 1).show(), d;
      }, d.hideMask = function () {
        return i.mask && n.find("." + a + "mask").hide(), d;
      }, d.loading = function (e) {
        var t = d.find("." + a + "dialog-mask");
        return t[e ? "show" : "hide"](), d;
      }, d.lockScreen(!0).showMask(), d.show().css({
        zIndex: t.dialogZindex,
        border: t.isIE8 ? "1px solid #ddd" : "",
        width: "number" == typeof i.width ? i.width + "px" : i.width,
        height: "number" == typeof i.height ? i.height + "px" : i.height
      });

      var u = function u() {
        d.css({
          top: (e(window).height() - d.height()) / 2 + "px",
          left: (e(window).width() - d.width()) / 2 + "px"
        });
      };

      if (u(), e(window).resize(u), d.children("." + a + "dialog-close").bind(c("click", "touchend"), function () {
        d.hide().lockScreen(!1).hideMask();
      }), "object" == _typeof(i.buttons)) {
        var f = d.footer = d.find("." + a + "dialog-footer");

        for (var g in i.buttons) {
          var p = i.buttons[g],
              m = a + g + "-btn";
          f.append('<button class="' + a + "btn " + m + '">' + p[0] + "</button>"), p[1] = e.proxy(p[1], d), f.children("." + m).bind(c("click", "touchend"), p[1]);
        }
      }

      if ("" !== i.title && i.drag) {
        var w,
            v,
            k = d.children("." + a + "dialog-header");
        i.mask || k.bind(c("click", "touchend"), function () {
          t.dialogZindex += 2, d.css("z-index", t.dialogZindex);
        }), k.mousedown(function (e) {
          e = e || window.event, w = e.clientX - parseInt(d[0].style.left), v = e.clientY - parseInt(d[0].style.top), document.onmousemove = y;
        });

        var b = function b(e) {
          e.removeClass(a + "user-unselect").off("selectstart");
        },
            x = function x(e) {
          e.addClass(a + "user-unselect").on("selectstart", function (e) {
            return !1;
          });
        },
            y = function y(t) {
          t = t || window.event;
          var i,
              o,
              r = parseInt(d[0].style.left),
              n = parseInt(d[0].style.top);
          r >= 0 ? r + d.width() <= e(window).width() ? i = t.clientX - w : (i = e(window).width() - d.width(), document.onmousemove = null) : (i = 0, document.onmousemove = null), n >= 0 ? o = t.clientY - v : (o = 0, document.onmousemove = null), document.onselectstart = function () {
            return !1;
          }, x(e("body")), x(d), d[0].style.left = i + "px", d[0].style.top = o + "px";
        };

        document.onmouseup = function () {
          b(e("body")), b(d), document.onselectstart = null, document.onmousemove = null;
        }, k.touchDraggable = function () {
          var t = null,
              i = function i(_i) {
            var o = _i.originalEvent,
                r = e(this).parent().position();
            t = {
              x: o.changedTouches[0].pageX - r.left,
              y: o.changedTouches[0].pageY - r.top
            };
          },
              o = function o(i) {
            i.preventDefault();
            var o = i.originalEvent;
            e(this).parent().css({
              top: o.changedTouches[0].pageY - t.y,
              left: o.changedTouches[0].pageX - t.x
            });
          };

          this.bind("touchstart", i).bind("touchmove", o);
        }, k.touchDraggable();
      }

      return t.dialogZindex += 2, d;
    }, t.mouseOrTouch = function (e, t) {
      e = e || "click", t = t || "touchend";
      var i = e;

      try {
        document.createEvent("TouchEvent"), i = t;
      } catch (o) {}

      return i;
    }, t.dateFormat = function (e) {
      e = e || "";

      var t = function t(e) {
        return 10 > e ? "0" + e : e;
      },
          i = new Date(),
          o = i.getFullYear(),
          r = o.toString().slice(2, 4),
          n = t(i.getMonth() + 1),
          a = t(i.getDate()),
          s = i.getDay(),
          l = t(i.getHours()),
          c = t(i.getMinutes()),
          h = t(i.getSeconds()),
          d = t(i.getMilliseconds()),
          u = "",
          f = r + "-" + n + "-" + a,
          g = o + "-" + n + "-" + a,
          p = l + ":" + c + ":" + h;

      switch (e) {
        case "UNIX Time":
          u = i.getTime();
          break;

        case "UTC":
          u = i.toUTCString();
          break;

        case "yy":
          u = r;
          break;

        case "year":
        case "yyyy":
          u = o;
          break;

        case "month":
        case "mm":
          u = n;
          break;

        case "cn-week-day":
        case "cn-wd":
          var m = ["日", "一", "二", "三", "四", "五", "六"];
          u = "星期" + m[s];
          break;

        case "week-day":
        case "wd":
          var w = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          u = w[s];
          break;

        case "day":
        case "dd":
          u = a;
          break;

        case "hour":
        case "hh":
          u = l;
          break;

        case "min":
        case "ii":
          u = c;
          break;

        case "second":
        case "ss":
          u = h;
          break;

        case "ms":
          u = d;
          break;

        case "yy-mm-dd":
          u = f;
          break;

        case "yyyy-mm-dd":
          u = g;
          break;

        case "yyyy-mm-dd h:i:s ms":
        case "full + ms":
          u = g + " " + p + " " + d;
          break;

        case "full":
        case "yyyy-mm-dd h:i:s":
        default:
          u = g + " " + p;
      }

      return u;
    }, t;
  }
});

/***/ }),

/***/ "./resources/js/scripts.js":
/*!*********************************!*\
  !*** ./resources/js/scripts.js ***!
  \*********************************/
/***/ (() => {

/*!
* Start Bootstrap - Clean Blog v6.0.5 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', function () {
  var scrollPos = 0;
  var mainNav = document.getElementById('mainNav');
  var headerHeight = mainNav.clientHeight;
  window.addEventListener('scroll', function () {
    var currentTop = document.body.getBoundingClientRect().top * -1;

    if (currentTop < scrollPos) {
      // Scrolling Up
      if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
        mainNav.classList.add('is-visible');
      } else {
        console.log(123);
        mainNav.classList.remove('is-visible', 'is-fixed');
      }
    } else {
      // Scrolling Down
      mainNav.classList.remove(['is-visible']);

      if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
        mainNav.classList.add('is-fixed');
      }
    }

    scrollPos = currentTop;
  });
});

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js ***!
  \****************************************************************/
/***/ (function(module) {

/*!
  * Bootstrap v5.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";const t=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},e=e=>{const i=t(e);return i&&document.querySelector(i)?i:null},i=e=>{const i=t(e);return i?document.querySelector(i):null},n=t=>{t.dispatchEvent(new Event("transitionend"))},s=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),o=t=>s(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,r=(t,e,i)=>{Object.keys(i).forEach(n=>{const o=i[n],r=e[n],a=r&&s(r)?"element":null==(l=r)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(o).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${o}".`)})},a=t=>!(!s(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},f=[],p=()=>"rtl"===document.documentElement.dir,m=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",()=>{f.forEach(t=>t())}),f.push(e)):e()},g=t=>{"function"==typeof t&&t()},_=(t,e,i=!0)=>{if(!i)return void g(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let o=!1;const r=({target:i})=>{i===e&&(o=!0,e.removeEventListener("transitionend",r),g(t))};e.addEventListener("transitionend",r),setTimeout(()=>{o||n(e)},s)},b=(t,e,i,n)=>{let s=t.indexOf(e);if(-1===s)return t[!i&&n?t.length-1:0];const o=t.length;return s+=i?1:-1,n&&(s=(s+o)%o),t[Math.max(0,Math.min(s,o-1))]},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,E={};let A=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},O=/^(mouseenter|mouseleave)/i,C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function k(t,e){return e&&`${e}::${A++}`||t.uidEvent||A++}function L(t){const e=k(t);return t.uidEvent=e,E[e]=E[e]||{},E[e]}function x(t,e,i=null){const n=Object.keys(t);for(let s=0,o=n.length;s<o;s++){const o=t[n[s]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function D(t,e,i){const n="string"==typeof e,s=n?i:e;let o=I(t);return C.has(o)||(o=t),[n,s,o]}function S(t,e,i,n,s){if("string"!=typeof e||!t)return;if(i||(i=n,n=null),O.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};n?n=t(n):i=t(i)}const[o,r,a]=D(e,i,n),l=L(t),c=l[a]||(l[a]={}),h=x(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=k(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(let a=o.length;a--;)if(o[a]===r)return s.delegateTarget=r,n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s]);return null}}(t,i,n):function(t,e){return function i(n){return n.delegateTarget=t,i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,i);u.delegationSelector=o?i:null,u.originalHandler=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function N(t,e,i,n,s){const o=x(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function I(t){return t=t.replace(y,""),T[t]||t}const P={on(t,e,i,n){S(t,e,i,n,!1)},one(t,e,i,n){S(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=D(e,i,n),a=r!==e,l=L(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void N(t,l,r,o,s?i:null)}c&&Object.keys(l).forEach(i=>{!function(t,e,i,n){const s=e[i]||{};Object.keys(s).forEach(o=>{if(o.includes(n)){const n=s[o];N(t,e,i,n.originalHandler,n.delegationSelector)}})}(t,l,i,e.slice(1))});const h=l[r]||{};Object.keys(h).forEach(i=>{const n=i.replace(w,"");if(!a||e.includes(n)){const e=h[i];N(t,l,r,e.originalHandler,e.delegationSelector)}})},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u(),s=I(e),o=e!==s,r=C.has(s);let a,l=!0,c=!0,h=!1,d=null;return o&&n&&(a=n.Event(e,i),n(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented()),r?(d=document.createEvent("HTMLEvents"),d.initEvent(s,l,!0)):d=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach(t=>{Object.defineProperty(d,t,{get:()=>i[t]})}),h&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}},j=new Map;var M={set(t,e,i){j.has(t)||j.set(t,new Map);const n=j.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>j.has(t)&&j.get(t).get(e)||null,remove(t,e){if(!j.has(t))return;const i=j.get(t);i.delete(e),0===i.size&&j.delete(t)}};class H{constructor(t){(t=o(t))&&(this._element=t,M.set(this._element,this.constructor.DATA_KEY,this))}dispose(){M.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(t=>{this[t]=null})}_queueCallback(t,e,i=!0){_(t,e,i)}static getInstance(t){return M.get(o(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.1.1"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}const B=(t,e="hide")=>{const n="click.dismiss"+t.EVENT_KEY,s=t.NAME;P.on(document,n,`[data-bs-dismiss="${s}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),l(this))return;const o=i(this)||this.closest("."+s);t.getOrCreateInstance(o)[e]()}))};class R extends H{static get NAME(){return"alert"}close(){if(P.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),P.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=R.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}B(R,"close"),m(R);class W extends H{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=W.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function z(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function q(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}P.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',t=>{t.preventDefault();const e=t.target.closest('[data-bs-toggle="button"]');W.getOrCreateInstance(e).toggle()}),m(W);const F={setDataAttribute(t,e,i){t.setAttribute("data-bs-"+q(e),i)},removeDataAttribute(t,e){t.removeAttribute("data-bs-"+q(e))},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(t=>t.startsWith("bs")).forEach(i=>{let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),e[n]=z(t.dataset[i])}),e},getDataAttribute:(t,e)=>z(t.getAttribute("data-bs-"+q(e))),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},U={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const i=[];let n=t.parentNode;for(;n&&n.nodeType===Node.ELEMENT_NODE&&3!==n.nodeType;)n.matches(e)&&i.push(n),n=n.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>t+':not([tabindex^="-"])').join(", ");return this.find(e,t).filter(t=>!l(t)&&a(t))}},$={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},V={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",X="prev",Y="left",Q="right",G={ArrowLeft:Q,ArrowRight:Y};class Z extends H{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=U.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return $}static get NAME(){return"carousel"}next(){this._slide(K)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(X)}pause(t){t||(this._isPaused=!0),U.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(n(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=U.findOne(".active.carousel-item",this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void P.one(this._element,"slid.bs.carousel",()=>this.to(t));if(e===t)return this.pause(),void this.cycle();const i=t>e?K:X;this._slide(i,this._items[t])}_getConfig(t){return t={...$,...F.getDataAttributes(this._element),..."object"==typeof t?t:{}},r("carousel",t,V),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Q:Y)}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",t=>this._keydown(t)),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",t=>this.pause(t)),P.on(this._element,"mouseleave.bs.carousel",t=>this.cycle(t))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&("pen"===t.pointerType||"touch"===t.pointerType),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},i=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},n=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(t=>this.cycle(t),500+this._config.interval))};U.find(".carousel-item img",this._element).forEach(t=>{P.on(t,"dragstart.bs.carousel",t=>t.preventDefault())}),this._pointerEvent?(P.on(this._element,"pointerdown.bs.carousel",t=>e(t)),P.on(this._element,"pointerup.bs.carousel",t=>n(t)),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.carousel",t=>e(t)),P.on(this._element,"touchmove.bs.carousel",t=>i(t)),P.on(this._element,"touchend.bs.carousel",t=>n(t)))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=G[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?U.find(".carousel-item",t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const i=t===K;return b(this._items,e,i,this._config.wrap)}_triggerSlideEvent(t,e){const i=this._getItemIndex(t),n=this._getItemIndex(U.findOne(".active.carousel-item",this._element));return P.trigger(this._element,"slide.bs.carousel",{relatedTarget:t,direction:e,from:n,to:i})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=U.findOne(".active",this._indicatorsElement);e.classList.remove("active"),e.removeAttribute("aria-current");const i=U.find("[data-bs-target]",this._indicatorsElement);for(let e=0;e<i.length;e++)if(Number.parseInt(i[e].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){i[e].classList.add("active"),i[e].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||U.findOne(".active.carousel-item",this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const i=this._directionToOrder(t),n=U.findOne(".active.carousel-item",this._element),s=this._getItemIndex(n),o=e||this._getItemByOrder(i,n),r=this._getItemIndex(o),a=Boolean(this._interval),l=i===K,c=l?"carousel-item-start":"carousel-item-end",h=l?"carousel-item-next":"carousel-item-prev",u=this._orderToDirection(i);if(o&&o.classList.contains("active"))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(o,u).defaultPrevented)return;if(!n||!o)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const f=()=>{P.trigger(this._element,"slid.bs.carousel",{relatedTarget:o,direction:u,from:s,to:r})};if(this._element.classList.contains("slide")){o.classList.add(h),d(o),n.classList.add(c),o.classList.add(c);const t=()=>{o.classList.remove(c,h),o.classList.add("active"),n.classList.remove("active",h,c),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(t,n,!0)}else n.classList.remove("active"),o.classList.add("active"),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(t){return[Q,Y].includes(t)?p()?t===Y?X:K:t===Y?K:X:t}_orderToDirection(t){return[K,X].includes(t)?p()?t===X?Y:Q:t===X?Q:Y:t}static carouselInterface(t,e){const i=Z.getOrCreateInstance(t,e);let{_config:n}=i;"object"==typeof e&&(n={...n,...e});const s="string"==typeof e?e:n.slide;if("number"==typeof e)i.to(e);else if("string"==typeof s){if(void 0===i[s])throw new TypeError(`No method named "${s}"`);i[s]()}else n.interval&&n.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){Z.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=i(this);if(!e||!e.classList.contains("carousel"))return;const n={...F.getDataAttributes(e),...F.getDataAttributes(this)},s=this.getAttribute("data-bs-slide-to");s&&(n.interval=!1),Z.carouselInterface(e,n),s&&Z.getInstance(e).to(s),t.preventDefault()}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Z.dataApiClickHandler),P.on(window,"load.bs.carousel.data-api",()=>{const t=U.find('[data-bs-ride="carousel"]');for(let e=0,i=t.length;e<i;e++)Z.carouselInterface(t[e],Z.getInstance(t[e]))}),m(Z);const J={toggle:!0,parent:null},tt={toggle:"boolean",parent:"(null|element)"};class et extends H{constructor(t,i){super(t),this._isTransitioning=!1,this._config=this._getConfig(i),this._triggerArray=[];const n=U.find('[data-bs-toggle="collapse"]');for(let t=0,i=n.length;t<i;t++){const i=n[t],s=e(i),o=U.find(s).filter(t=>t===this._element);null!==s&&o.length&&(this._selector=s,this._triggerArray.push(i))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return J}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=U.find(".collapse .collapse",this._config.parent);e=U.find(".collapse.show, .collapse.collapsing",this._config.parent).filter(e=>!t.includes(e))}const i=U.findOne(this._selector);if(e.length){const n=e.find(t=>i!==t);if(t=n?et.getInstance(n):null,t&&t._isTransitioning)return}if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e.forEach(e=>{i!==e&&et.getOrCreateInstance(e,{toggle:!1}).hide(),t||M.set(e,"bs.collapse",null)});const n=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s="scroll"+(n[0].toUpperCase()+n.slice(1));this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[n]="",P.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[n]=this._element[s]+"px"}hide(){if(this._isTransitioning||!this._isShown())return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",d(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const e=this._triggerArray.length;for(let t=0;t<e;t++){const e=this._triggerArray[t],n=i(e);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),P.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}_isShown(t=this._element){return t.classList.contains("show")}_getConfig(t){return(t={...J,...F.getDataAttributes(this._element),...t}).toggle=Boolean(t.toggle),t.parent=o(t.parent),r("collapse",t,tt),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=U.find(".collapse .collapse",this._config.parent);U.find('[data-bs-toggle="collapse"]',this._config.parent).filter(e=>!t.includes(e)).forEach(t=>{const e=i(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))})}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach(t=>{e?t.classList.remove("collapsed"):t.classList.add("collapsed"),t.setAttribute("aria-expanded",e)})}static jQueryInterface(t){return this.each((function(){const e={};"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const i=et.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}P.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const i=e(this);U.find(i).forEach(t=>{et.getOrCreateInstance(t,{toggle:!1}).toggle()})})),m(et);var it="top",nt="bottom",st="right",ot="left",rt=[it,nt,st,ot],at="end",lt=rt.reduce((function(t,e){return t.concat([e+"-start",e+"-"+at])}),[]),ct=[].concat(rt,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-"+at])}),[]),ht=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function dt(t){return t?(t.nodeName||"").toLowerCase():null}function ut(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ft(t){return t instanceof ut(t).Element||t instanceof Element}function pt(t){return t instanceof ut(t).HTMLElement||t instanceof HTMLElement}function mt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ut(t).ShadowRoot||t instanceof ShadowRoot)}var gt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];pt(s)&&dt(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});pt(n)&&dt(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function _t(t){return t.split("-")[0]}var bt=Math.round;function vt(t,e){void 0===e&&(e=!1);var i=t.getBoundingClientRect(),n=1,s=1;if(pt(t)&&e){var o=t.offsetHeight,r=t.offsetWidth;r>0&&(n=i.width/r||1),o>0&&(s=i.height/o||1)}return{width:bt(i.width/n),height:bt(i.height/s),top:bt(i.top/s),right:bt(i.right/n),bottom:bt(i.bottom/s),left:bt(i.left/n),x:bt(i.left/n),y:bt(i.top/s)}}function yt(t){var e=vt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function wt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&mt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Et(t){return ut(t).getComputedStyle(t)}function At(t){return["table","td","th"].indexOf(dt(t))>=0}function Tt(t){return((ft(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ot(t){return"html"===dt(t)?t:t.assignedSlot||t.parentNode||(mt(t)?t.host:null)||Tt(t)}function Ct(t){return pt(t)&&"fixed"!==Et(t).position?t.offsetParent:null}function kt(t){for(var e=ut(t),i=Ct(t);i&&At(i)&&"static"===Et(i).position;)i=Ct(i);return i&&("html"===dt(i)||"body"===dt(i)&&"static"===Et(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&pt(t)&&"fixed"===Et(t).position)return null;for(var i=Ot(t);pt(i)&&["html","body"].indexOf(dt(i))<0;){var n=Et(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Lt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var xt=Math.max,Dt=Math.min,St=Math.round;function Nt(t,e,i){return xt(t,Dt(e,i))}function It(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Pt(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var jt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=_t(i.placement),l=Lt(a),c=[ot,st].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return It("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Pt(t,rt))}(s.padding,i),d=yt(o),u="y"===l?it:ot,f="y"===l?nt:st,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=kt(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,E=Nt(v,w,y),A=l;i.modifiersData[n]=((e={})[A]=E,e.centerOffset=E-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&wt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Mt(t){return t.split("-")[1]}var Ht={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Bt(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:St(St(e*n)/n)||0,y:St(St(i*n)/n)||0}}(r):"function"==typeof h?h(r):r,u=d.x,f=void 0===u?0:u,p=d.y,m=void 0===p?0:p,g=r.hasOwnProperty("x"),_=r.hasOwnProperty("y"),b=ot,v=it,y=window;if(c){var w=kt(i),E="clientHeight",A="clientWidth";w===ut(i)&&"static"!==Et(w=Tt(i)).position&&"absolute"===a&&(E="scrollHeight",A="scrollWidth"),w=w,s!==it&&(s!==ot&&s!==st||o!==at)||(v=nt,m-=w[E]-n.height,m*=l?1:-1),s!==ot&&(s!==it&&s!==nt||o!==at)||(b=st,f-=w[A]-n.width,f*=l?1:-1)}var T,O=Object.assign({position:a},c&&Ht);return l?Object.assign({},O,((T={})[v]=_?"0":"",T[b]=g?"0":"",T.transform=(y.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",T)):Object.assign({},O,((e={})[v]=_?m+"px":"",e[b]=g?f+"px":"",e.transform="",e))}var Rt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:_t(e.placement),variation:Mt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,Bt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,Bt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},Wt={passive:!0},zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=ut(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,Wt)})),a&&l.addEventListener("resize",i.update,Wt),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,Wt)})),a&&l.removeEventListener("resize",i.update,Wt)}},data:{}},qt={left:"right",right:"left",bottom:"top",top:"bottom"};function Ft(t){return t.replace(/left|right|bottom|top/g,(function(t){return qt[t]}))}var Ut={start:"end",end:"start"};function $t(t){return t.replace(/start|end/g,(function(t){return Ut[t]}))}function Vt(t){var e=ut(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Kt(t){return vt(Tt(t)).left+Vt(t).scrollLeft}function Xt(t){var e=Et(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Yt(t,e){var i;void 0===e&&(e=[]);var n=function t(e){return["html","body","#document"].indexOf(dt(e))>=0?e.ownerDocument.body:pt(e)&&Xt(e)?e:t(Ot(e))}(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=ut(n),r=s?[o].concat(o.visualViewport||[],Xt(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Yt(Ot(r)))}function Qt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Gt(t,e){return"viewport"===e?Qt(function(t){var e=ut(t),i=Tt(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+Kt(t),y:a}}(t)):pt(e)?function(t){var e=vt(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Qt(function(t){var e,i=Tt(t),n=Vt(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=xt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=xt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Kt(t),l=-n.scrollTop;return"rtl"===Et(s||i).direction&&(a+=xt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Tt(t)))}function Zt(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?_t(s):null,r=s?Mt(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case it:e={x:a,y:i.y-n.height};break;case nt:e={x:a,y:i.y+i.height};break;case st:e={x:i.x+i.width,y:l};break;case ot:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Lt(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case"start":e[c]=e[c]-(i[h]/2-n[h]/2);break;case at:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function Jt(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?"clippingParents":o,a=i.rootBoundary,l=void 0===a?"viewport":a,c=i.elementContext,h=void 0===c?"popper":c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,m=It("number"!=typeof p?p:Pt(p,rt)),g="popper"===h?"reference":"popper",_=t.rects.popper,b=t.elements[u?g:h],v=function(t,e,i){var n="clippingParents"===e?function(t){var e=Yt(Ot(t)),i=["absolute","fixed"].indexOf(Et(t).position)>=0&&pt(t)?kt(t):t;return ft(i)?e.filter((function(t){return ft(t)&&wt(t,i)&&"body"!==dt(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Gt(t,i);return e.top=xt(n.top,e.top),e.right=Dt(n.right,e.right),e.bottom=Dt(n.bottom,e.bottom),e.left=xt(n.left,e.left),e}),Gt(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(ft(b)?b:b.contextElement||Tt(t.elements.popper),r,l),y=vt(t.elements.reference),w=Zt({reference:y,element:_,strategy:"absolute",placement:s}),E=Qt(Object.assign({},_,w)),A="popper"===h?E:y,T={top:v.top-A.top+m.top,bottom:A.bottom-v.bottom+m.bottom,left:v.left-A.left+m.left,right:A.right-v.right+m.right},O=t.modifiersData.offset;if("popper"===h&&O){var C=O[s];Object.keys(T).forEach((function(t){var e=[st,nt].indexOf(t)>=0?1:-1,i=[it,nt].indexOf(t)>=0?"y":"x";T[t]+=C[i]*e}))}return T}function te(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?ct:l,h=Mt(n),d=h?a?lt:lt.filter((function(t){return Mt(t)===h})):rt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=Jt(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[_t(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}var ee={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=_t(g),b=l||(_!==g&&p?function(t){if("auto"===_t(t))return[];var e=Ft(t);return[$t(t),e,$t(e)]}(g):[Ft(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat("auto"===_t(i)?te(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,A=!0,T=v[0],O=0;O<v.length;O++){var C=v[O],k=_t(C),L="start"===Mt(C),x=[it,nt].indexOf(k)>=0,D=x?"width":"height",S=Jt(e,{placement:C,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),N=x?L?st:ot:L?nt:it;y[D]>w[D]&&(N=Ft(N));var I=Ft(N),P=[];if(o&&P.push(S[k]<=0),a&&P.push(S[N]<=0,S[I]<=0),P.every((function(t){return t}))){T=C,A=!1;break}E.set(C,P)}if(A)for(var j=function(t){var e=v.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ie(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ne(t){return[it,st,nt,ot].some((function(e){return t[e]>=0}))}var se={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=Jt(e,{elementContext:"reference"}),a=Jt(e,{altBoundary:!0}),l=ie(r,n),c=ie(a,s,o),h=ne(l),d=ne(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=ct.reduce((function(t,i){return t[i]=function(t,e,i){var n=_t(t),s=[ot,it].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[ot,st].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},re={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Zt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},ae={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=Jt(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=_t(e.placement),b=Mt(e.placement),v=!b,y=Lt(_),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,A=e.rects.reference,T=e.rects.popper,O="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,C={x:0,y:0};if(E){if(o||a){var k="y"===y?it:ot,L="y"===y?nt:st,x="y"===y?"height":"width",D=E[y],S=E[y]+g[k],N=E[y]-g[L],I=f?-T[x]/2:0,P="start"===b?A[x]:T[x],j="start"===b?-T[x]:-A[x],M=e.elements.arrow,H=f&&M?yt(M):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},R=B[k],W=B[L],z=Nt(0,A[x],H[x]),q=v?A[x]/2-I-z-R-O:P-z-R-O,F=v?-A[x]/2+I+z+W+O:j+z+W+O,U=e.elements.arrow&&kt(e.elements.arrow),$=U?"y"===y?U.clientTop||0:U.clientLeft||0:0,V=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,K=E[y]+q-V-$,X=E[y]+F-V;if(o){var Y=Nt(f?Dt(S,K):S,D,f?xt(N,X):N);E[y]=Y,C[y]=Y-D}if(a){var Q="x"===y?it:ot,G="x"===y?nt:st,Z=E[w],J=Z+g[Q],tt=Z-g[G],et=Nt(f?Dt(J,K):J,Z,f?xt(tt,X):tt);E[w]=et,C[w]=et-Z}}e.modifiersData[n]=C}},requiresIfExists:["offset"]};function le(t,e,i){void 0===i&&(i=!1);var n,s,o=pt(e),r=pt(e)&&function(t){var e=t.getBoundingClientRect(),i=e.width/t.offsetWidth||1,n=e.height/t.offsetHeight||1;return 1!==i||1!==n}(e),a=Tt(e),l=vt(t,r),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==dt(e)||Xt(a))&&(c=(n=e)!==ut(n)&&pt(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:Vt(n)),pt(e)?((h=vt(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Kt(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}var ce={placement:"bottom",modifiers:[],strategy:"absolute"};function he(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function de(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?ce:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ce,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:ft(t)?Yt(t):t.contextElement?Yt(t.contextElement):[],popper:Yt(e)};var r,c,u=function(t){var e=function(t){var e=new Map,i=new Set,n=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||function t(s){i.add(s.name),[].concat(s.requires||[],s.requiresIfExists||[]).forEach((function(n){if(!i.has(n)){var s=e.get(n);s&&t(s)}})),n.push(s)}(t)})),n}(t);return ht.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(he(e,i)){a.rects={reference:le(e,kt(i),"fixed"===a.options.strategy),popper:yt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!he(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var ue=de(),fe=de({defaultModifiers:[zt,re,Rt,gt]}),pe=de({defaultModifiers:[zt,re,Rt,gt,oe,ee,ae,jt,se]}),me=Object.freeze({__proto__:null,popperGenerator:de,detectOverflow:Jt,createPopperBase:ue,createPopper:pe,createPopperLite:fe,top:it,bottom:nt,right:st,left:ot,auto:"auto",basePlacements:rt,start:"start",end:at,clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:lt,placements:ct,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:ht,applyStyles:gt,arrow:jt,computeStyles:Rt,eventListeners:zt,flip:ee,hide:se,offset:oe,popperOffsets:re,preventOverflow:ae});const ge=new RegExp("ArrowUp|ArrowDown|Escape"),_e=p()?"top-end":"top-start",be=p()?"top-start":"top-end",ve=p()?"bottom-end":"bottom-start",ye=p()?"bottom-start":"bottom-end",we=p()?"left-start":"right-start",Ee=p()?"right-start":"left-start",Ae={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Te={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Oe extends H{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Ae}static get DefaultType(){return Te}static get NAME(){return"dropdown"}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown(this._menu))return;const t={relatedTarget:this._element};if(P.trigger(this._element,"show.bs.dropdown",t).defaultPrevented)return;const e=Oe.getParentFromElement(this._element);this._inNavbar?F.setDataAttribute(this._menu,"popper","none"):this._createPopper(e),"ontouchstart"in document.documentElement&&!e.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(t=>P.on(t,"mouseover",h)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add("show"),this._element.classList.add("show"),P.trigger(this._element,"shown.bs.dropdown",t)}hide(){if(l(this._element)||!this._isShown(this._menu))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>P.off(t,"mouseover",h)),this._popper&&this._popper.destroy(),this._menu.classList.remove("show"),this._element.classList.remove("show"),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t))}_getConfig(t){if(t={...this.constructor.Default,...F.getDataAttributes(this._element),...t},r("dropdown",t,this.constructor.DefaultType),"object"==typeof t.reference&&!s(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t}_createPopper(t){if(void 0===me)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:s(this._config.reference)?e=o(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),n=i.modifiers.find(t=>"applyStyles"===t.name&&!1===t.enabled);this._popper=pe(e,this._menu,i),n&&F.setDataAttribute(this._menu,"popper","static")}_isShown(t=this._element){return t.classList.contains("show")}_getMenuElement(){return U.next(this._element,".dropdown-menu")[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return we;if(t.classList.contains("dropstart"))return Ee;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?be:_e:e?ye:ve}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(a);i.length&&b(i,e,"ArrowDown"===t,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Oe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t&&(2===t.button||"keyup"===t.type&&"Tab"!==t.key))return;const e=U.find('[data-bs-toggle="dropdown"]');for(let i=0,n=e.length;i<n;i++){const n=Oe.getInstance(e[i]);if(!n||!1===n._config.autoClose)continue;if(!n._isShown())continue;const s={relatedTarget:n._element};if(t){const e=t.composedPath(),i=e.includes(n._menu);if(e.includes(n._element)||"inside"===n._config.autoClose&&!i||"outside"===n._config.autoClose&&i)continue;if(n._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;"click"===t.type&&(s.clickEvent=t)}n._completeHide(s)}}static getParentFromElement(t){return i(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?"Space"===t.key||"Escape"!==t.key&&("ArrowDown"!==t.key&&"ArrowUp"!==t.key||t.target.closest(".dropdown-menu")):!ge.test(t.key))return;const e=this.classList.contains("show");if(!e&&"Escape"===t.key)return;if(t.preventDefault(),t.stopPropagation(),l(this))return;const i=this.matches('[data-bs-toggle="dropdown"]')?this:U.prev(this,'[data-bs-toggle="dropdown"]')[0],n=Oe.getOrCreateInstance(i);if("Escape"!==t.key)return"ArrowUp"===t.key||"ArrowDown"===t.key?(e||n.show(),void n._selectMenuItem(t)):void(e&&"Space"!==t.key||Oe.clearMenus());n.hide()}}P.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',Oe.dataApiKeydownHandler),P.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",Oe.dataApiKeydownHandler),P.on(document,"click.bs.dropdown.data-api",Oe.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",Oe.clearMenus),P.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(t){t.preventDefault(),Oe.getOrCreateInstance(this).toggle()})),m(Oe);class Ce{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",e=>e+t),this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",e=>e+t),this._setElementAttributes(".sticky-top","marginRight",e=>e-t)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t)[e];t.style[e]=i(Number.parseFloat(s))+"px"})}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&F.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,t=>{const i=F.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(F.removeDataAttribute(t,e),t.style[e]=i)})}_applyManipulationCallback(t,e){s(t)?e(t):U.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const ke={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Le={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"};class xe{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&d(this._getElement()),this._getElement().classList.add("show"),this._emulateAnimation(()=>{g(t)})):g(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(()=>{this.dispose(),g(t)})):g(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_getConfig(t){return(t={...ke,..."object"==typeof t?t:{}}).rootElement=o(t.rootElement),r("backdrop",t,Le),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),P.on(this._getElement(),"mousedown.bs.backdrop",()=>{g(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(P.off(this._element,"mousedown.bs.backdrop"),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const De={trapElement:null,autofocus:!0},Se={trapElement:"element",autofocus:"boolean"};class Ne{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),P.off(document,".bs.focustrap"),P.on(document,"focusin.bs.focustrap",t=>this._handleFocusin(t)),P.on(document,"keydown.tab.bs.focustrap",t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,".bs.focustrap"))}_handleFocusin(t){const{target:e}=t,{trapElement:i}=this._config;if(e===document||e===i||i.contains(e))return;const n=U.focusableChildren(i);0===n.length?i.focus():"backward"===this._lastTabNavDirection?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?"backward":"forward")}_getConfig(t){return t={...De,..."object"==typeof t?t:{}},r("focustrap",t,Se),t}}const Ie={backdrop:!0,keyboard:!0,focus:!0},Pe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class je extends H{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=U.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Ce}static get Default(){return Ie}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,"show.bs.modal",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add("modal-open"),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),P.on(this._dialog,"mousedown.dismiss.bs.modal",()=>{P.one(this._element,"mouseup.dismiss.bs.modal",t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(t)))}hide(){if(!this._isShown||this._isTransitioning)return;if(P.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove("show"),P.off(this._element,"click.dismiss.bs.modal"),P.off(this._dialog,"mousedown.dismiss.bs.modal"),this._queueCallback(()=>this._hideModal(),this._element,t)}dispose(){[window,this._dialog].forEach(t=>P.off(t,".bs.modal")),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new xe({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ne({trapElement:this._element})}_getConfig(t){return t={...Ie,...F.getDataAttributes(this._element),..."object"==typeof t?t:{}},r("modal",t,Pe),t}_showElement(t){const e=this._isAnimated(),i=U.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),e&&d(this._element),this._element.classList.add("show"),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:t})},this._dialog,e)}_setEscapeEvent(){this._isShown?P.on(this._element,"keydown.dismiss.bs.modal",t=>{this._config.keyboard&&"Escape"===t.key?(t.preventDefault(),this.hide()):this._config.keyboard||"Escape"!==t.key||this._triggerBackdropTransition()}):P.off(this._element,"keydown.dismiss.bs.modal")}_setResizeEvent(){this._isShown?P.on(window,"resize.bs.modal",()=>this._adjustDialog()):P.off(window,"resize.bs.modal")}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,"hidden.bs.modal")})}_showBackdrop(t){P.on(this._element,"click.dismiss.bs.modal",t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:t,scrollHeight:e,style:i}=this._element,n=e>document.documentElement.clientHeight;!n&&"hidden"===i.overflowY||t.contains("modal-static")||(n||(i.overflowY="hidden"),t.add("modal-static"),this._queueCallback(()=>{t.remove("modal-static"),n||this._queueCallback(()=>{i.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;(!i&&t&&!p()||i&&!t&&p())&&(this._element.style.paddingLeft=e+"px"),(i&&!t&&!p()||!i&&t&&p())&&(this._element.style.paddingRight=e+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=je.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=i(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,"show.bs.modal",t=>{t.defaultPrevented||P.one(e,"hidden.bs.modal",()=>{a(this)&&this.focus()})});const n=U.findOne(".modal.show");n&&je.getInstance(n).hide(),je.getOrCreateInstance(e).toggle(this)})),B(je),m(je);const Me={backdrop:!0,keyboard:!0,scroll:!1},He={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};class Be extends H{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return"offcanvas"}static get Default(){return Me}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Ce).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),this._queueCallback(()=>{this._config.scroll||this._focustrap.activate(),P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})},this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide(),this._queueCallback(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Ce).reset(),P.trigger(this._element,"hidden.bs.offcanvas")},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...Me,...F.getDataAttributes(this._element),..."object"==typeof t?t:{}},r("offcanvas",t,He),t}_initializeBackDrop(){return new xe({className:"offcanvas-backdrop",isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Ne({trapElement:this._element})}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.offcanvas",t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()})}static jQueryInterface(t){return this.each((function(){const e=Be.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=i(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;P.one(e,"hidden.bs.offcanvas",()=>{a(this)&&this.focus()});const n=U.findOne(".offcanvas.show");n&&n!==e&&Be.getInstance(n).hide(),Be.getOrCreateInstance(e).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",()=>U.find(".offcanvas.show").forEach(t=>Be.getOrCreateInstance(t).show())),B(Be),m(Be);const Re=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),We=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,ze=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,qe=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!Re.has(i)||Boolean(We.test(t.nodeValue)||ze.test(t.nodeValue));const n=e.filter(t=>t instanceof RegExp);for(let t=0,e=n.length;t<e;t++)if(n[t].test(i))return!0;return!1};function Fe(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(e),o=[].concat(...n.body.querySelectorAll("*"));for(let t=0,i=o.length;t<i;t++){const i=o[t],n=i.nodeName.toLowerCase();if(!s.includes(n)){i.remove();continue}const r=[].concat(...i.attributes),a=[].concat(e["*"]||[],e[n]||[]);r.forEach(t=>{qe(t,a)||i.removeAttribute(t.nodeName)})}return n.body.innerHTML}const Ue=new Set(["sanitize","allowList","sanitizeFn"]),$e={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Ve={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},Ke={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Xe={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};class Ye extends H{constructor(t,e){if(void 0===me)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return Ke}static get NAME(){return"tooltip"}static get Event(){return Xe}static get DefaultType(){return $e}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.Event.SHOW),e=c(this._element),i=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!i)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(".tooltip-inner").innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const n=this.getTipElement(),s=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME);n.setAttribute("id",s),this._element.setAttribute("aria-describedby",s),this._config.animation&&n.classList.add("fade");const o="function"==typeof this._config.placement?this._config.placement.call(this,n,this._element):this._config.placement,r=this._getAttachment(o);this._addAttachmentClass(r);const{container:a}=this._config;M.set(n,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(n),P.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=pe(this._element,n,this._getPopperConfig(r)),n.classList.add("show");const l=this._resolvePossibleFunction(this._config.customClass);l&&n.classList.add(...l.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{P.on(t,"mouseover",h)});const d=this.tip.classList.contains("fade");this._queueCallback(()=>{const t=this._hoverState;this._hoverState=null,P.trigger(this._element,this.constructor.Event.SHOWN),"out"===t&&this._leave(null,this)},this.tip,d)}hide(){if(!this._popper)return;const t=this.getTipElement();if(P.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;t.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>P.off(t,"mouseover",h)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const e=this.tip.classList.contains("fade");this._queueCallback(()=>{this._isWithActiveTrigger()||("show"!==this._hoverState&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},this.tip,e),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove("fade","show"),this.tip=e,this.tip}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),".tooltip-inner")}_sanitizeAndSetContent(t,e,i){const n=U.findOne(i,t);e||!n?this.setElementContent(n,e):n.remove()}setElementContent(t,e){if(null!==t)return s(e)?(e=o(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.append(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Fe(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){const t=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(t)}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){return e||this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)}_getAttachment(t){return Ve[t.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(t=>{if("click"===t)P.on(this._element,this.constructor.Event.CLICK,this._config.selector,t=>this.toggle(t));else if("manual"!==t){const e="hover"===t?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i="hover"===t?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;P.on(this._element,e,this._config.selector,t=>this._enter(t)),P.on(this._element,i,this._config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e._config.delay&&e._config.delay.show?e._timeout=setTimeout(()=>{"show"===e._hoverState&&e.show()},e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e._config.delay&&e._config.delay.hide?e._timeout=setTimeout(()=>{"out"===e._hoverState&&e.hide()},e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=F.getDataAttributes(this._element);return Object.keys(e).forEach(t=>{Ue.has(t)&&delete e[t]}),(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).container=!1===t.container?document.body:o(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),r("tooltip",t,this.constructor.DefaultType),t.sanitize&&(t.template=Fe(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),i=t.getAttribute("class").match(e);null!==i&&i.length>0&&i.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_getBasicClassPrefix(){return"bs-tooltip"}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=Ye.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(Ye);const Qe={...Ye.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},Ge={...Ye.DefaultType,content:"(string|element|function)"},Ze={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class Je extends Ye{static get Default(){return Qe}static get NAME(){return"popover"}static get Event(){return Ze}static get DefaultType(){return Ge}isWithContent(){return this.getTitle()||this._getContent()}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),".popover-header"),this._sanitizeAndSetContent(t,this._getContent(),".popover-body")}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return"bs-popover"}static jQueryInterface(t){return this.each((function(){const e=Je.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(Je);const ti={offset:10,method:"auto",target:""},ei={offset:"number",method:"string",target:"(string|element)"},ii=".nav-link, .list-group-item, .dropdown-item";class ni extends H{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,P.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return ti}static get NAME(){return"scrollspy"}refresh(){const t=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?t:this._config.method,n="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),U.find(ii,this._config.target).map(t=>{const s=e(t),o=s?U.findOne(s):null;if(o){const t=o.getBoundingClientRect();if(t.width||t.height)return[F[i](o).top+n,s]}return null}).filter(t=>t).sort((t,e)=>t[0]-e[0]).forEach(t=>{this._offsets.push(t[0]),this._targets.push(t[1])})}dispose(){P.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(t){return(t={...ti,...F.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}}).target=o(t.target)||document.documentElement,r("scrollspy",t,ei),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(t){this._activeTarget=t,this._clear();const e=ii.split(",").map(e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`),i=U.findOne(e.join(","),this._config.target);i.classList.add("active"),i.classList.contains("dropdown-item")?U.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add("active"):U.parents(i,".nav, .list-group").forEach(t=>{U.prev(t,".nav-link, .list-group-item").forEach(t=>t.classList.add("active")),U.prev(t,".nav-item").forEach(t=>{U.children(t,".nav-link").forEach(t=>t.classList.add("active"))})}),P.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:t})}_clear(){U.find(ii,this._config.target).filter(t=>t.classList.contains("active")).forEach(t=>t.classList.remove("active"))}static jQueryInterface(t){return this.each((function(){const e=ni.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",()=>{U.find('[data-bs-spy="scroll"]').forEach(t=>new ni(t))}),m(ni);class si extends H{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active"))return;let t;const e=i(this._element),n=this._element.closest(".nav, .list-group");if(n){const e="UL"===n.nodeName||"OL"===n.nodeName?":scope > li > .active":".active";t=U.find(e,n),t=t[t.length-1]}const s=t?P.trigger(t,"hide.bs.tab",{relatedTarget:this._element}):null;if(P.trigger(this._element,"show.bs.tab",{relatedTarget:t}).defaultPrevented||null!==s&&s.defaultPrevented)return;this._activate(this._element,n);const o=()=>{P.trigger(t,"hidden.bs.tab",{relatedTarget:this._element}),P.trigger(this._element,"shown.bs.tab",{relatedTarget:t})};e?this._activate(e,e.parentNode,o):o()}_activate(t,e,i){const n=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?U.children(e,".active"):U.find(":scope > li > .active",e))[0],s=i&&n&&n.classList.contains("fade"),o=()=>this._transitionComplete(t,n,i);n&&s?(n.classList.remove("show"),this._queueCallback(o,t,!0)):o()}_transitionComplete(t,e,i){if(e){e.classList.remove("active");const t=U.findOne(":scope > .dropdown-menu .active",e.parentNode);t&&t.classList.remove("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),d(t),t.classList.contains("fade")&&t.classList.add("show");let n=t.parentNode;if(n&&"LI"===n.nodeName&&(n=n.parentNode),n&&n.classList.contains("dropdown-menu")){const e=t.closest(".dropdown");e&&U.find(".dropdown-toggle",e).forEach(t=>t.classList.add("active")),t.setAttribute("aria-expanded",!0)}i&&i()}static jQueryInterface(t){return this.each((function(){const e=si.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||si.getOrCreateInstance(this).show()})),m(si);const oi={animation:"boolean",autohide:"boolean",delay:"number"},ri={animation:!0,autohide:!0,delay:5e3};class ai extends H{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return oi}static get Default(){return ri}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove("hide"),d(this._element),this._element.classList.add("show"),this._element.classList.add("showing"),this._queueCallback(()=>{this._element.classList.remove("showing"),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this._element.classList.contains("show")&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add("showing"),this._queueCallback(()=>{this._element.classList.add("hide"),this._element.classList.remove("showing"),this._element.classList.remove("show"),P.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),super.dispose()}_getConfig(t){return t={...ri,...F.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},r("toast",t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"mouseover.bs.toast",t=>this._onInteraction(t,!0)),P.on(this._element,"mouseout.bs.toast",t=>this._onInteraction(t,!1)),P.on(this._element,"focusin.bs.toast",t=>this._onInteraction(t,!0)),P.on(this._element,"focusout.bs.toast",t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ai.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return B(ai),m(ai),{Alert:R,Button:W,Carousel:Z,Collapse:et,Dropdown:Oe,Modal:je,Offcanvas:Be,Popover:Je,ScrollSpy:ni,Tab:si,Toast:ai,Tooltip:Ye}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;