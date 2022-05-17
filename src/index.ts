import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
dotenv.config();
import { API_URL } from './utils';

const { API_KEY, FILE_ID } = process.env as Record<string, string>;


axios.request({
  method: 'GET',
  url: `${API_URL}/v1/files/${FILE_ID}`,
  headers: {
    'X-Figma-Token': API_KEY
  }
}).then((d) => {
  fs.writeFileSync(path.resolve(__dirname, `../data/${FILE_ID}.json`), JSON.stringify(d.data));
}).catch((e) => {
  console.error(e, 1)
})
