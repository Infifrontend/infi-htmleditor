import React, { useState, useRef, useEffect } from "react";
import {
  Layout,
  Typography,
  message,
  Modal,
  Input,
  Row,
  Col,
  Button,
} from "antd";
import { Template, EditorState, ToolbarAction } from "../../types";
import EditorToolbar from "./../EditorToolbar/EditorToolbar";

const { Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

interface HtmlEditorProps {
  template: Template;
  onBack: () => void;
}

const HtmlEditor: React.FC<HtmlEditorProps> = ({ template, onBack }) => {
  const [editorState, setEditorState] = useState<EditorState>({
    content: template.content,
    mode: "wysiwyg",
    history: [template.content],
    currentHistoryIndex: 0,
  });

  const editorRef = useRef<HTMLDivElement>(null);
  const sourceRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (editorRef.current && editorState.mode !== "source") {
      editorRef.current.innerHTML = editorState.content;
    }
  }, [editorState.content, editorState.mode]);

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

  const handleContentChange = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      setEditorState((prev) => ({
        ...prev,
        content: newContent,
      }));
    }
  };

  const handleSourceChange = (value: string) => {
    setEditorState((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    handleContentChange();
  };

  const handleToolbarAction = (action: ToolbarAction) => {
    switch (action.type) {
      case "bold":
        executeCommand("bold");
        break;
      case "italic":
        executeCommand("italic");
        break;
      case "underline":
        executeCommand("underline");
        break;
      case "strikethrough":
        executeCommand("strikeThrough");
        break;
      case "align":
        executeCommand(
          `justify${
            action.value.charAt(0).toUpperCase() + action.value.slice(1)
          }`
        );
        break;
      case "orderedList":
        executeCommand("insertOrderedList");
        break;
      case "unorderedList":
        executeCommand("insertUnorderedList");
        break;
      case "heading":
        executeCommand("formatBlock", action.value);
        break;
      case "fontSize":
        executeCommand("fontSize", action.value);
        break;
      case "textColor":
        executeCommand("foreColor", action.value);
        break;
      case "backgroundColor":
        executeCommand("backColor", action.value);
        break;
      case "insertLink":
        const url = prompt("Enter URL:");
        if (url) executeCommand("createLink", url);
        break;
      case "insertImage":
        const imgUrl = prompt("Enter image URL:");
        if (imgUrl) executeCommand("insertImage", imgUrl);
        break;
      case "insertTable":
        const rows = prompt("Number of rows:") || "3";
        const cols = prompt("Number of columns:") || "3";
        insertTable(parseInt(rows), parseInt(cols));
        break;
      case "codeBlock":
        executeCommand("formatBlock", "pre");
        break;
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
      case "changeMode":
        setEditorState((prev) => ({ ...prev, mode: action.value }));
        break;
      default:
        break;
    }
  };

  const insertTable = (rows: number, cols: number) => {
    let tableHTML =
      '<table style="border-collapse: collapse; width: 100%; margin: 10px 0;">';
    for (let i = 0; i < rows; i++) {
      tableHTML += "<tr>";
      for (let j = 0; j < cols; j++) {
        tableHTML +=
          '<td style="border: 1px solid #ddd; padding: 8px;">Cell content</td>';
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
          <TextArea
            ref={sourceRef}
            value={editorState.content}
            onChange={(e) => handleSourceChange(e.target.value)}
            style={{
              minHeight: "500px",
              fontFamily: "Monaco, Consolas, monospace",
              fontSize: "14px",
            }}
            placeholder="Enter HTML source code..."
          />
        );

      case "split":
        return (
          <Row gutter={16} style={{ height: "500px" }}>
            <Col span={12}>
              <div
                style={{
                  height: "100%",
                  border: "1px solid #d9d9d9",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    backgroundColor: "#fafafa",
                    borderBottom: "1px solid #d9d9d9",
                  }}
                >
                  <strong>Source Code</strong>
                </div>
                <TextArea
                  value={editorState.content}
                  onChange={(e) => handleSourceChange(e.target.value)}
                  style={{
                    height: "calc(100% - 40px)",
                    border: "none",
                    fontFamily: "Monaco, Consolas, monospace",
                    fontSize: "12px",
                  }}
                  bordered={false}
                />
              </div>
            </Col>
            <Col span={12}>
              <div
                style={{
                  height: "100%",
                  border: "1px solid #d9d9d9",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    backgroundColor: "#fafafa",
                    borderBottom: "1px solid #d9d9d9",
                  }}
                >
                  <strong>Preview</strong>
                </div>
                <div
                  style={{
                    height: "calc(100% - 40px)",
                    padding: "16px",
                    overflow: "auto",
                    backgroundColor: "white",
                  }}
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
            style={{
              minHeight: "500px",
              padding: "20px",
              border: "1px solid #d9d9d9",
              borderRadius: "6px",
              backgroundColor: "white",
              outline: "none",
              lineHeight: "1.6",
              fontSize: "14px",
            }}
            dangerouslySetInnerHTML={{ __html: editorState.content }}
          />
        );
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <div
        style={{
          padding: "16px 24px",
          backgroundColor: "#fafafa",
          borderBottom: "1px solid #e6f7ff",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={3} style={{ margin: 0, color: "#1890ff" }}>
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

      <Content style={{ padding: "24px", backgroundColor: "#f5f5f5" }}>
        {renderEditor()}
      </Content>
    </Layout>
  );
};

export default HtmlEditor;
