const sponsorCategoryJson = (category) => {
  if (!category) return null;

  return {
    id: category.id,
    name: category.name,
    thumbnail_url: category.thumbnail_url,
  };
};

module.exports = { sponsorCategoryJson };
