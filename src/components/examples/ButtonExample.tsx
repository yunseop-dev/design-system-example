import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

/**
 * 버튼 컴포넌트의 예제
 *
 * 디자인 시스템의 다양한 버튼 스타일과 크기를 보여줍니다.
 */
const ButtonExample: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000); // 2초 후 로딩 상태 해제
  };

  return (
    <div className="space-y-8 p-6">
      {/* 버튼 변형 */}
      <div className="space-y-4">
        <Typography variant="h3">Button Variants</Typography>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
        </div>
      </div>

      {/* 버튼 크기 */}
      <div className="space-y-4">
        <Typography variant="h3">Button Sizes</Typography>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </Button>
        </div>
      </div>

      {/* 버튼 상태 */}
      <div className="space-y-4">
        <Typography variant="h3">Button States</Typography>
        <div className="flex flex-wrap gap-4">
          <Button>Enabled</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading={isLoading} onClick={handleLoadingClick}>
            {isLoading ? "Loading..." : "Click to Load"}
          </Button>
          <Button
            isLoading={isLoading}
            loadingPosition="end"
            onClick={handleLoadingClick}
          >
            {isLoading ? "Loading..." : "Loading at End"}
          </Button>
        </div>
      </div>

      {/* 버튼 아이콘 */}
      <div className="space-y-4">
        <Typography variant="h3">Button with Icons</Typography>
        <div className="flex flex-wrap gap-4">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            Edit
          </Button>
          <Button variant="outline">
            Download
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </Button>
        </div>
      </div>

      {/* 버튼 조합 예시 */}
      <div className="space-y-4">
        <Typography variant="h3">Example Combinations</Typography>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            Create Classroom
          </Button>
          <Button variant="outline" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Search
          </Button>
          <Button variant="ghost" size="default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            Add More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExample;
