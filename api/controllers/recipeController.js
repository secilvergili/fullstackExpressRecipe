import { readRecipes } from "../model/recipeModel.js";

const data = readRecipes();

export const getAllRecipes = (req, res) => {
// tarif verisinin kopyasını oluştur
const recipes = [...data];

//aratılan kelime
const search = req.query?.search?.toLowerCase();

// eğer search parametresi geldiyse filtreleme yap
if (search) {
    recipes = data.filter((recipe) => 
recipe.recipeName.toLowerCase().includes(search)
    );
}

// eğer port parametresi geldiyse sıralama yap
if(req.query.order) {
    recipes.sort((a, b) => 
        req.query.order === "asc"
    ? a.recipeTime - b.recipeTime
    : b.recipeTime - a.recipeTime
    );
}

    res.status(200).json({
        status:"success",
        results: data.length,
        recipes: data,
    });
};

export const createRecipe = (req, res) => {
    // 1) isteğin body bölümünde gelen veriye eriş

    // 2) veri bütünlüğünü kontrol et

    // 3) veriye id ekle

    // 4) tarif verisini diziye ekle

    // 5) json dosyasını güncelle

    // 6) cevap gönder
};

export const getRecipe = (req, res) => {};

export const deleteRecipe = (req, res) => {};

export const updateRecipe = (req, res) => {};

