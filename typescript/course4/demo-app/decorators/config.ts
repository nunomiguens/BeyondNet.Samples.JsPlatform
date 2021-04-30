import { ConfigStructure } from './config-structure';
import * as path from 'path';
import { ObjectUtils } from './object-utils';

import * as fs from 'fs';
import { FileSystemHost } from './file-system/file-system-host';

export class DefaultFileSystemHost implements FileSystemHost {
    appendFile(filePath: string, text: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            fs.appendFile(filePath, text, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
}

const currentDir = path.resolve(__dirname);

export const defaultConfig: ConfigStructure = {
    log: {
        fileName: path.join(currentDir, '../log/log.txt'),
    },
    server: {
        dirPath: '/',
        port: process.env.PORT == null ? 8082 : parseInt(process.env.PORT!, 10),
    },
    storage: {
        dirPath: path.join(currentDir, '../storage/data'),
        foodItemsFileName: 'food-items',
        ordersFileName: 'orders',
    },
};

const testConfig = ObjectUtils.deepClone(defaultConfig);

// test specific changes to configuration
testConfig.storage.dirPath = path.join(currentDir, '../storage/data-tests');

let config: ConfigStructure;

switch (process.env.NODE_ENV) {
    case 'test':
        config = testConfig;
        break;
    default:
        config = defaultConfig;
        break;
}

export default config;
