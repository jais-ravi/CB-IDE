"use client";

import React from "react";
import AceEditor from "react-ace";
import ace from "ace-builds";

// Import all themes
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-xcode";

// Import all language modes
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-markdown";

// Import autocompletion and snippets
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

// Import all snippet files
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/c_cpp";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/snippets/json";
import "ace-builds/src-noconflict/snippets/markdown";

// Set AceEditor base path
ace.config.set("basePath", "/ace-builds/src-noconflict/");

const CodeEditor: React.FC = () => {
  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="github_dark"
        name="code-editor"
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        width="100%"
        height="100vh"
        setOptions={{
          enableBasicAutocompletion: true,  
          enableLiveAutocompletion: true,  
          enableSnippets: true,             
          showLineNumbers: true,
          showFoldWidgets:true,
          tabSize: 2,
          hScrollBarAlwaysVisible:true,
          vScrollBarAlwaysVisible:true,
          scrollPastEnd:true,
        }}
      />
    </div>
  );
};

export default CodeEditor;