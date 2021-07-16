import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import '../../assets/css/Home.scss';
import {Search,Article,Items,Breadcrumbs} from '../../components';

function Home() {
 const itemFromUrl = useParams().itemId,
    searchFromUrl = useQuery().get("search");

  const [selected, getSelected] = useState(''),
    [item, getItem] = useState();


  useEffect(() => {
    getItem(itemFromUrl)
  }, [itemFromUrl] );

  useEffect(() => {
    getSelected(searchFromUrl)
  }, [searchFromUrl] );

  const renderArticles = () => {

    if (item) {
      return (
        <Article articleId={ item }/>
      )

    } else if (!selected) {
      return ''

    } else  {
      return (
        <Items
          selectArticle = { selected }
        />
      )
    }
  }

  return (
    <div className="Home">
      <Search
        selectedSearch = { selected }
      />
      <div className="container_breadcrumbs">
        <Breadcrumbs />
      </div>
      <div className="container_articles">
        { renderArticles() }
      </div>
    </div>
  );
}

export { Home };

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
