import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import ItemMain from "../components/singleItem/ItemMain";
import { useItemContext } from "../context/itemContext";

function SingleItem() {
  const { handleIdMiddleware, item,  isLoading } = useItemContext();
  const { id } = useParams();

  useEffect(() => {
    handleIdMiddleware(id);
    // eslint-disable-next-line
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      {item && (
        <article className="item__img">
          <img src={item.image} alt={item.item} />
        </article>
      )}
      {item && <ItemMain {...item} />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-gap:4rem;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 7rem auto;
  padding:0 2rem;
  .item__img {
    background-color: #FFE694;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    padding: 6rem 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width:768px){
      grid-template-columns:1fr;
      margin: 4rem auto;
  }
`;

export default SingleItem;
