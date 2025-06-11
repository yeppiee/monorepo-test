import * as yaml from 'yaml'
import * as fs from 'fs'
import path from 'path'
import { SeedPacketModel } from '../models/seed-packet.model'

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'seeds.yml')

const data = fs.readFileSync(DATA_FILE_PATH, 'utf8')

interface SeedData {
	seedPackets: SeedPacketModel[]
}

export function loadData(): SeedData {
	return yaml.parse(data) as SeedData
}

export default loadData
