export const isJSON = (data: string) => {
  try {
    JSON.parse(data)
    return true
  } catch (error) {
    return false
  }
}
