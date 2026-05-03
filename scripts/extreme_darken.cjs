const fs = require('fs');
const path = require('path');
const slidesDir = 'd:/Projeler/src/app/components/slides';
const files = [
  'HeroSlide.tsx', 'VisionSlide.tsx', 'VisionSlide2.tsx', 'VisionSlide3.tsx',
  'TimelineSlide.tsx', 'ComposersSlide.tsx', 'ComposersSlide2.tsx',
  'EducationSlide.tsx', 'FocusSlide.tsx', 'FocusSlide2.tsx',
  'MediaSlide.tsx', 'LegacySlide.tsx'
].filter(f => fs.existsSync(path.join(slidesDir, f)));

files.forEach((file) => {
  let content = fs.readFileSync(path.join(slidesDir, file), 'utf8');
  
  // 1. Darken the base background to pure black
  content = content.replace(/bg-neutral-900/g, 'bg-black');
  
  // 2. Reduce background gradient intensity
  content = content.replace(/from-red-900\/40/g, 'from-red-950/15');
  content = content.replace(/via-neutral-900/g, 'via-black');
  
  // 3. Further reduce orb opacity to 5-8%
  content = content.replace(/bg-red-950\/15/g, 'bg-red-950/8');
  content = content.replace(/bg-red-950\/10/g, 'bg-red-950/5');
  
  // 4. Darken glass cards even more if any bg-black/40 remains
  content = content.replace(/bg-black\/40/g, 'bg-black/60');
  content = content.replace(/bg-white\/10/g, 'bg-black/40');
  content = content.replace(/bg-white\/5/g, 'bg-black/20');

  fs.writeFileSync(path.join(slidesDir, file), content, 'utf8');
  console.log('Extra Darkened: ' + file);
});
