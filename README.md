# Random Color Generator

A lightweight JavaScript library for generating random colors in multiple formats (HEX, RGB, HSL).

## Installation

```bash
npm install @satyam-seth-learnings/gen-random-color
```

## Usages

```javascript
const { randomHexColor, randomRgbColor, randomHslColor, generateColorPalette } = require('@satyam-seth-learnings/gen-random-color');

// Generate a random HEX color
console.log(randomHexColor()); // Example: #a3e4d7

// Generate a random RGB color
console.log(randomRgbColor()); // Example: rgb(123, 45, 67)

// Generate a random HSL color
console.log(randomHslColor()); // Example: hsl(210, 50%, 50%)

// Generate a palette of 5 random HEX colors
console.log(generateColorPalette('hex', 5)); // Example: ['#a3e4d7', '#ff5733', ...]
```