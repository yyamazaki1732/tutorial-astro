const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./data/tokens.json", "utf8"));

function replaceColorValues(obj, globalColors) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      replaceColorValues(obj[key], globalColors); // 再帰的に探索
    } else if (
      typeof obj[key] === "string" &&
      obj[key].startsWith("{") &&
      obj[key].endsWith("}")
    ) {
      let colorValue = globalColors;
      let colorRef = obj[key].slice(1, -1).split("."); // "colors.gray.900" ->
      let colorObj = colorValue[colorRef[1]][colorRef[2]];

      obj[key] = typeof colorObj === "object" ? colorObj.value : colorObj; // 参照の置き換え
    }
  });
}

replaceColorValues(data.theme.colors, data.global.colors);
// console.log(JSON.stringify(data, null, 2));
module.exports = data;
