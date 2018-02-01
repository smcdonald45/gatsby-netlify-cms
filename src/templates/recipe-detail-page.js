import React from 'react';
import graphql from 'graphql';
import { withPrefix } from 'gatsby-link';

import './rewe.css';
import whatsAppImage from './images/WhatsApp.svg';
import fullScreenImage from './images/fullscreen.svg';
import expertImage from './images/ernaehrungsexpertin.jpg'

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

const renderTotalTime = (totalTime) => {
  if (totalTime) {
    return (
      <div className="font-style-body-2 font-weight-bold info-item-label w-100-p">
        Gesamt: {totalTime}
      </div>
    );
  }
  return null;
};

const renderPreparationTime = (preparationTime) => {
  if (preparationTime) {
    return (
      <div className="font-style-body info-item-label w-100-p">Zubereitung: {preparationTime}</div>
    );
  }
  return null;
};

const RecipeInfo = ({ difficulty, preparationTime, totalTime }) => (
  <div className="recipe-info">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-7 item-wrapper d-flex justify-content-between flex-nowrap align-items-center recipe-info-summary">
          <div className="info-item info-item-time d-flex flex-column flex-wrap text-left">
            {renderTotalTime(totalTime)}
            {renderPreparationTime(preparationTime)}
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

const RecipeDetailPortions = () => (
  <div className="portions">
    <div className="shop-button-wrapper">
      <a href="#" className="btn btn-color hidden-print read-mode-button">
        <span className="label-mobile">Zubereitung</span>
        <span className="label-desktop">Kochansicht</span>
        <img src={withPrefix(fullScreenImage)} />
      </a>
    </div>
    <h2
      className="h2 visible-print font-style-body-2 print-amount-label"
      id="jcr-4a8b98f6-94ff-426c-8230-fb23052245ad"
    >
      Zutaten für
      <span className="print-amount">4</span>
      Portionen
    </h2>
    <hr className="visible-print" />

    <div className="widget hidden-print">
      <a className="btn plus " />
      <a className="btn minus" />
      <div className="text font-style-body">
        <span className="amount">
          <input type="text" className="font-style-body" name="portions" value="4" maxLength="2" />
        </span>
        <input type="hidden" name="recipe_id" value="03c3d2c6-1bd7-4f73-8ad7-b6f9b6cb0072" />{' '}
        Portionen
      </div>
    </div>
  </div>
);

const RecipeDetailIngredients = ({ ingredients }) => (
  <ul className="list-unstyled ingridient-list font-style-body">
    {ingredients.map(ing => (
      <li key={ing.ingredient} data-unit="g">
        <input type="hidden" name="ingredient[id]" value="ffe3b731-3a8a-43af-8306-418c07783443" />
        <input type="hidden" className="amount" name="ingredient[amount]" value={ing.quantity} />
        <div className="form-group rewe-checkbox ">
          <label>
            <input type="checkbox" className="no-mouseflow " name="" value="" checked="" />
            <div className="state-indicator" />
            <div className="label-text">
              <span className="amount-text">{ing.quantity}</span>
              <span className="unit">{ing.unit}</span>
              {ing.ingredient}
            </div>
          </label>
        </div>
      </li>
    ))}
  </ul>
);

const RecipeDetail = ({ steps, ingredients }) => (
  <section className="recipe-details-v2">
    <div className="container ">
      <div className="row recipe-row">
        <div className="col-xs-12 col-md-6  col-lg-7 col-print-8 step-container ">
          <div className="read-mode-header">
            <div className="reader-btn left">
              <a href="#" data-read-close="#recipe">
                <p>
                  Zurück
                  <span className="hidden-xs hidden-sm">zum Rezept</span>
                </p>
              </a>
            </div>
            <div className="reader-btn right">
              <a href="#" data-read-close="#recipe">
                <span className="hidden-xs hidden-sm">Vollbildansicht schließen </span>
              </a>
            </div>
            <div className="titel">
              <h2
                className="h2 font-style-subhead-2 margin-bottom-0"
                id="jcr-4a8b98f6-94ff-426c-8230-fb23052245ad"
              >
                Cannelloni mit Hackfleisch
              </h2>
            </div>
          </div>

          <div
            className="visible-md-block visible-lg-block controller read-mode-layer print-force-visible"
            data-read-mode-container="#recipe"
            data-recipe-title="Cannelloni mit Hackfleisch"
            data-recipe-amount="4"
            data-controller="master/modules/ReadMode"
          >
            <div className="recipe-steps read-mode-show">
              <h2
                className="h2 hidden-xs hidden-sm font-style-headline read-mode-hidden"
                id="jcr-4a8b98f6-94ff-426c-8230-fb23052245ad"
              >
                Zubereitung
                <div className="pull-right hidden-print">
                  <div
                    className="print-button controller"
                    data-controller="master/fragments/RecipePrintButton"
                    data-recipe-title="Cannelloni mit Hackfleisch"
                    data-recipe-amount="4"
                  >
                    <div className="print-label ">
                      <span className="font-style-body ">
                        <span className="hidden-md">Rezept </span>ausdrucken
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pull-right hidden-print">
                  <span
                    className="controller hidden-xs hidden-sm favor-wrapper"
                    data-controller="master/modules/RecipeCard"
                    data-uuid="0e66ce1f-06d3-450c-aa06-e7ba201089ec"
                    data-recipe-title="Cannelloni mit Hackfleisch"
                    data-recipe-amount="4"
                    data-recipe-update-amount="true"
                    data-confirm-favor="false"
                  >
                    <span className="rdk-recipe-favor text-variant">
                      <div data-favor="">
                        <span className="favored-text font-style-body ">
                          <span className="hidden-md">Rezept </span>gespeichert
                        </span>
                        <span className="unfavored-text font-style-body ">
                          <span className="hidden-md">Rezept </span>speichern
                        </span>
                      </div>

                      <div className="arrow-box position-down ">
                        In
                        <a href="https://www.rewe.de/meine-rezepte/" data-favorites-link="">
                          Meine Rezepte
                        </a>{' '}
                        gespeichert
                      </div>
                    </span>
                  </span>
                </div>
              </h2>
              <hr className="hidden-xs hidden-sm read-mode-hidden" />

              <ol className="recipe-preparation">
                {steps.map((step, _id) => (
                  <li key={step.description + _id} className=" recipe-step avoid-pbi">
                    <div className="text font-style-body">
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>expertImage
            </div>
            <div
              className="expert-tipp read-mode-show hidden-print controller "
              data-controller="master/modules/ExpertTooltip"
            >
              <div className="row">
                <div className="expert col-xs-12 col-sm-3 col-print-3">
                  <div className="image">
                    <img src={withPrefix(expertImage)} alt="Sophie" />
                  </div>
                  <span className="expert-name font-style-body">Sophie</span>
                </div>
                <q className="quote col-xs-12 col-sm-8 col-print-8 font-style-body-2">
                  <p>
                    Auf Nummer sicher gehen Sie, wenn Sie den Auflauf zunächst 15-20 Minuten mit
                    Alufolie in den Backofen stellen und ihn erst am Ende offen braun werden lassen.
                  </p>
                </q>
              </div>
            </div>
            <div className="read-mode-show greetings font-style-body-2">
              <p className="text">Viel Spaß beim Nachkochen!</p>
            </div>
          </div>
          <div>
            <div className="recipe-tags margin-bottom-3 hidden-print ">
              <h2
                className="h2 margin-bottom-0 font-style-headline"
                id="jcr-4a8b98f6-94ff-426c-8230-fb23052245ad"
              >
                Schlagwörter
              </h2>

              <hr className="margin-bottom-half" />

              <ul className="list-unstyled tags-list clearfix">
                <li className="tag-item">
                  <a href="https://www.rewe.de/rezepte/Nudeln-Pasta/">Nudeln/Pasta</a>
                </li>

                <li className="tag-item">
                  <a href="https://www.rewe.de/rezepte/Fleisch/">Fleisch</a>
                </li>

                <li className="tag-item">
                  <a href="https://www.rewe.de/rezepte/Hauptspeise/">Hauptspeise</a>
                </li>

                <li className="tag-item">
                  <a href="https://www.rewe.de/rezepte/leicht/">Geringer Aufwand</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-5 col-md-offset-1 col-lg-4  col-print-4  col-print-offset-0 print-force-visible">
          <div
            className="recipe-ingridients controller"
            data-controller="master/fragments/recipes/Ingredients"
            data-recipe-title="Cannelloni mit Hackfleisch"
          >
            <div className="recipe-ingridient-content" action="//shop.rewe.de/" target="_self">
              <RecipeDetailPortions />
              <div className="hint font-style-caption margin-vertical-half hidden">
                Sie möchten mehr oder weniger Portionen zubereiten? Denken Sie daran, auch die
                Mengen in den Zubereitungschritten anzupassen.
              </div>

              <RecipeDetailIngredients ingredients={ingredients} />
              <div
                className="recipe-whatsapp visible-xs-block margin-bottom-1 hidden-print"
                data-title="Cannelloni mit Hackfleisch"
                data-link="https://www.rewe.de/rezepte/cannelloni-mit-hackfleisch/"
                data-img={withPrefix(whatsAppImage)}
              >
                <a
                  className="btn btn-block btn-default"
                  href="whatsapp://send?text=Cannelloni%20mit%20Hackfleisch%0AZutaten%20f%C3%BCr%204%20Personen%0A%0A750%20g%20Hackfleisch%0A2%20EL%20%C3%96l%0AZwiebel%0A2%20Knoblauchzehen%0A600%20g%20passierte%20Tomaten%0ASalz%0APfeffer%0A1%20EL%20Zucker%0A250%20g%20Cannelloni%0A25%20g%20Butter%0A25%20g%20Mehl%0A300%20ml%20Milch%0A70%20g%20Frischk%C3%A4se%0A70%20g%20Parmesan%0Ageriebene%20Muskatnuss%0A0.5%20Bund%20Basilikum%0A%0A%0Ahttps%3A%2F%2Fwww.rewe.de%2Frezepte%2Fcannelloni-mit-hackfleisch%2F"
                >
                  <img src={withPrefix(whatsAppImage)} alt="icon" />
                  <span className="label">Zutaten per WhatsApp teilen</span>
                </a>
              </div>
              <div className="shop-button-wrapper">
                <a
                  className="btn btn-color hidden-print "
                  href="//shop.rewe.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  name=""
                >
                  <span className="label" />

                  <div
                    className="shop-button "
                    data-rewe-button=""
                    data-user-servings="4"
                    data-rewe-button-size="xl"
                  >
                    <a
                      className="rewe-delivery-button rewe-button rewe-button-size-xl"
                      href="https://shop.rewe.de/api/ingredients/mapper"
                    >
                      Delivery Button
                    </a>
                  </div>
                  <script
                    type="text/javascript"
                    src="https://shop.rewe.de/ingredients/button.js"
                    async=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div className="rdkv2">
      <RecipeHeader title={post.frontmatter.title} image={post.frontmatter.image} />
      <RecipeInfo
        difficulty={post.frontmatter.difficulty}
        preparationTime={post.frontmatter.preparationTime}
        totalTime={post.frontmatter.totalTime}
        steps={post.frontmatter.steps}
      />
      <RecipeDetail steps={post.frontmatter.steps} ingredients={post.frontmatter.ingredients} />
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
        preparationTime
        totalTime
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
