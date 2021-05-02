const categoriesData = require('./categories.json');
const phrasesData = require('./phrases.json');

export const LANGUAGE_NAMES = {
  MG: 'mg',
  EN: 'en',
};

export const getAllCategoriesNames = lang => {
  return categoriesData.categories.map(cat => cat.name[lang]);
};

export const getAllCategoriesIds = () => {
  return categoriesData.categories.map(cat => cat.id);
};

export const getPhraseIdsForCategory = catId => {
  const phraseIdForCategory = categoriesData.categories.find(
    cat => cat.id === catId,
  ).phrasesIds;
  return (phraseIdForCategory && phraseIdForCategory) || null;
};

export const getAllPhrases = () => {
  return phrasesData.phrases;
};

export const findPhraseCategories = phraseId => {
  return phrasesData.phrases;
};

export function findCategoryById(id) {
  throw 'not implemented!';
  // TODO implement
}
export function findPhraseById(id) {
  throw 'not implemented!';
  // TODO implement
}
