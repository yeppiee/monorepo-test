import * as yaml from 'yaml'
import * as fs from 'fs'
import path from 'path'
import { SeedPacketModel } from '../models/seed-packet.model'

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'seeds.yml')

const data = fs.readFileSync(DATA_FILE_PATH, 'utf8')

interface SeedData {
  seedPackets: SeedPacketModel[]
}

export async function loadData(): Promise<SeedData> {
  const seeds: SeedData = yaml.parse(data)
  return seeds
}

export default loadData
