const fs = require('fs');
const path = require('path');
const slidesDir = 'd:/Projeler/src/app/components/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.tsx'));

files.forEach((file) => {
  let content = fs.readFileSync(path.join(slidesDir, file), 'utf8');
  
  // 1. Increase border visibility for cards
  content = content.replace(/border-white\/5/g, 'border-white/15');
  content = content.replace(/border-white\/10/g, 'border-white/20');
  
  // 2. Add subtle drop shadow to cards to separate them from background
  content = content.replace(/shadow-2xl/g, 'shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-l border-white/10');
  
  // 3. Make the cards slightly more "milky" to stand out from pure dark bg
  content = content.replace(/bg-black\/60/g, 'bg-white/[0.03] backdrop-blur-2xl');
  content = content.replace(/bg-black\/40/g, 'bg-white/[0.05] backdrop-blur-2xl');

  fs.writeFileSync(path.join(slidesDir, file), content, 'utf8');
  console.log('Fixed contrast: ' + file);
});
