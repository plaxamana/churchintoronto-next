const fs = require("fs");
const xml2js = require("xml2js");

const xml = fs.readFileSync("./churchintoronto.WordPress.2025-04-21.xml");

const run = async () => {
  const parser = new xml2js.Parser();
  const json = await parser.parseStringPromise(xml);

  const items = json.rss.channel[0].item;

  const sermons = items
    .filter((item) => item["wp:post_type"][0] === "post")
    .map((item) => ({
      title: item.title[0],
      date: item["wp:post_date"][0],
      slug: item["wp:post_name"][0],
      preacher: item["dc:creator"][0],
      audioUrl:
        item["content:encoded"][0].match(/https?:\/\/[^\s"]+\.mp3/)?.[0] ??
        null,
    }));

  fs.writeFileSync("./sermons.json", JSON.stringify(sermons, null, 2));
};

run();
