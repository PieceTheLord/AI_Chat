// app/page.tsx
import { markdownToHtml, getMarkdownContent } from "@/lib/markdown";
import React from "react";

/**
 * Renders a markdown file as HTML.
 */
export default async function MarkdownPage(): Promise<React.JSX.Element> {
  const markdownContent = await getMarkdownContent("@/app/(auth)/chat/mdx-page/page.md"); 

  if (!markdownContent) {
    return <div className=" white">Markdown content not found.</div>;
  }

  const htmlContent = await markdownToHtml(markdownContent);

  return <div style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: htmlContent }} />
}
