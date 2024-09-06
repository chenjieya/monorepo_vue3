export const isString = (str: any): str is string => {
    return str && typeof str === "string"
}

export const isNumber = (num: number): num is number => {
    return typeof num === 'number'
}