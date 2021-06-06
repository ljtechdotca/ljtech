const path = require("path");
const fs = require("fs");
const name = process.argv[2];
if (name.indexOf(" ") > -1) {
  throw new Error("invalid name");
}

const out = path.resolve(".", "components", name.toLowerCase());
const index = path.resolve(".", "components", "index.ts");
const component = path.resolve(out, `${name}.tsx`);
const scss = path.resolve(out, `${name}.module.scss`);
fs.mkdirSync(out);

fs.writeFileSync(
  component,
  `import styles from "./${name}.module.scss"

export interface I${name}Props {
	className?: string;
  style?: React.CSSProperties;
	styleType?: string;
}

export function ${name}({ className, style, styleType = "primary" }: I${name}Props) {
  return (
    <div className={[className, styles[styleType]].filter(Boolean).join(" ")} style={style}>
			//TODO: ${name}
		</div>
  );
}`
);

fs.writeFileSync(
  scss,
  `.primary {
	border: 1px solid #dddddd;
}`
);
const indexContent = [
  ...Array.from(
    new Set(
      fs
        .readFileSync(index, "utf8")
        .split("\n")
        .map((_) => _.trim())
        .filter(Boolean)
    ).keys()
  ),
  `export * from "./${name.toLowerCase()}/${name}";`,
]
  .sort((a, b) => a.localeCompare(b))
  .join("\n");
fs.writeFileSync(index, indexContent);
