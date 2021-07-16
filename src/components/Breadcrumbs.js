import React, { useState, useEffect } from 'react';
import '../assets/css/Breadcrumbs.scss';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
    const categoryId = useSelector(store => store.setCategoryId.categoryId);

    const [ categories, getCategories ] = useState([]);
    useEffect(() => {

      async function getAllCategories(newCategory) {
        if (!newCategory) return ;

        try {

          const customResult = [
            {
              "id": "MLA1000",
              "name": "Electrónica, Audio y Video"
            },
            {
              "id": "MLA409810",
              "name": "Audio"
            },
            {
              "id": "MLA431428",
              "name": "Reproductores Portátiles"
            },
            {
              "id": "MLA7262",
              "name": "iPod"
            }
          ];
          getCategories(customResult)
        } catch (e) {
          handleToErrors(e)
        }
      };

      getAllCategories(categoryId)
    }, [categoryId]);

  return (
    <div className="Breadcrumbs">
      <ul className="container_categories">

        {
          categories.length > 0 && (
            categories.map(category => (
              <li key={ category.id }>
                <Link
                  to={{
                    pathname: '/items',
                    search :'?search=' + category.name
                  }}
                >
                  { category.name }
                </Link>
              </li>
            ))
          )
        }
      </ul>
    </div>
  );
}
export { Breadcrumbs };

const handleToErrors = (error) => {
  const backendError = error.message ? error.message : "Error imprevisto";
  alert(backendError)
};
