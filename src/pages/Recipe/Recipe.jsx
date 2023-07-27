import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './Recipe.module.scss';
import { getMealById } from '../../api';
import { Preloader } from '../../components/Preloader';

export const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    let navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <section className={classes.wrap}>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <>
                    <h1>{recipe.strMeal}</h1>
                    <div className={classes.recipe}>
                        <div className={classes.recipe_img}>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        </div>
                        <div className={classes.recipe_info}>
                            <div className={classes.recipe_info__instructions}>
                                <h3>Recipe</h3>
                                <p>{recipe.strInstructions}</p>
                            </div>
                            <table className={classes.recipe_info__table}>
                                <thead>
                                    <tr>
                                        <th>Ingredient</th>
                                        <th>Measure</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.keys(recipe).map(key => {
                                            if (key.includes('Ingredient') && recipe[key]) {
                                                return (
                                                    <tr key={key}>
                                                        <td>{recipe[key]}</td>
                                                        <td>{
                                                            recipe[`strMeasure${key.slice(13)}`]
                                                        }</td>
                                                    </tr>
                                                );
                                            }
                                            return null;
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        {recipe.strYoutube ? (
                            <div className={classes.recipe_video}>
                                <h3>Video recipe</h3>
                                <iframe
                                    title={id}
                                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                    allowFullScreen
                                />
                            </div>
                        ) : null}
                        <p className={classes.recipe_info__tag}>Category: <span>{recipe.strCategory}</span></p>
                        {!!recipe.strArea && <p className={classes.recipe_info__tag}>Area: <span>{recipe.strArea}</span></p>}
                    </div>
                </>
            )}
            <div className={classes.btn}>
                <button onClick={goBack}>Go back</button>
            </div>
        </section>
    );
};