import StyleDictionary from "style-dictionary";
import { fileHeader } from "style-dictionary/utils";

StyleDictionary.registerFormat({
  name: "typography",
  format: async ({ dictionary, file }) => {
    const header = await fileHeader({ file });

    const result = Object.keys(dictionary.tokens.typography).map((role) => {
      return Object.keys(dictionary.tokens.typography[role]).map((scale) => {
        return Object.keys(dictionary.tokens.typography[role][scale]).map((prominence) => {
          return `${role}-${scale}-${prominence}`;
        });
      });
    }).flat(3);

    return (
      header +
      "@layer components {\n" +
      result.map(item => `\n.${item} {\n  font-family: var(--typography-${item}-font-family);\n  font-weight: var(--typography-${item}-font-weight);\n  font-size: var(--typography-${item}-font-size);\n  line-height: var(--typography-${item}-line-height);\n}`).join("\n") +
      "\n}\n"
    );
  },
});
