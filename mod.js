// deno-lint-ignore-file
import fs from "node:fs";
import chalk from "npm:chalk"

/**
 * @description Create package.json with Deno, for publishing package install node: https://nodejs.org/en/download
 */
export async function createPackage(packageJSON: any) {
  const content = JSON.stringify(packageJSON, null, 2);
  if(fs.existsSync("package.json")) {
     console.log(chalk.red.bold(`package.json already exists, make sure you deleted it.`))
  } else {
     const fullPath = new URL(".", import.meta.url);
const directory = decodeURIComponent(fullPath.pathname);

const normalized =
  Deno.build.os === "windows"
    ? directory.slice(1).replaceAll("/", "\\")
    : directory;
    
    const path = `${normalized}package.json`
  await Deno.writeTextFile("package.json", content);
   console.log(chalk.green(`Successfully created package.json. U can look it from here: ${path}`))
   return;
  }
}
