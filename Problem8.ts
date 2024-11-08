function validateKeys<T extends object>(object: T, keys: (keyof T)[]): boolean {
    for (let i = 0; i < keys.length; i++) {
        if (!(keys[i] in object)) {
            return false;
        }
    }
    return true;
}