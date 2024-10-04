const path = require("path");

module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  "**/*.(md|json)": (filenames) => `yarn prettier --write ${filenames.join(" ")}`,
  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx)": (filenames) => [
    `yarn prettier --write ${filenames.join(" ")}`,
    "yarn ts-lint",
    `yarn eslint ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(" ")} --fix `
  ]
};
