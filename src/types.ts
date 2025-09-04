export interface Template {
  id: string;
  title: string;
  category: 'approval' | 'rejected' | 'cancellation' | 'others';
  content: string;
  preview?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EditorState {
  content: string;
  mode: 'wysiwyg' | 'source' | 'split';
  history: string[];
  currentHistoryIndex: number;
}

export interface ToolbarAction {
  type: string;
  value?: any;
}