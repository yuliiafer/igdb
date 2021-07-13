import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";
import axios from "axios";
import game2 from "../assets/game2.jpg";
import moment from "moment";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const now = moment().unix();
  const last3MonthsUnix = moment().subtract(3, "months").unix();
  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios({
          url: process.env.REACT_APP_FIELDS_PATH,
          method: "POST",
          headers: {
            Accept: "application/json",
            "Client-ID": process.env.REACT_APP_CLIENT_ID,
            Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
          },
          data: `fields name, screenshots, screenshots.url, cover.url, cover.image_id, follows, genres.name, involved_companies.developer, involved_companies.company.name, involved_companies.company.logo.image_id, aggregated_rating, screenshots.image_id, videos.video_id, videos.name, rating_count, first_release_date, release_dates.human, release_dates.date, release_dates.category, summary;
          sort follows desc;
          where first_release_date > ${last3MonthsUnix} & first_release_date < ${now} & (follows > 1 | rating_count > 10);
          limit 12;`,
        });

        if (response.status === 200) {
          setGames(response.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    getGames();
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      {games.map((game) => {
        let id = game.id;
        let name = game.name;
        const imageUrl = (name) => {
          if (name) {
            return `https://images.igdb.com/igdb/image/upload/t_cover_big/${name}.jpg`;
          }
        };

        return (
          <Wrapper key={id}>
            <div className="container">
              <img src={imageUrl(game.cover?.image_id) ?? game2} alt={name} />
              <GenreContainer>
                {game.genres.map((genre, i) => {
                  if (i < 3) {
                    return <Genre key={i}>{genre.name}</Genre>;
                  } else {
                    return null;
                  }
                })}
              </GenreContainer>
            </div>
            <footer>
              <h5>{name.substring(0, 30)}</h5>
              <p>{game.genres.name}</p>
            </footer>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: flex;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
    position: relative;
  }

  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    font-weight: 400;
    font-size: 12px;
    display: block;
    color: var(--clr-primary-4);
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  @media (min-width: 550px) {
    footer {
      display: flex;
    }
    footer h5,
    footer p {
      font-size: 16px;
    }
  }
`;
const GenreContainer = styled.div`
  margin: 5px 0;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  overflow: hidden;
`;
const Genre = styled.button`
  padding: 8px 10px;
  font-size: 0.8rem;
  height: fit-content;
  border-radius: var(--radius);
  margin-right: 5px;
  margin-bottom: 5px;
  color: var(--clr-white);
  border: 1px solid var(--clr-grey-4);
  background: transparent;
  letter-spacing: var(--spacing);
  @media screen and (max-width: 400px) {
    font-size: 0.6rem;
    padding: 6px 8px;
  }
`;
export default Games;
