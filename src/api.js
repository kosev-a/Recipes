const getMealById = async (mealId) => {
    const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId
    );
    return await response.json();
};

const getCategories = async () => {
    const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    return await response.json();
};

const getFilteredCategory = async (catName) => {
    const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + catName
    );
    return await response.json();
};

export { getMealById, getCategories, getFilteredCategory };
