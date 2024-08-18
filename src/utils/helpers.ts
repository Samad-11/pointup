export const isEven = (num: number) => {
    return num % 2 === 0 ? true : false;
}

export function slugify(str: string) {
    return str.toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/&/g, "-and-")
        .replace(/\-\-+/g, "-")
        .replace(/\s*:\s*/g, "-")
        .replace(/\./g, "");
}
