import React, { useState } from "react";
import {
  Layout,
  Typography,
  Tabs,
  Row,
  Col,
  Button,
  Modal,
  Pagination,
} from "antd";
import { Template } from "../../types";
import {
  getAllCategories,
  getTemplatesByCategory,
} from "../../data/mockTemplates";
import TemplateCard from "./../TemplateCard/TemplateCard";
import "./TemplateList.scss";

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
  const templatesPerPage = 8;
  const templatesPerRow = 4;

  const handlePageChange = (category: string, page: number) => {
    setCurrentPages((prev) => ({
      ...prev,
      [category]: page - 1, // AntD Pagination is 1-based, our state is 0-based
    }));
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

    const rows = [];
    for (let i = 0; i < currentTemplates.length; i += templatesPerRow) {
      rows.push(currentTemplates.slice(i, i + templatesPerRow));
    }

    return (
      <div className="cls-category-wrapper">
        {rows.map((rowTemplates, rowIndex) => (
          <Row key={rowIndex} gutter={[16, 16]} className="cls-template-row">
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
          <div className="cls-pagination">
            <Pagination
              current={currentPage + 1} // AntD expects 1-based
              pageSize={templatesPerPage}
              total={templates.length}
              onChange={(page) => handlePageChange(category, page)}
              showSizeChanger={false}
            />
          </div>
        )}
      </div>
    );
  };

  const tabItems = categories.map((category) => ({
    key: category.key,
    label: `${category.name} (${category.count})`,
    children: renderTemplatesForCategory(category.key),
  }));

  return (
    <Layout className="cls-template-layout">
      <div className="cls-header">
        <Title level={2} className="cls-header-title">
          HTML Template Library
        </Title>
        <p className="cls-header-subtitle">
          Choose from our collection of professionally designed templates
        </p>
      </div>

      <Content className="cls-content">
        <Tabs
          defaultActiveKey="approval"
          centered
          size="large"
          items={tabItems}
          className="cls-manage-tabs"
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
            Use Template
          </Button>,
        ]}
        width={800}
        className="cls-preview-modal"
      >
        {previewTemplate && (
          <div
            className="cls-preview-container"
            dangerouslySetInnerHTML={{ __html: previewTemplate.content }}
          />
        )}
      </Modal>
    </Layout>
  );
};

export default TemplateList;
