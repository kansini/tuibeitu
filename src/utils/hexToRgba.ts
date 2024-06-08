const hexToRgba = (hex: string, opacity: number) => {
    const isValidHex: boolean = /^#[\da-f]{6}$/i.test(hex)
    return isValidHex ? `rgba(${[1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)).join(',')},${opacity})` : ''
}

export {hexToRgba}
