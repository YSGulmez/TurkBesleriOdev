const fs = require('fs');
const path = require('path');
const slidesDir = 'd:/Projeler/src/app/components/slides';
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.tsx'));

files.forEach((file) => {
  let content = fs.readFileSync(path.join(slidesDir, file), 'utf8');
  
  // Ensure main div is black/dark
  content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-[#050000]');
  
  // Card styles: Use semi-transparent white/black mix to get a "glass" that stands out
  // Pattern: bg-[...] backdrop-blur-[...] border border-[...]
  const cardRegex = /className="([^"]*?bg-[^"]*?backdrop-blur-[^"]*?border[^"]*?)"/g;
  
  content = content.replace(cardRegex, (match, classes) => {
    // Replace current bg and border with something more visible
    let newClasses = classes
      .replace(/bg-[^ ]+/g, 'bg-white/[0.03]')
      .replace(/backdrop-blur-[^ ]+/g, 'backdrop-blur-3xl')
      .replace(/border-white\/[0-9]+/g, 'border-white/20')
      .replace(/border-red-500\/[0-9]+/g, 'border-red-500/30');
    
    if (!newClasses.includes('shadow-')) {
      newClasses += ' shadow-[0_20px_50px_rgba(0,0,0,1)]';
    }
    
    return `className="${newClasses}"`;
  });

  fs.writeFileSync(path.join(slidesDir, file), content, 'utf8');
  console.log('Final Polish: ' + file);
});
