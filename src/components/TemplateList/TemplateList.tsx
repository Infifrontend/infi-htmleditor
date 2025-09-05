import React, { useState } from "react";
import { Layout, Typography, Tabs, Row, Col, Button, Modal } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
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

  const handlePageChange = (category: string, direction: "next" | "prev") => {
    setCurrentPages((prev) => {
      const templates = getTemplatesByCategory(category);
      const totalPages = Math.ceil(templates.length / templatesPerPage);
      const currentPage = prev[category] || 0;

      let newPage = currentPage;
      if (direction === "next" && currentPage < totalPages - 1) {
        newPage = currentPage + 1;
      } else if (direction === "prev" && currentPage > 0) {
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
            <Button
              icon={<ArrowLeftOutlined />}
              disabled={currentPage === 0}
              onClick={() => handlePageChange(category, "prev")}
              type="text"
              className={`cls-btn-prev ${
                currentPage === 0 ? "cls-btn-disabled" : ""
              }`}
            >
              Previous
            </Button>

            <span className="cls-page-info">
              Page {currentPage + 1} of {totalPages}
            </span>

            <Button
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              disabled={currentPage === totalPages - 1}
              onClick={() => handlePageChange(category, "next")}
              type="text"
              className={`cls-btn-next ${
                currentPage === totalPages - 1 ? "cls-btn-disabled" : ""
              }`}
            >
              Next
            </Button>
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
          className="cls-tabs"
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
