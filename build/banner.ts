import {readFileSync} from 'fs';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const packageJSONPath = join(dirname(fileURLToPath(import.meta.url)), '../package.json');
const packageJSON = JSON.parse(readFileSync(packageJSONPath, 'utf8'));

const banner: string =
    `/**
 * MapLibre GL JS
 * @license 3-Clause BSD. See LICENSE.txt
 */`;

export default banner;
