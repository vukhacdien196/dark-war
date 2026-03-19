import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const tilesDir = path.join(__dirname, '../public/rooms/tiles');
const configPath = path.join(__dirname, '../public/config/tiles/tiles_config.json');

console.log('🔍 Scanning tiles directory...');

// Read all image files from tiles directory
const tileFiles = fs.readdirSync(tilesDir)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
  .map(file => {
    // Extract code from filename (remove extension)
    const code = file.replace(/\.(jpg|jpeg|png)$/i, '');
    return { filename: file, code };
  });

console.log(`✅ Found ${tileFiles.length} tile images`);

// Read config
console.log('\n📖 Reading tiles config...');
const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));
console.log(`✅ Found ${configData.length} tile configs`);

// Map tiles
console.log('\n🔗 Mapping tiles to images...');
let matchedCount = 0;
let notFoundCount = 0;
const notFoundTiles = [];

const updatedConfig = configData.map(tile => {
  // Normalize code by removing dashes and converting to uppercase
  const normalizedCode = tile.Code.replace(/-/g, '').toUpperCase();
  
  // Find matching file
  const matchingFile = tileFiles.find(file => {
    const normalizedFilename = file.code.replace(/-/g, '').toUpperCase();
    return normalizedFilename === normalizedCode;
  });
  
  if (matchingFile) {
    matchedCount++;
    return {
      ...tile,
      Path: `/rooms/tiles/${matchingFile.filename}`
    };
  } else {
    notFoundCount++;
    notFoundTiles.push(tile.Code);
    return {
      ...tile,
      Path: null // Mark as not found
    };
  }
});

console.log(`\n📊 Results:`);
console.log(`   ✅ Matched: ${matchedCount}`);
console.log(`   ❌ Not found: ${notFoundCount}`);

if (notFoundTiles.length > 0) {
  console.log(`\n⚠️  Tiles without images (first 20):`);
  notFoundTiles.slice(0, 20).forEach(code => {
    console.log(`   - ${code}`);
  });
  if (notFoundTiles.length > 20) {
    console.log(`   ... and ${notFoundTiles.length - 20} more`);
  }
}

// Write updated config
console.log(`\n💾 Writing updated config...`);
fs.writeFileSync(
  configPath,
  JSON.stringify(updatedConfig, null, '\t'),
  'utf8'
);

console.log(`✅ Done! Updated ${configPath}`);

// Show some examples
console.log(`\n📝 Examples of mapped tiles:`);
updatedConfig
  .filter(t => t.Path)
  .slice(0, 5)
  .forEach(tile => {
    console.log(`   ${tile.Code} → ${tile.Path}`);
  });

