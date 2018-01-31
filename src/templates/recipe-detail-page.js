import React from 'react';
import graphql from 'graphql';

import './rewe.css';

const DIFFICULTY_MAPPER = {
  1: 'Leicht',
  2: 'Mittel',
  3: 'Schwer'
};

const RecipeHeader = ({ title, image }) => (
  <div className="rdk-header recipe-detail-header has-gradient">
    <img className="picture cover hidden-print" src={image} alt="" />

    <div className="recipe-title-container">
      <div className="container">
        <div className="row">
          <div className=" col-xs-12 col-sm-10 col-lg-5 col-print-10">
            <h1 className="h1 font-style-display-04 font-style-bright headline margin-bottom-">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const RecipeInfo = ({ difficulty }) => (
  <div className="recipe-info">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-7 item-wrapper d-flex justify-content-between flex-nowrap align-items-center recipe-info-summary">
          <div className="info-item info-item-time d-flex flex-column flex-wrap text-left">
            <div className="font-style-body-2 font-weight-bold info-item-label w-100-p">
              Gesamt: 65 min
            </div>
            <div className="font-style-body info-item-label w-100-p">Zubereitung: 40 min</div>
          </div>

          <div className="info-item d-flex hidden-print">
            <span className="font-style-body info-item-label">
              {DIFFICULTY_MAPPER[difficulty || 1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RecipeDetail = () => null;

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div className="rdkv2">
      <RecipeHeader title={post.frontmatter.title} image={post.frontmatter.image} />
      <RecipeInfo difficulty={post.frontmatter.difficulty} />
      <RecipeDetail />
    </div>
  );
};

export const recipeDetailPage = graphql`
  query RecipeDetailPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        name
        image
        difficulty
        steps {
          description
        }
        ingredients {
          ingredient
          quantity
          unit
        }
      }
    }
  }
`;
