export const validateStorageData = (data: any) => {
    if (!data) return false
    const parsedJson = JSON.parse(data)

    if (typeof parsedJson !== 'object') return false
    if (parsedJson.constructor !== Array) return false

    for (let i = 0; i < parsedJson.length; i++) {
        if (typeof parsedJson[i].text !== 'string') return false
        if (typeof parsedJson[i].isDone !== 'boolean') return false
    }

    return parsedJson
}

export const getStorageData = () => {
    const storageData = localStorage.getItem('todoList')
    const validData = validateStorageData(storageData)

    if (!validData) return []
    return validData
}