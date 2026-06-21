import { createRequire } from "node:module";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const root = fileURLToPath(new URL("..", import.meta.url));

const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
if (nodeMajor < 22 || nodeMajor >= 25) {
  throw new Error(
    `Expected Node >=22 and <25 for this project; found ${process.version}.`
  );
}

for (const pkg of [
  "astro",
  "@astrojs/mdx",
  "@astrojs/sitemap",
  "@tailwindcss/vite",
  "tailwindcss",
  "vite",
]) {
  require.resolve(pkg);
}

function listFiles(dir, prefix = ".") {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (
      ["node_modules", "dist", ".astro"].includes(entry.name) ||
      entry.name.startsWith(".git")
    ) {
      continue;
    }

    const fullPath = join(dir, entry.name);
    const relativePath = `${prefix}/${entry.name}`;

    if (entry.isDirectory()) {
      files.push(...listFiles(fullPath, relativePath));
    } else if (entry.isFile() && !entry.name.endsWith(".DS_Store")) {
      files.push(relativePath);
    }
  }

  return files;
}

const trackedPaths = listFiles(root);

const unreadableFiles = trackedPaths.filter((path) => {
  const fullPath = join(root, path);
  const expectedSize = statSync(fullPath).size;
  const actualSize = readFileSync(fullPath).byteLength;
  return expectedSize === 0 || actualSize !== expectedSize;
});

if (unreadableFiles.length > 0) {
  throw new Error(
    `Unreadable or cloud-placeholder project files found. Use Finder "Keep Downloaded" on this folder, then rerun pnpm smoke:\n${unreadableFiles.join("\n")}`
  );
}

console.log(`Smoke checks passed on ${process.version}.`);
