export const dateFormatter = (releaseDate: string) => {
  const formatted = new Date(releaseDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return formatted;
};