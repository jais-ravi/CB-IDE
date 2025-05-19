"use client";

import React, { useEffect, useRef } from "react";
import AceEditor from "react-ace";
import ace from "ace-builds";

// Themes
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-gruvbox";

// Languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-markdown";

// Autocomplete and snippets
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/c_cpp";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/snippets/json";
import "ace-builds/src-noconflict/snippets/markdown";

ace.config.set("basePath", "/ace-builds/src-noconflict/");

type Props = {
  code: string | null;
  setCode: (val: string) => void;
  mode?: string;
};

const CodeEditor: React.FC<Props> = ({ code, setCode, mode  }) => {
  const editorRef = useRef<any>(null);     // AceEditor instance ref
  const containerRef = useRef<HTMLDivElement>(null);   // Parent div ref

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      if (editorRef.current) {
        editorRef.current.editor.resize();
      }
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <AceEditor
        ref={editorRef}
        mode={mode}
        theme="gruvbox"
        name="code-editor"
        fontSize={14}
        value={code || ""}
        onChange={(e) => setCode(e)}
        width="100%"
        height="100%"
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          showFoldWidgets: true,
          tabSize: 2,
          scrollPastEnd: true,
          hScrollBarAlwaysVisible: true,
          vScrollBarAlwaysVisible: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;