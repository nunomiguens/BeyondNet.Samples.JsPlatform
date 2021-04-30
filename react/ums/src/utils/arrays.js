export function mapArrayTo(array, type = window.required()) {
  if (Array.isArray(array)) return array.map(item => new type(item))

  return []
}
