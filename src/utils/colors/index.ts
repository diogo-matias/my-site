export function hexToRGBA(hex?: string, alpha?: number) {
    if (!hex) {
        return;
    }

    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

export function RGBAToHex(orig: string) {
    var rgb = orig
        .replace(/\s/g, "")
        .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i) as unknown as any;

    if (!rgb) return orig;

    var hex = rgb
        ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
          (rgb[2] | (1 << 8)).toString(16).slice(1) +
          (rgb[3] | (1 << 8)).toString(16).slice(1)
        : orig;

    return "#" + hex;
}

export function getRandomColor() {
    const letters = "0123456789ABCDEF";

    let color = "#";

    for (let index = 0; index < 6; index++) {
        const randomIndex = Math.floor(Math.random() * letters.length);

        color += letters[randomIndex];
    }

    return color;
}
