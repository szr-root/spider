function convertObjectToString(obj) {
    if (!obj.words || !obj.sigBytes) {
        throw new Error("Object must have 'words' and 'sigBytes' properties");
    }

    const words = obj.words;
    const sigBytes = obj.sigBytes;

    // Create an ArrayBuffer to hold the bytes
    const byteArray = new Uint8Array(sigBytes);

    // Fill the byteArray with the bytes from words
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const byteIndex = i * 4;
        byteArray[byteIndex] = (word >> 24) & 0xFF;
        byteArray[byteIndex + 1] = (word >> 16) & 0xFF;
        byteArray[byteIndex + 2] = (word >> 8) & 0xFF;
        byteArray[byteIndex + 3] = word & 0xFF;
    }

    // Convert byteArray to string
    const str = String.fromCharCode.apply(null, new Uint8Array(byteArray));

    return str;
}