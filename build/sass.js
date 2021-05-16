/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const components = fs
  .readdirSync(path.join(__dirname, "../src/components"))
  .filter(
    (item) => path.extname(item) !== ".scss" && path.extname(item) !== ".ts"
  );

const globalSass = fs
  .readdirSync(path.join(__dirname, "../src/components"))
  .filter((item) => path.extname(item) == ".scss");

components.forEach((component) => {
  const sourceSassPath = path.join(
    __dirname,
    `../src/components/${component}/index.scss`
  );
  const isExistSass = fs.existsSync(sourceSassPath);
  if (isExistSass) {
    const sass = fs.readFileSync(sourceSassPath);
    const targetSassPath = path.join(
      __dirname,
      `../dist/${component}/index.scss`
    );
    fs.writeFileSync(targetSassPath, sass);
  }
});

globalSass.forEach((item) => {
  const sourcePath = path.join(__dirname, `../src/components/${item}`);
  const content = fs.readFileSync(sourcePath);
  const targetPath = path.join(__dirname, `../dist/${item}`);
  fs.writeFileSync(targetPath, content);
});
