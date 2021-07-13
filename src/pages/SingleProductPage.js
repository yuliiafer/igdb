import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/api";
import { Price } from "../utils/helpers";
import {
  Loading,
  Error,
  AddToCart,
  Stars,
  PageHero,
  Feature,
} from "../components";
import styled from "styled-components";
import { MdCheckCircle } from "react-icons/md";
import { FaTimesCircle } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const SingleProductPage = () => {

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    category,
    medias = [{ url: "" }],
    image,
    link,
  } = product;

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error />;
    } 
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to games
        </Link>
        <div className="products-center">
          <img src={image} alt={name} className="active" />
          <div className="gallery">
            {medias.map((media, id) => {
              return <img src={media.url} alt={media.name} key={id} />;
            })}
          </div>
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price"> {Price(price)}</h5>
            <p className="desc"> {description}</p>
            <p className="info">
              <span>Availability: </span>
              {stock > 0 ? (
                <MdCheckCircle size="1.5em" color="#25bb32" />
              ) : (
                <FaTimesCircle size="1.5em" color="#ff3131" />
              )}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Category : </span>
              {category}
            </p>
            <h5 className="info">
              <p className="info">Official Website </p>
              <a href={link}>
                <span>
                  <GoLinkExternal size="1.5em" color="#00fff5" />
                </span>
              </a>
            </h5>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
      <Feature />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .btn {
    margin-bottom: 1rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  .main {
    height: 600px;
  }
  img {
    max-width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      object-fit: cover;
      max-width: 100%;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default SingleProductPage;
