import express from "express";
import * as yaml from "yaml";
import cors from 'cors'
import * as fs from "fs";
import path from "path";

const data = fs.readFileSync(
  path.join(process.cwd(), "src", "data", "seeds.yml"),
  "utf8"
);
const seeds = yaml.parse(data);

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({ origin: '*' }))

app.get("/api/seeds", (req, res) => {
  res.json(seeds);
});

app.listen(PORT, () => {
  console.log(`logger listening on PORT ${PORT}`);

});
