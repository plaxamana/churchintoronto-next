const fs = require("fs");
const path = require("path");
const sermons = require("./sermons.json");

const output = sermons.map((sermon) => ({
  _type: "sermon",
  title: sermon.title,
  slug: {
    _type: "slug",
    current: sermon.slug,
  },
  preacher: sermon.preacher,
  date: sermon.date,
  audioUrl: sermon.audioUrl,
}));

const ndjson = output.map((doc) => JSON.stringify(doc)).join("\n");
fs.writeFileSync(path.join(__dirname, "sermons.ndjson"), ndjson);

console.log("✅ sermons.ndjson created");
