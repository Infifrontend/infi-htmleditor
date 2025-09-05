import React, { useEffect, useRef, useState } from "react";
import { Card, Typography, Button } from "antd";
import { EyeOutlined, CheckSquareOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";
import { Template } from "../../types";
import "./TemplateCard.scss";

const { Title } = Typography;

interface TemplateCardProps {
  template: Template;
  onEdit: (template: Template) => void;
  onPreview: (template: Template) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onEdit,
  onPreview,
}) => {
  // the following code generates a preview image of the template content using html2canvas
  // and displays it in the card. This is a workaround since rendering raw HTML directly can be unsafe.
  // In a real app, you might want to sanitize the HTML or use a safer method to render previews.
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // to capture the hidden content for preview generation
  const hiddenContentRef = useRef<HTMLDivElement>(null);

  // Generate preview image when the component mounts or when the template content changes
  useEffect(() => {
    if (hiddenContentRef.current) {
      html2canvas(hiddenContentRef.current, { backgroundColor: null }).then(
        (canvas) => {
          setImageUrl(canvas.toDataURL("image/png"));
        }
      );
    }
  }, [template.content]);

  return (
    <Card
      hoverable
      className="cls-card"
      bodyStyle={{ padding: "16px", height: "100%" }}
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
          key="use"
          type="primary"
          icon={<CheckSquareOutlined />}
          onClick={() => onEdit(template)}
          className="cls-btn-use"
        >
          Use Template
        </Button>,
      ]}
    >
      <div className="cls-card-body">
        <Title level={4} className="cls-title">
          {template.title}
        </Title>

        <div className="cls-preview-box">
          {imageUrl ? (
            <div className="cls-preview-img-container" onDoubleClick={() => onEdit(template)}>
              <img
                src={imageUrl}
                alt="template preview"
                className="cls-preview-img"
              />
            </div>
          ) : (
            <p className="cls-preview-text">Generating preview...</p>
          )}
        </div>

        {/* Hidden element for html2canvas snapshot */}
        <div
          ref={hiddenContentRef}
          style={{ position: "absolute", left: "-9999px", top: 0 }}
          dangerouslySetInnerHTML={{ __html: template.content }}
        />
      </div>
    </Card>
  );
};

export default TemplateCard;
