import {
  VscFileCode,
  VscFileMedia,
  VscFilePdf,
  VscFileSubmodule,
  VscFileZip,
  VscJson,
  VscMarkdown,
  VscSymbolFile,
  VscFolder,
  VscFolderOpened,
} from "react-icons/vsc";
import { useState } from "react";

type FileTreeProps = {
  fileName: string;
  nodes: Record<string, any> | null;
  path: string;
  onSelect: (filePath: string) => void;
};

// ✅ Helper to get icon based on file type (if not a folder)
const getFileIcon = (fileName: string) => {
  if (!fileName) return <VscSymbolFile className="mr-2 text-gray-400" />;
  const ext = fileName.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "js":
    case "ts":
    case "jsx":
    case "tsx":
    case "html":
    case "css":
      return <VscFileCode className="mr-2 text-green-500" />;
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
      return <VscFileMedia className="mr-2 text-pink-500" />;
    case "md":
      return <VscMarkdown className="mr-2 text-blue-500" />;
    case "json":
      return <VscJson className="mr-2 text-yellow-500" />;
    case "zip":
    case "rar":
      return <VscFileZip className="mr-2 text-purple-500" />;
    case "pdf":
      return <VscFilePdf className="mr-2 text-red-500" />;
    case "lock":
      return <VscFileSubmodule className="mr-2 text-gray-500" />;
    default:
      return <VscSymbolFile className="mr-2 text-gray-400" />;
  }
};

const FileTreeNode = ({ fileName, nodes, path, onSelect }: FileTreeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isFolder = nodes && typeof nodes === "object";

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      onSelect(path);
    }
  };

  return (
    <div className="ml-2">
      <div
        className="flex items-center cursor-pointer hover:bg-gray-200 p-1 rounded-sm"
        onClick={handleClick}
      >
        {isFolder ? (
          isOpen ? (
            <VscFolderOpened className="mr-2 text-yellow-500" />
          ) : (
            <VscFolder className="mr-2 text-yellow-500" />
          )
        ) : (
          getFileIcon(fileName)
        )}
        <span className="font-mono text-sm truncate max-w-[150px]">{fileName}</span>
      </div>
      {isFolder && isOpen && (
        <div className="ml-4">
          {Object.entries(nodes).map(([child, value]) => (
            <FileTreeNode
              key={child}
              fileName={child}
              nodes={value}
              path={`${path}/${child}`}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

type FileTreeComponentProps = {
  tree: Record<string, any>;
  onSelect: (filePath: string) => void;
};

const FileTree = ({ tree, onSelect }: FileTreeComponentProps) => {
  const rootProjectName = Object.keys(tree)[0];
  const rootContent = tree[rootProjectName];

  return (
    <div className="font-sans text-sm">
      <FileTreeNode
        fileName={rootProjectName}
        nodes={rootContent}
        path={rootProjectName}
        onSelect={onSelect}
      />
    </div>
  );
};

export default FileTree;
