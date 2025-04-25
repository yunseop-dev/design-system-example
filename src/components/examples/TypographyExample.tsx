import React from "react";
import {
  Typography,
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  Lead,
  Large,
  Small,
  Muted,
  Code,
  Blockquote,
} from "@/components/ui/typography";

/**
 * 타이포그래피 컴포넌트의 예제
 *
 * 디자인 시스템의 다양한 타이포그래피 스타일을 보여줍니다.
 */
const TypographyExample: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <H1>Heading 1 (h1)</H1>
        <H2>Heading 2 (h2)</H2>
        <H3>Heading 3 (h3)</H3>
        <H4>Heading 4 (h4)</H4>
        <H5>Heading 5 (h5)</H5>
      </div>

      <div className="space-y-4">
        <P>
          This is a regular paragraph (p) with standard text styling. LiveKlass
          Design System provides consistent typography across all user
          interfaces, ensuring readability and visual harmony.
        </P>

        <Lead>
          This is a lead paragraph that stands out with slightly larger text,
          useful for introductions or important information that needs emphasis.
        </Lead>

        <Large>
          This text uses the Large variant, which is similar to Lead but can be
          applied to any element.
        </Large>

        <Small>
          This is Small text, useful for captions, footnotes, or secondary
          information that doesn't need as much prominence.
        </Small>

        <Muted>
          This is Muted text with reduced emphasis, often used for supplementary
          information or hints.
        </Muted>
      </div>

      <div className="space-y-4">
        <P>
          Typography can include{" "}
          <Typography variant="strong">strong text</Typography> for emphasis,{" "}
          <Typography variant="emphasis">emphasized or italic text</Typography>{" "}
          for distinct voice or terminology, or{" "}
          <Typography variant="subtle">subtle text</Typography> for secondary
          information.
        </P>

        <Code>
          // This is a code block
          {`
            function example() {
              return "Hello, World!";
            }
          `}
        </Code>

        <Blockquote>
          This is a blockquote. Typography is the art and technique of arranging
          type to make written language legible, readable, and appealing when
          displayed.
        </Blockquote>
      </div>

      <div className="space-y-4">
        <P align="left">This text is left-aligned (default).</P>
        <P align="center">This text is center-aligned.</P>
        <P align="right">This text is right-aligned.</P>
        <P align="justify">
          This text is justify-aligned. It stretches to fill the full width of
          the container, creating even edges on both the left and right sides.
          This alignment is often used in books, newspapers and other
          publications where clean edges help with readability of longer text
          passages.
        </P>
      </div>
    </div>
  );
};

export default TypographyExample;
