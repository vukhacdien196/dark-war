import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const configPath = path.join(__dirname, '../public/config/tiles/tiles_config.json');

console.log('📖 Reading tiles config...');
const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));
console.log(`✅ Total tiles: ${configData.length}`);

// Count tiles without images
const tilesWithoutImages = configData.filter(tile => !tile.Path);
console.log(`\n⚠️  Tiles without images: ${tilesWithoutImages.length}`);

if (tilesWithoutImages.length > 0) {
  console.log('\n📋 Tiles to be removed:');
  tilesWithoutImages.forEach(tile => {
    console.log(`   - ${tile.Code} (${tile.Size}, ${tile.Group})`);
  });
}

// Filter out tiles without images
const filteredConfig = configData.filter(tile => tile.Path);

console.log(`\n✂️  Removing ${tilesWithoutImages.length} tiles...`);
console.log(`✅ Remaining tiles: ${filteredConfig.length}`);

// Write updated config
console.log(`\n💾 Writing updated config...`);
fs.writeFileSync(
  configPath,
  JSON.stringify(filteredConfig, null, '\t'),
  'utf8'
);

console.log(`✅ Done! Updated ${configPath}`);
console.log(`\n📊 Summary:`);
console.log(`   Before: ${configData.length} tiles`);
console.log(`   Removed: ${tilesWithoutImages.length} tiles`);
console.log(`   After: ${filteredConfig.length} tiles`);

