// Renders the homepage hero (Wasatch skyline over a water-blue gradient) to WEBP, 1200px wide.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const W = 1200;
const H = 720;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#072A40"/>
      <stop offset="0.55" stop-color="#0B3A55"/>
      <stop offset="1" stop-color="#2F7391"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.78" cy="0.3" r="0.45">
      <stop offset="0" stop-color="#F6A56B" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#F6A56B" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1E5F7E"/>
      <stop offset="1" stop-color="#0B3A55"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <path d="M0 470 L110 360 L190 420 L300 300 L380 380 L470 280 L560 390 L650 320 L740 410 L850 310 L950 400 L1060 330 L1200 430 L1200 H0 Z"
        fill="#2B6C8C" opacity="0.55" transform="translate(0 20)"/>
  <path d="M0 520 L90 440 L170 490 L280 380 L360 470 L450 400 L540 480 L640 410 L730 490 L840 400 L940 480 L1050 420 L1200 500 L1200 H0 Z"
        fill="#164C6C" opacity="0.85" transform="translate(0 30)"/>
  <path d="M0 590 L120 520 L220 575 L330 500 L430 580 L540 520 L650 590 L760 530 L880 595 L1000 540 L1100 590 L1200 560 L1200 H0 Z"
        fill="#0B3A55"/>
  <rect y="600" width="${W}" height="${H - 600}" fill="url(#water)"/>
  <g stroke="#9CCBE0" stroke-width="2" stroke-linecap="round" opacity="0.35">
    <path d="M80 640h140M300 662h200M580 636h160M820 668h220M1060 645h90M160 690h120M640 700h200"/>
  </g>
  <g fill="#fff" opacity="0.14">
    <path d="M930 150 c0 0 -34 52 -34 78 a34 34 0 0 0 68 0 c0 -26 -34 -78 -34 -78z"/>
    <path d="M1040 90 c0 0 -20 31 -20 46 a20 20 0 0 0 40 0 c0 -15 -20 -46 -20 -46z"/>
    <path d="M840 60 c0 0 -14 22 -14 33 a14 14 0 0 0 28 0 c0 -11 -14 -33 -14 -33z"/>
  </g>
</svg>`;

mkdirSync("src/assets/images", { recursive: true });
const info = await sharp(Buffer.from(svg)).resize(W).webp({ quality: 80, effort: 6 }).toFile("src/assets/images/hero-slc.webp");
console.log(info);
