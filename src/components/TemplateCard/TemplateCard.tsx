import React from 'react';
import { Card, Typography, Button } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import { Template } from '../../types';
import './TemplateCard.scss';

const { Title, Paragraph } = Typography;

interface TemplateCardProps {
  template: Template;
  onEdit: (template: Template) => void;
  onPreview: (template: Template) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onEdit, onPreview }) => {
  const generatePreview = (content: string) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    const textContent = div.textContent || div.innerText || '';
    return textContent.length > 100 ? textContent.substring(0, 100) + '...' : textContent;
  };

  return (
    <Card
      hoverable
      className="cls-card"
      bodyStyle={{ padding: '16px', height: '100%' }}
      actions={[
        <Button
          key="preview"
          type="text"
          icon={<EyeOutlined />}
          onClick={() => onPreview(template)}
          className="cls-btn-preview"
        >
          Preview
        </Button>,
        <Button
          key="edit"
          type="primary"
          icon={<EditOutlined />}
          onClick={() => onEdit(template)}
          className="cls-btn-edit"
        >
          Edit
        </Button>
      ]}
    >
      <div className="cls-card-body">
        <Title level={4} className="cls-title">
          {template.title}
        </Title>
        <div className="cls-preview-box">
          <Paragraph className="cls-preview-text" ellipsis={{ rows: 4 }}>
            {generatePreview(template.content)}
          </Paragraph>
        </div>
      </div>
    </Card>
  );
};

export default TemplateCard;
