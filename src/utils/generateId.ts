export const generateId = (item?: string | number) => {
  return item
    ? item + Math.random().toString(36).substring(2, 9)
    : Math.random().toString(36).substring(2, 9)
}
