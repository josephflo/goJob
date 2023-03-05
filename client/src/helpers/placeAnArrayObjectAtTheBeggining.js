export default function PlaceAnArrayObjectAtTheBeggining(suggestions, detail) {
  const index = suggestions?.findIndex((s) => s.id === detail.id);
  if (index !== -1) {
    suggestions?.splice(index, 1);
    suggestions?.unshift(detail);
  }

  return suggestions;
}
