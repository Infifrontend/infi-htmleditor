import React from 'react';
import { 
  Tooltip, 
  Space, 
  Divider, 
  Select, 
  ColorPicker, 
  Button,
  Dropdown,
  MenuProps
} from 'antd';
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  LinkOutlined,
  PictureOutlined,
  TableOutlined,
  CodeOutlined,
  UndoOutlined,
  RedoOutlined,
  SaveOutlined,
  DownloadOutlined,
  UploadOutlined,
  EyeOutlined,
  SplitCellsOutlined
} from '@ant-design/icons';
import { ToolbarAction } from '../../types';

const { Option } = Select;

interface EditorToolbarProps {
  onAction: (action: ToolbarAction) => void;
  canUndo: boolean;
  canRedo: boolean;
}

const EditorToolbar: React.FC<EditorToolbarProps> = ({ onAction, canUndo, canRedo }) => {
  const handleFontSizeChange = (value: string) => {
    onAction({ type: 'fontSize', value });
  };

  const handleHeadingChange = (value: string) => {
    onAction({ type: 'heading', value });
  };

  const handleColorChange = (color: any) => {
    onAction({ type: 'textColor', value: color.toHexString() });
  };

  const handleBackgroundColorChange = (color: any) => {
    onAction({ type: 'backgroundColor', value: color.toHexString() });
  };

  const exportMenuItems: MenuProps['items'] = [
    {
      key: 'html',
      label: 'Export as HTML',
      onClick: () => onAction({ type: 'export', value: 'html' })
    },
    {
      key: 'markdown',
      label: 'Export as Markdown',
      onClick: () => onAction({ type: 'export', value: 'markdown' })
    },
    {
      key: 'pdf',
      label: 'Export as PDF',
      onClick: () => onAction({ type: 'export', value: 'pdf' })
    }
  ];

  const viewMenuItems: MenuProps['items'] = [
    {
      key: 'wysiwyg',
      label: 'WYSIWYG Mode',
      onClick: () => onAction({ type: 'changeMode', value: 'wysiwyg' })
    },
    {
      key: 'source',
      label: 'Source Code Mode',
      onClick: () => onAction({ type: 'changeMode', value: 'source' })
    },
    {
      key: 'split',
      label: 'Split View',
      onClick: () => onAction({ type: 'changeMode', value: 'split' })
    }
  ];

  return (
    <div style={{ 
      padding: '12px 16px', 
      backgroundColor: '#fafafa', 
      borderBottom: '1px solid #e6f7ff',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      alignItems: 'center'
    }}>
      {/* History Actions */}
      <Space>
        <Tooltip title="Undo">
          <Button 
            icon={<UndoOutlined />} 
            disabled={!canUndo}
            onClick={() => onAction({ type: 'undo' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Redo">
          <Button 
            icon={<RedoOutlined />} 
            disabled={!canRedo}
            onClick={() => onAction({ type: 'redo' })}
            type="text"
          />
        </Tooltip>
      </Space>

      <Divider type="vertical" />

      {/* Text Formatting */}
      <Space>
        <Select 
          defaultValue="p" 
          style={{ width: 120 }}
          onChange={handleHeadingChange}
          placeholder="Heading"
        >
          <Option value="p">Normal</Option>
          <Option value="h1">Heading 1</Option>
          <Option value="h2">Heading 2</Option>
          <Option value="h3">Heading 3</Option>
          <Option value="h4">Heading 4</Option>
          <Option value="h5">Heading 5</Option>
          <Option value="h6">Heading 6</Option>
          <Option value="blockquote">Quote</Option>
        </Select>

        <Select 
          defaultValue="14px" 
          style={{ width: 80 }}
          onChange={handleFontSizeChange}
          placeholder="Size"
        >
          <Option value="12px">12px</Option>
          <Option value="14px">14px</Option>
          <Option value="16px">16px</Option>
          <Option value="18px">18px</Option>
          <Option value="20px">20px</Option>
          <Option value="24px">24px</Option>
          <Option value="32px">32px</Option>
        </Select>
      </Space>

      <Divider type="vertical" />

      {/* Basic Formatting */}
      <Space>
        <Tooltip title="Bold">
          <Button 
            icon={<BoldOutlined />} 
            onClick={() => onAction({ type: 'bold' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Italic">
          <Button 
            icon={<ItalicOutlined />} 
            onClick={() => onAction({ type: 'italic' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Underline">
          <Button 
            icon={<UnderlineOutlined />} 
            onClick={() => onAction({ type: 'underline' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Strikethrough">
          <Button 
            icon={<StrikethroughOutlined />} 
            onClick={() => onAction({ type: 'strikethrough' })}
            type="text"
          />
        </Tooltip>
      </Space>

      <Divider type="vertical" />

      {/* Colors */}
      <Space>
        <Tooltip title="Text Color">
          <ColorPicker onChange={handleColorChange} size="small">
            <Button type="text" style={{ color: '#1890ff' }}>A</Button>
          </ColorPicker>
        </Tooltip>
        <Tooltip title="Background Color">
          <ColorPicker onChange={handleBackgroundColorChange} size="small">
            <Button type="text">🎨</Button>
          </ColorPicker>
        </Tooltip>
      </Space>

      <Divider type="vertical" />

      {/* Alignment */}
      <Space>
        <Tooltip title="Align Left">
          <Button 
            icon={<AlignLeftOutlined />} 
            onClick={() => onAction({ type: 'align', value: 'left' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Align Center">
          <Button 
            icon={<AlignCenterOutlined />} 
            onClick={() => onAction({ type: 'align', value: 'center' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Align Right">
          <Button 
            icon={<AlignRightOutlined />} 
            onClick={() => onAction({ type: 'align', value: 'right' })}
            type="text"
          />
        </Tooltip>
      </Space>

      <Divider type="vertical" />

      {/* Lists */}
      <Space>
        <Tooltip title="Ordered List">
          <Button 
            icon={<OrderedListOutlined />} 
            onClick={() => onAction({ type: 'orderedList' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Unordered List">
          <Button 
            icon={<UnorderedListOutlined />} 
            onClick={() => onAction({ type: 'unorderedList' })}
            type="text"
          />
        </Tooltip>
      </Space>

      <Divider type="vertical" />

      {/* Insert Elements */}
      <Space>
        <Tooltip title="Insert Link">
          <Button 
            icon={<LinkOutlined />} 
            onClick={() => onAction({ type: 'insertLink' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Insert Image">
          <Button 
            icon={<PictureOutlined />} 
            onClick={() => onAction({ type: 'insertImage' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Insert Table">
          <Button 
            icon={<TableOutlined />} 
            onClick={() => onAction({ type: 'insertTable' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Code Block">
          <Button 
            icon={<CodeOutlined />} 
            onClick={() => onAction({ type: 'codeBlock' })}
            type="text"
          />
        </Tooltip>
      </Space>

      <Divider type="vertical" />

      {/* View Options */}
      <Space>
        <Dropdown menu={{ items: viewMenuItems }} trigger={['click']}>
          <Button icon={<EyeOutlined />} type="text">
            View
          </Button>
        </Dropdown>
        <Dropdown menu={{ items: exportMenuItems }} trigger={['click']}>
          <Button icon={<DownloadOutlined />} type="text">
            Export
          </Button>
        </Dropdown>
        <Tooltip title="Import HTML">
          <Button 
            icon={<UploadOutlined />} 
            onClick={() => onAction({ type: 'import' })}
            type="text"
          />
        </Tooltip>
        <Tooltip title="Save">
          <Button 
            icon={<SaveOutlined />} 
            onClick={() => onAction({ type: 'save' })}
            type="primary"
          />
        </Tooltip>
      </Space>
    </div>
  );
};

export default EditorToolbar;