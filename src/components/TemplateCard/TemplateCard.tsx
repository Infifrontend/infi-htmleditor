import React from 'react';
import { Card, Typography, Button } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import { Template } from '../../types';

const { Title, Paragraph } = Typography;

interface TemplateCardProps {
  template: Template;
  onEdit: (template: Template) => void;
  onPreview: (template: Template) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onEdit, onPreview }) => {
  const generatePreview = (content: string) => {
    // Create a safe preview by extracting text and limiting length
    const div = document.createElement('div');
    div.innerHTML = content;
    const textContent = div.textContent || div.innerText || '';
    return textContent.length > 100 ? textContent.substring(0, 100) + '...' : textContent;
  };

  return (
    <Card
      hoverable
      style={{ 
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
      }}
      bodyStyle={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        padding: '16px'
      }}
      actions={[
        <Button 
          key="preview" 
          type="text" 
          icon={<EyeOutlined />} 
          onClick={() => onPreview(template)}
          style={{ color: '#1890ff' }}
        >
          Preview
        </Button>,
        <Button 
          key="edit" 
          type="primary" 
          icon={<EditOutlined />} 
          onClick={() => onEdit(template)}
        >
          Edit
        </Button>
      ]}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Title level={4} style={{ margin: '0 0 12px 0', color: '#1890ff' }}>
          {template.title}
        </Title>
        <div 
          style={{ 
            flex: 1, 
            backgroundColor: '#fafafa', 
            border: '1px solid #e6f7ff', 
            borderRadius: '6px',
            padding: '12px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Paragraph 
            style={{ 
              margin: 0, 
              color: '#666',
              fontSize: '13px',
              lineHeight: '1.4'
            }}
            ellipsis={{ rows: 4 }}
          >
            {generatePreview(template.content)}
          </Paragraph>
        </div>
      </div>
    </Card>
  );
};

export default TemplateCard;