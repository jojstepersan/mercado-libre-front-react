import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../assets/css/Article.scss';
import { provider } from '../service';
import * as actions from '../redux/actions';


const Article = ({ articleId }) => {
  const [article, updateArticle] = useState();
    useEffect(() => {
      async function getArticle(newItem) {
        if (!newItem) return ;
        try {
          const getArticle = await provider.getArticle(newItem);
          if (
            getArticle &&
            getArticle.status === 200 &&
            getArticle.data
          ) {
            let newArticle = getArticle.data;
            const getArticleDescription = await provider.getArticleDescription(newItem);
            if (
              getArticleDescription &&
              getArticleDescription.status === 200 &&
              getArticleDescription.data &&
              getArticleDescription.data.plain_text
            ) newArticle = { ...newArticle, description : getArticleDescription.data.plain_text }
            updateArticle(newArticle);
          }
        } catch (e) {
          handleToErrors(e)
        }
      };
      getArticle(articleId)
    }, [articleId]);

  const dispatch = useDispatch();
  useEffect(() => {
    if ( article && article.category_id ) dispatch(actions.setCategoryId(article.category_id));
  });

  if (!article) return (<div>Cargando...</div>)

  return (
    <div className="Article">
      <div className="container description">
          {
            article.pictures &&
            article.pictures.length > 0 && (
              <div className="container_image">
                <img src={ article.pictures[0].url } alt={article.title} />
              </div>
            )
          }
          {
            article.description && (
              <div className="container_description">
                <p className="description_title">
                  Descripción del producto
                </p>
                <p className="description_text" >
                  { article.description }
                </p>
              </div>
            )
          }
        </div>
        <div className="container price">

          <div className="sold">
            { (article.condition === "new" ? "Nuevo" : "Usado") + (article.sold_quantity ? " - " + article.sold_quantity + " vendidos" : "") }
          </div>

          <h1 className="article_name">
            { article.title }
          </h1>

          <div className="article_price">
            { "$ " + article.price }
          </div>

          <button
            type="submit"
            onClick={() => alert("Compradooo!")}
          >
            Comprar
          </button>
        </div>
        <div className="clear_fix"></div>
    </div>
  );
}

export { Article };

const handleToErrors = (error) => {
  const backendError = error.message ? error.message : "Error imprevisto";
  alert(backendError);
};
