// lib/markdown.ts
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs/promises';
import path from 'path';

/**
 * Converts markdown string to HTML string.
 *
 * @param {string} markdown - The markdown content to convert.
 * @returns {Promise<string>} - A promise that resolves to the HTML string.
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

/**
 * Reads markdown content from a file.
 *
 * @param {string} filePath - The relative file path to the markdown file.
 * @returns {Promise<string | null>} - A promise that resolves to the markdown content or null if an error occurred.
 */
export async function getMarkdownContent(filePath: string): Promise<string | null> {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    return fileContents;
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return null;
  }
}