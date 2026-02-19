import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

const root = process.cwd();
const blogDir = path.join(root, "src", "content", "blog");
const outFile = path.join(root, "src", "content", "blog.generated.json");

if (!fs.existsSync(blogDir)) {
  console.error(`Blog directory not found: ${blogDir}`);
  process.exit(1);
}

const fileNames = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

const posts = [];

for (const fileName of fileNames) {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(blogDir, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const compiled = await compile(content, {
    outputFormat: "function-body",
    development: false,
  });
  const { default: MDXContent } = await run(compiled, runtime);
  const html = renderToStaticMarkup(React.createElement(MDXContent));

  posts.push({
    slug,
    content,
    html,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    image: data.image || null,
  });
}

fs.writeFileSync(outFile, JSON.stringify(posts, null, 2));
console.log(`Generated ${posts.length} posts -> ${outFile}`);
