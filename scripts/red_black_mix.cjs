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
  
  // 1. Replace the plain black background with a deep red-black radial mix
  const redBlackMix = 'bg-[#050000]';
  const mixGradient = '<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#1a0505_0%,_#000000_100%)] opacity-100" />';
  
  content = content.replace(/bg-black/g, redBlackMix);
  
  // Replace the old linear gradient with this new radial mix
  content = content.replace(/<div className="absolute inset-0 z-0 bg-gradient-to-br from-red-950\/15 via-black to-black opacity-100" \/>/, mixGradient);

  fs.writeFileSync(path.join(slidesDir, file), content, 'utf8');
  console.log('Red-Black Mix Applied: ' + file);
});
