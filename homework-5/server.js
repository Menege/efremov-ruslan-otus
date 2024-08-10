const fs = require('fs');
const { Transform, pipeline } = require('stream');
const path = require('path');

function sanitizeWord(word) {
    return word.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '').toLowerCase();
}

class WordSplitter extends Transform {
    constructor() {
        super({ readableObjectMode: true });
        this._buffer = '';
    }

    _transform(chunk, encoding, done) {
        let text = this._buffer + chunk.toString();
        let words = text.split(/\s+/);
        this._buffer = words.pop(); // Сохраняем остаток для следующего чанка
        words.forEach(word => this.push(word));
        done();
    }

    _flush(done) {
        if (this._buffer) {
            this.push(this._buffer);
        }
        done();
    }
}

class WordIndexer extends Transform {
    constructor() {
        super({ writableObjectMode: true, readableObjectMode: true });
        this.wordMap = {};
    }

    _transform(word, encoding, done) {
        word = sanitizeWord(word);
        if (word) {
            this.wordMap[word] = (this.wordMap[word] || 0) + 1;
        }
        done();
    }

    _flush(done) {
        const sortedKeys = Object.keys(this.wordMap).sort();
        const vector = sortedKeys.map(word => this.wordMap[word]);

        this.push(vector.join(','));
        done();
    }
}

function processTextFile(inputPath, outputPath) {
    pipeline(
        fs.createReadStream(inputPath),
        new WordSplitter(),
        new WordIndexer(),
        fs.createWriteStream(outputPath),
        (err) => {
            if (err) {
                console.error('Ошибка выполнения.', err);
            } else {
                console.log('Процесс завершен успешно.');
            }
        }
    );
}

const inputPath = process.argv[2];
const outputPath = path.join(__dirname, 'result.txt');

if (inputPath) {
    processTextFile(inputPath, outputPath);
} else {
    console.log('Укажите путь к текстовому файлу для обработки.');
}