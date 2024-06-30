export const deepEqual=(obj1, obj2)=> {
    if (obj1 === obj2) {
        return true; // Same object or both are null/undefined
    }

    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false; // One is not an object or one is null
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false; // Different number of keys
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false; // Key not present in both objects or values not deeply equal
        }
    }

    return true;
}
