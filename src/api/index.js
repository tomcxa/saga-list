export const getServices = async (id) => {
    const url = process.env.REACT_APP_SERVICES_URL
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}

export const getService = async (id) => {
    const url = process.env.REACT_APP_SERVICES_URL + `/${id}`
    console.log(url)
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}