import "./src/tokens/typography.js";

export default {
  source: ["src/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/styles/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            selector: ":root",
          },
        },
        {
          destination: "typography.css",
          format: "typography",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "src/tokens/",
      files: [
        {
          destination: "tokens.ts",
          format: "javascript/es6",
        },
      ],
    },
  },
};
