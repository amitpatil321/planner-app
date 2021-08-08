export function checkIfDirty(formData) {
  const { title, genre, list, description } = formData;
  if (
    (title && title !== "") ||
    (genre && genre !== "") ||
    (list && list.length > 0) ||
    (description && description !== "")
  ) {
    return true;
  }
  return false;
}
