// .prettierrc.js
module.exports = {
  arrowParens: 'avoid', // Omit parens when possible: (x) => x vs x => x
  singleQuote: true, // Use single quotes instead of double
  trailingComma: 'all', // Add trailing commas wherever possible
  semi: true, // Always add semicolons
  tabWidth: 2, // Indent with 2 spaces
  useTabs: false, // Use spaces instead of tabs
  bracketSpacing: true, // Add space inside object brackets { foo: bar }
  printWidth: 80, // Wrap lines that exceed 80 characters
  jsxSingleQuote: false, // Use double quotes in JSX
  bracketSameLine: false, // Put > of JSX element at the end of last line
  proseWrap: 'preserve', // Respect markdown line breaks as-is
  endOfLine: 'lf', // Consistent line endings
};
