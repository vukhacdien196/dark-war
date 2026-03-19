import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to tiles config
const configPath = path.join(__dirname, '../public/config/tiles/tiles_config.json');

console.log('📝 Reading tiles_config.json...');
const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));

console.log(`📊 Found ${configData.length} tiles`);

// Fix dimension mapping: Size "HEIGHTxWIDTH" -> Width and Height properties
const updatedConfig = configData.map(tile => {
  const sizeParts = tile.Size.split('x');
  const height = parseInt(sizeParts[0]) || 300; // First value is HEIGHT
  const width = parseInt(sizeParts[1]) || 300;  // Second value is WIDTH
  
  return {
    ...tile,
    Width: width,   // Swap: now Width gets the second value
    Height: height  // Swap: now Height gets the first value
  };
});

console.log('✅ Dimensions updated based on Size format: HEIGHTxWIDTH');
console.log('');
console.log('📋 Examples:');
console.log('  "Size": "200x400" → Height: 200, Width: 400');
console.log('  "Size": "300x600" → Height: 300, Width: 600');
console.log('  "Size": "600x600" → Height: 600, Width: 600');

// Write updated config
fs.writeFileSync(configPath, JSON.stringify(updatedConfig, null, '\t'), 'utf8');

console.log('');
console.log('✨ Updated tiles_config.json successfully!');
console.log(`📁 File: ${configPath}`);

