const fs = require('fs').promises;
const path = require('path');

async function tree(dir, depth = 2, currentDepth = 0) {
    const result = {
        name: path.basename(dir),
        items: []
    };

    if (currentDepth >= depth) {
        return result;
    }

    const items = await fs.readdir(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stats = await fs.stat(fullPath);

        if (stats.isDirectory()) {
            result.items.push(await tree(fullPath, depth, currentDepth + 1));
        } else {
            result.items.push({
                name: item
            });
        }
    }

    return result;
}

const startDir = './';

async function main() {
    try {
        const directoryStructure = await tree(startDir);
        console.log(JSON.stringify(directoryStructure, null, 2));
    } catch (error) {
        console.error('Ошибка чтения директории:', error);
    }
}

main();