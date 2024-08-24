// Generate a random integer between min and max (inclusive)
const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generate a random HEX color
const randomHexColor = () => {
    const hex = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    return hex;
};

// Generate a random RGB color
const randomRgbColor = () => {
    const r = randomIntBetween(0, 255);
    const g = randomIntBetween(0, 255);
    const b = randomIntBetween(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
};

// Generate a random HSL color
const randomHslColor = () => {
    const h = randomIntBetween(0, 360);
    const s = randomIntBetween(0, 100);
    const l = randomIntBetween(0, 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
};

// Generate a color palette
const generateColorPalette = (format = 'hex', count = 5) => {
    const formats = {
        hex: randomHexColor,
        rgb: randomRgbColor,
        hsl: randomHslColor,
    };

    const generator = formats[format.toLowerCase()];

    if (!generator) {
        throw new Error('Unsupported color format. Please choose from "hex", "rgb", or "hsl".');
    }

    return Array.from({ length: count }, generator);
};

// Export the functions
module.exports = {
    randomHexColor,
    randomRgbColor,
    randomHslColor,
    generateColorPalette,
};
