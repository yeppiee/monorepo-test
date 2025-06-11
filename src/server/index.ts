import * as yaml from "yaml";
import * as fs from "fs";
import path from "path";
import { initApp } from "./app";

const data = fs.readFileSync(
  path.join(process.cwd(), "src", "data", "seeds.yml"),
  "utf8"
);
const seeds = yaml.parse(data);

const PORT = process.env.PORT || 3000;

const app = initApp()

app.get("/api/seeds", (req, res) => {
  res.json(seeds);
});

app.listen(PORT, () => {
  console.log(`logger listening on PORT ${PORT}`);
});
