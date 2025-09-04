import { useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import { Template } from './types';
import HtmlEditor from './components/HtmlEditor/HtmlEditor';
import TemplateList from './components/TemplateList/TemplateList';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleBackToList = () => {
    setSelectedTemplate(null);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
          colorSuccess: '#52c41a',
          colorWarning: '#faad14',
          colorError: '#ff4d4f',
          borderRadius: 6,
          fontSize: 14,
        },
      }}
    >
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        {selectedTemplate ? (
          <HtmlEditor 
            template={selectedTemplate} 
            onBack={handleBackToList}
          />
        ) : (
          <TemplateList onSelectTemplate={handleSelectTemplate} />
        )}
      </div>
    </ConfigProvider>
  );
}

export default App;