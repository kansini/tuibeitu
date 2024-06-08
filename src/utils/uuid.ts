const uuid = (length: number = 5,pre?:string): string => {
    let id: string = ''
    Array.from({length}).some(() => {
        id += Math.random().toString(36).slice(2)
        return id.length >= length
    })
    return `${pre}-${id.slice(0, length)}`
}
export {uuid}