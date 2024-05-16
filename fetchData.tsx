const apiId = process.env.EXPO_PUBLIC_API_ID;
const apiKey = process.env.EXPO_PUBLIC_API_KEY;

export interface Recipe {
    recipe: {
        uri: string
        label: string
        image: string
        images: {
            THUMBNAIL: {
                url: string
                width: number
                height: number
            };
        }
        ingredients: {
            text: string
        }[]
    }
}

export const fetchRecipes = async (recipeName: string): Promise<Recipe[]> => {
    try {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=${apiId}&app_key=${apiKey}`);
        const json = await response.json();
        return json.hits;
    } catch (error) {
        console.error(error);
        return [];
    }
};
