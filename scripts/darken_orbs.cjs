const fs = require('fs');
const path = require('path');
const slidesDir = 'd:/Projeler/src/app/components/slides';
const files = [
  'HeroSlide.tsx', 'VisionSlide.tsx', 'VisionSlide2.tsx', 'VisionSlide3.tsx',
  'TimelineSlide.tsx', 'ComposersSlide.tsx', 'ComposersSlide2.tsx',
  'EducationSlide.tsx', 'FocusSlide.tsx', 'FocusSlide2.tsx',
  'MediaSlide.tsx', 'LegacySlide.tsx'
].filter(f => fs.existsSync(path.join(slidesDir, f)));

const positions = [
  { top: 'top-[-15%] left-[-15%]', bottom: 'bottom-[-15%] right-[-15%]' },
  { top: 'top-[-20%] left-[25%]', bottom: 'bottom-[-20%] right-[25%]' },
  { top: 'top-[-15%] right-[-15%]', bottom: 'bottom-[-15%] left-[-15%]' },
  { top: 'top-[25%] right-[-20%]', bottom: 'bottom-[25%] left-[-20%]' },
  { top: 'bottom-[-15%] right-[-15%]', bottom: 'top-[-15%] left-[-15%]' },
  { top: 'bottom-[-20%] left-[25%]', bottom: 'top-[-20%] right-[25%]' },
  { top: 'bottom-[-15%] left-[-15%]', bottom: 'top-[-15%] right-[-15%]' },
  { top: 'top-[25%] left-[-20%]', bottom: 'bottom-[25%] right-[-20%]' }
];

files.forEach((file, index) => {
  let content = fs.readFileSync(path.join(slidesDir, file), 'utf8');
  const pos = positions[index % positions.length];
  
  // Use darker red (red-900 or red-950) and lower opacity (10-15%)
  const topOrb = 'className="absolute ' + pos.top + ' w-[40%] h-[40%] bg-red-950/15 rounded-full blur-[120px] pointer-events-none"';
  const bottomOrb = 'className="absolute ' + pos.bottom + ' w-[40%] h-[40%] bg-red-950/10 rounded-full blur-[120px] pointer-events-none"';

  // Match the unified background structure
  content = content.replace(/className="absolute [^"]*top-[^"]* w-\[40%\] h-\[40%\] bg-red-600\/20 rounded-full blur-\[120px\] pointer-events-none"/, topOrb);
  content = content.replace(/className="absolute [^"]*bottom-[^"]* w-\[40%\] h-\[40%\] bg-red-600\/10 rounded-full blur-\[120px\] pointer-events-none"/, bottomOrb);
  
  // Also try to match the ones already varied by the previous script
  content = content.replace(/className="absolute top-\[[\s\S]*?\] [^"]*? w-\[40%\] h-\[40%\] bg-red-600\/20 rounded-full blur-\[120px\] pointer-events-none"/, topOrb);
  content = content.replace(/className="absolute bottom-\[[\s\S]*?\] [^"]*? w-\[40%\] h-\[40%\] bg-red-600\/10 rounded-full blur-\[120px\] pointer-events-none"/, bottomOrb);

  fs.writeFileSync(path.join(slidesDir, file), content, 'utf8');
  console.log('Clockwise & Darkened: ' + file);
});
