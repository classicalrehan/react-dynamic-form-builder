/**
 *
 * @param {Object} obj - Object
 * @returns {Boolean} Returns true if object is empty, else false
 *
 */
export const isEmptyObject = (obj) => {
    if (typeof obj !== "object" || Array.isArray(obj)) {
        return true
    }
    for (const _ in obj) {
        return false
    }
    return true
}
