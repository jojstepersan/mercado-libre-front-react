import React, { useState, useEffect } from 'react';
import '../assets/css/Items.scss';
import history from "../service/history";
import { provider } from '../service';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions';


const Items = ({
  selectArticle
}) => {

  const [allArticles, getallArticles] = useState([]);
  useEffect(() => {
    async function getArticles(selected) {
      try {
        const articles = await provider.getArticles(selected);
        if (
          articles &&
          articles.status === 200 &&
          articles.data &&
          articles.data.results
        ) {
          getallArticles(articles.data.results);
        }
      } catch (e) {
        handleToErrors(e)
      }
    };

    getArticles(selectArticle)
  }, [selectArticle]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (
      allArticles.length > 0 &&
      allArticles[0].category_id
    ) dispatch(actions.setCategoryId(allArticles[0].category_id));
  })


  const renderArticle = (article) => {
    const { thumbnail, title, price, address, id } = article;

    return (
      <div
        className="item"
        onClick={() => history.push({ pathname : '/items/' + id }) }
        key={id}
      >

        <div className="container image">
          <img src={ thumbnail } alt="Mercado Libre logo" />
        </div>

        <div className="container desciption">
          <p className="price">$ { price }</p>
          <h3>{ title }</h3>
        </div>

        <div className="container address">
          <p>
            { address.city_name }
            <br />
            { address.state_name }
          </p>
        </div>

      </div>
    )

  }

  return (
    <div className="Items">
      { allArticles.map(article => renderArticle(article) ) }
    </div>
  );
}
export { Items };

const handleToErrors = (error) => {
  const backendError = error.message ? error.message : "Error imprevisto";
  alert(backendError)
};
