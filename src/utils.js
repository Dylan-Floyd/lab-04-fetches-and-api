//turn abc-def-ghi into Abc Def Ghi
export function namifyString(string) {
    string = string.replaceAll('-', ' ');
    const words = string.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        let char = words[i].charAt(0);
        char = char.toUpperCase();
        result += char + words[i].slice(1) + ' ';
    }
    console.log(result);
    result.trimEnd();
    return result;
}

export function removeUnderscoreNumber(string) {
    const words = string.split('_');
    return words[0];
}