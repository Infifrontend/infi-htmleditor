import React, { useState } from 'react';
import { Layout, Typography, Tabs, Row, Col, Button, Modal } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Template } from '../../types';
import { getAllCategories, getTemplatesByCategory } from '../../data/mockTemplates';
import TemplateCard from './../TemplateCard/TemplateCard';

const { Content } = Layout;
const { Title } = Typography;

interface TemplateListProps {
  onSelectTemplate: (template: Template) => void;
}

const TemplateList: React.FC<TemplateListProps> = ({ onSelectTemplate }) => {
  const [currentPages, setCurrentPages] = useState<Record<string, number>>({});
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  
  const categories = getAllCategories();
  const templatesPerPage = 8; // 4 per row, 2 rows
  const templatesPerRow = 4;

  const handlePageChange = (category: string, direction: 'next' | 'prev') => {
    setCurrentPages(prev => {
      const templates = getTemplatesByCategory(category);
      const totalPages = Math.ceil(templates.length / templatesPerPage);
      const currentPage = prev[category] || 0;
      
      let newPage = currentPage;
      if (direction === 'next' && currentPage < totalPages - 1) {
        newPage = currentPage + 1;
      } else if (direction === 'prev' && currentPage > 0) {
        newPage = currentPage - 1;
      }
      
      return { ...prev, [category]: newPage };
    });
  };

  const handlePreview = (template: Template) => {
    setPreviewTemplate(template);
    setPreviewVisible(true);
  };

  const handleEdit = (template: Template) => {
    onSelectTemplate(template);
  };

  const renderTemplatesForCategory = (category: string) => {
    const templates = getTemplatesByCategory(category);
    const currentPage = currentPages[category] || 0;
    const startIndex = currentPage * templatesPerPage;
    const endIndex = startIndex + templatesPerPage;
    const currentTemplates = templates.slice(startIndex, endIndex);
    const totalPages = Math.ceil(templates.length / templatesPerPage);

    // Group templates into rows of 4
    const rows = [];
    for (let i = 0; i < currentTemplates.length; i += templatesPerRow) {
      rows.push(currentTemplates.slice(i, i + templatesPerRow));
    }

    return (
      <div style={{ padding: '0 24px' }}>
        {rows.map((rowTemplates, rowIndex) => (
          <Row key={rowIndex} gutter={[16, 16]} style={{ marginBottom: '24px', border: '2px solid red' }}>
            {rowTemplates.map((template) => (
              <Col key={template.id} xs={24} sm={12} md={8} lg={6}>
                <TemplateCard
                  template={template}
                  onEdit={handleEdit}
                  onPreview={handlePreview}
                />
              </Col>
            ))}
          </Row>
        ))}

        {totalPages > 1 && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: '32px',
            gap: '16px'
          }}>
            <Button
              icon={<ArrowLeftOutlined />}
              disabled={currentPage === 0}
              onClick={() => handlePageChange(category, 'prev')}
              type="text"
              style={{ color: currentPage === 0 ? '#d9d9d9' : '#1890ff' }}
            >
              Previous
            </Button>
            
            <span style={{ color: '#666', fontSize: '14px' }}>
              Page {currentPage + 1} of {totalPages}
            </span>
            
            <Button
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              disabled={currentPage === totalPages - 1}
              onClick={() => handlePageChange(category, 'next')}
              type="text"
              style={{ color: currentPage === totalPages - 1 ? '#d9d9d9' : '#1890ff' }}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    );
  };

  const tabItems = categories.map(category => ({
    key: category.key,
    label: `${category.name} (${category.count})`,
    children: renderTemplatesForCategory(category.key)
  }));

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ 
        padding: '24px', 
        backgroundColor: 'white', 
        borderBottom: '1px solid #e6f7ff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <Title level={2} style={{ margin: 0, color: '#1890ff', textAlign: 'center' }}>
          HTML Template Library
        </Title>
        <p style={{ textAlign: 'center', color: '#666', margin: '8px 0 0 0', fontSize: '16px' }}>
          Choose from our collection of professionally designed templates
        </p>
      </div>

      <Content style={{ padding: '32px 0', backgroundColor: '#f5f5f5',  }}>
        <Tabs
          defaultActiveKey="approval"
          centered
          size="large"
          items={tabItems}
          style={{ 
            backgroundColor: 'white',
            margin: '0 24px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}
          tabBarStyle={{ 
            padding: '0 24px',
            margin: 0,
            borderBottom: '1px solid #e6f7ff'
          }}
        />
      </Content>

      <Modal
        title={previewTemplate?.title}
        open={previewVisible}
        onCancel={() => setPreviewVisible(false)}
        footer={[
          <Button key="close" onClick={() => setPreviewVisible(false)}>
            Close
          </Button>,
          <Button 
            key="edit" 
            type="primary" 
            onClick={() => {
              if (previewTemplate) {
                handleEdit(previewTemplate);
              }
              setPreviewVisible(false);
            }}
          >
            Edit Template
          </Button>
        ]}
        width={800}
        style={{ top: 20 }}
      >
        {previewTemplate && (
          <div 
            style={{ 
              border: '1px solid #d9d9d9', 
              borderRadius: '6px', 
              padding: '16px',
              backgroundColor: 'white',
              maxHeight: '400px',
              overflow: 'auto'
            }}
            dangerouslySetInnerHTML={{ __html: previewTemplate.content }}
          />
        )}
      </Modal>
    </Layout>
  );
};

export default TemplateList;