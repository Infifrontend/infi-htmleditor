import React, { useState, useRef, useEffect } from "react";
import { Layout, Typography, message, Row, Col, Button } from "antd";
import { Template, EditorState, ToolbarAction } from "../../types";
import EditorToolbar from "./../EditorToolbar/EditorToolbar";
import "./HtmlEditor.scss";
import MonacoEditor from "@monaco-editor/react";

const { Content } = Layout;
const { Title } = Typography;

interface HtmlEditorProps {
  template: Template;
  onBack: () => void;
}

const HtmlEditor: React.FC<HtmlEditorProps> = ({ template, onBack }) => {
  // Initialize editor state with history for undo/redo
  const [editorState, setEditorState] = useState<EditorState>({
    content: template.content,
    mode: "wysiwyg",
    history: [template.content],
    currentHistoryIndex: 0,
  });

  // Refs for contenteditable div and textarea
  const editorRef = useRef<HTMLDivElement>(null);
  const sourceWrapperRef = useRef<HTMLDivElement>(null); // <-- wrapper DOM element used for measurements

  // State to hold calculated source TextArea height
  const [sourceHeight, setSourceHeight] = useState<string>("200px");

  // Update contenteditable div when content changes
  useEffect(() => {
    if (editorRef.current && editorState.mode !== "source") {
      editorRef.current.innerHTML = editorState.content;
    }
  }, [editorState.content, editorState.mode]);

  // Calculate available space under the wrapper and set TextArea height to 80% of that.
  useEffect(() => {
    const calcHeight = () => {
      const pageHeight = window.innerHeight;
      const wrapperTop =
        sourceWrapperRef.current?.getBoundingClientRect().top ?? 0;
      const available = Math.max(0, pageHeight - wrapperTop);
      const heightPx = Math.max(120, Math.floor(available * 0.8)); // minimum height safeguard
      setSourceHeight(`${heightPx}px`);
    };

    if (editorState.mode === "source") {
      // run calculation after layout has settled
      calcHeight();
      requestAnimationFrame(calcHeight);
      const t = window.setTimeout(calcHeight, 50);

      window.addEventListener("resize", calcHeight);
      return () => {
        window.clearTimeout(t);
        window.removeEventListener("resize", calcHeight);
      };
    }
  }, [editorState.mode]);

  // Optional: if you want to auto-focus the actual textarea DOM when entering source mode
  useEffect(() => {
    if (editorState.mode === "source") {
      // AntD wraps the native textarea, so query for it inside the wrapper
      const ta = sourceWrapperRef.current?.querySelector(
        "textarea"
      ) as HTMLTextAreaElement | null;
      if (ta) {
        ta.focus();
      }
    }
  }, [editorState.mode]);

  // Function to update history
  const updateHistory = (newContent: string) => {
    const newHistory = editorState.history.slice(
      0,
      editorState.currentHistoryIndex + 1
    );
    newHistory.push(newContent);
    setEditorState((prev) => ({
      ...prev,
      content: newContent,
      history: newHistory,
      currentHistoryIndex: newHistory.length - 1,
    }));
  };

  // Handle content change in contenteditable div
  const handleContentChange = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      setEditorState((prev) => ({
        ...prev,
        content: newContent,
      }));
    }
  };

  // Handle content change in source code textarea
  const handleSourceChange = (value: string) => {
    setEditorState((prev) => ({
      ...prev,
      content: value,
    }));
  };

  // Execute document commands
  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    handleContentChange();
  };

  // Handle toolbar actions
  const handleToolbarAction = (action: ToolbarAction) => {
    switch (action.type) {
      // Text formatting
      // Bold
      case "bold":
        executeCommand("bold");
        break;
      // Italic
      case "italic":
        executeCommand("italic");
        break;
      // Underline
      case "underline":
        executeCommand("underline");
        break;
      // Strikethrough
      case "strikethrough":
        executeCommand("strikeThrough");
        break;
      // Alignment
      case "align":
        executeCommand(
          `justify${
            action.value.charAt(0).toUpperCase() + action.value.slice(1)
          }`
        );
        break;
      // Lists
      case "orderedList":
        executeCommand("insertOrderedList");
        break;
      // Unordered List
      case "unorderedList":
        executeCommand("insertUnorderedList");
        break;
      // Indentation
      case "indent":
        executeCommand("indent");
        break;
      case "outdent":
        executeCommand("outdent");
        break;
      // Clear Formatting
      case "clearFormatting":
        executeCommand("removeFormat");
        break;
      // Advanced features
      case "heading":
        executeCommand("formatBlock", action.value);
        break;
      // Font size
      case "fontSize":
        executeCommand("fontSize", action.value);
        break;
      // Text color
      case "textColor":
        executeCommand("foreColor", action.value);
        break;
      // Background color
      case "backgroundColor":
        executeCommand("backColor", action.value);
        break;
      // Insert link
      case "insertLink":
        const url = prompt("Enter URL:");
        if (url) executeCommand("createLink", url);
        break;
      // Insert image
      case "insertImage":
        const imgUrl = prompt("Enter image URL:");
        if (imgUrl) executeCommand("insertImage", imgUrl);
        break;
      // Insert table
      case "insertTable":
        const rows = prompt("Number of rows:") || "3";
        const cols = prompt("Number of columns:") || "3";
        insertTable(parseInt(rows), parseInt(cols));
        break;
      // Code block
      case "codeBlock":
        executeCommand("formatBlock", "pre");
        break;
      // Undo/Redo
      case "undo":
        if (editorState.currentHistoryIndex > 0) {
          const newIndex = editorState.currentHistoryIndex - 1;
          setEditorState((prev) => ({
            ...prev,
            content: prev.history[newIndex],
            currentHistoryIndex: newIndex,
          }));
        }
        break;
      case "redo":
        if (editorState.currentHistoryIndex < editorState.history.length - 1) {
          const newIndex = editorState.currentHistoryIndex + 1;
          setEditorState((prev) => ({
            ...prev,
            content: prev.history[newIndex],
            currentHistoryIndex: newIndex,
          }));
        }
        break;
      // Save/Export/Import
      case "save":
        message.success("Template saved successfully!");
        updateHistory(editorState.content);
        break;
      case "export":
        handleExport(action.value);
        break;
      case "import":
        handleImport();
        break;
      // Change mode
      case "changeMode":
        setEditorState((prev) => ({ ...prev, mode: action.value }));
        break;
      default:
        break;
    }
  };

  const insertTable = (rows: number, cols: number) => {
    let tableHTML = '<table class="cls-table">';
    for (let i = 0; i < rows; i++) {
      tableHTML += "<tr>";
      for (let j = 0; j < cols; j++) {
        tableHTML += '<td class="cls-td">Cell content</td>';
      }
      tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    executeCommand("insertHTML", tableHTML);
  };

  const handleExport = (format: string) => {
    const content = editorState.content;
    const blob = new Blob([content], {
      type: format === "html" ? "text/html" : "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `template.${format === "html" ? "html" : "txt"}`;
    a.click();
    URL.revokeObjectURL(url);
    message.success(`Exported as ${format.toUpperCase()}`);
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".html,.htm";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          updateHistory(content);
          message.success("Template imported successfully!");
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const renderEditor = () => {
    switch (editorState.mode) {
      case "source":
        return (
          // wrapper used for measurement (getBoundingClientRect on a plain div is safe)
          <div ref={sourceWrapperRef} className="cls-source-wrapper">
            {/* <TextArea
              ref={sourceRef}
              value={editorState.content}
              onChange={(e) => handleSourceChange(e.target.value)}
              className="cls-source-editor"
              placeholder="Enter HTML source code..."
              style={{ height: sourceHeight }}
            /> */}
            <MonacoEditor
              height={sourceHeight}
              defaultLanguage="html"
              theme="vs-dark"
              value={editorState.content}
              onChange={(e: any) => handleSourceChange(e.target.value)}
              options={{
                minimap: { enabled: false },
                automaticLayout: true,
                fontSize: 14,
                scrollBeyondLastLine: false,
              }}
            />
          </div>
        );

      case "split":
        return (
          <Row gutter={16} className="cls-split-row">
            <Col span={12}>
              <div className="cls-split-panel">
                <div className="cls-split-header">
                  <strong>Source Code</strong>
                </div>
                <MonacoEditor
                  height={sourceHeight}
                  defaultLanguage="html"
                  theme="vs-dark"
                  value={editorState.content}
                  onChange={(e: any) => handleSourceChange(e.target.value)}
                  options={{
                    minimap: { enabled: false },
                    automaticLayout: true,
                    fontSize: 14,
                  }}
                />
              </div>
            </Col>
            <Col span={12}>
              <div className="cls-split-panel">
                <div className="cls-split-header">
                  <strong>Preview</strong>
                </div>
                <div
                  className="cls-preview"
                  dangerouslySetInnerHTML={{ __html: editorState.content }}
                />
              </div>
            </Col>
          </Row>
        );

      default:
        return (
          <div
            ref={editorRef}
            contentEditable
            onInput={handleContentChange}
            className="cls-editor"
            dangerouslySetInnerHTML={{ __html: editorState.content }}
          />
        );
    }
  };

  return (
    <Layout className="cls-layout">
      <div className="cls-header">
        <div className="cls-header-inner">
          <Title level={3} className="cls-title">
            Editing: {template.title}
          </Title>
          <Button onClick={onBack} type="default">
            Back to Templates
          </Button>
        </div>
      </div>

      <EditorToolbar
        onAction={handleToolbarAction}
        canUndo={editorState.currentHistoryIndex > 0}
        canRedo={
          editorState.currentHistoryIndex < editorState.history.length - 1
        }
      />

      <Content className="cls-content">{renderEditor()}</Content>
    </Layout>
  );
};

export default HtmlEditor;
