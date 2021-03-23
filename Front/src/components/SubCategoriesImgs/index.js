import React from 'react';
import { v4 as uuidv4 } from 'uuid';
//import local
import {subCategoriesData} from 'src/data';

const SubCategoriesImg = ({subCategoryData}) => {
  return (
        <div className="SubCategories">
          <img className="SubCategories__img" src={subCategoryData.image}/>
          <h2 className="SubCategories__title">{subCategoryData.title}</h2>
          <p className="SubCategories__price">{subCategoryData.price}</p>
          <button className="SubCategories__btn">+</button>
        </div>
  )
};

const SubCategoriesImgs = () => {
    return (
      <section className="ContainerSubCategoriesImg">
        {subCategoriesData.map(subCategoryData => <SubCategoriesImg key={uuidv4()} subCategoryData={subCategoryData}/>)}
      </section>
    )
};
export default SubCategoriesImgs ;
