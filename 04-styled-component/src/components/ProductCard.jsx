// src/components/ProductCard.jsx
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  display: flex; flex-direction: column;
  position: relative;
  transition: transform .3s ease, box-shadow .3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;

const ImgWrap = styled.div` position: relative; `;
const Img = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tag = styled.span`
  position: absolute; top: 10px; right: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: .8em;
  font-weight: bold;
  color: #fff;

  &.novo { background-color: #27ae60; }   /* igual ao Global */
  &.promo { background-color: #e67e22; }  /* igual ao Global */
`;

const Content = styled.div`
  padding: 15px;
  display: flex; flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1.1em;
  height: 2.4em;             /* ~2 linhas */
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  font-weight: 400;          /* como no Global */
`;

const Price = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
`;

const Rating = styled.div` margin-bottom: 15px; `;

const Button = styled.button`
  margin-top: auto;
  height: 40px;                          /* mesma altura */
  padding: 0 12px;
  border: 2px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color .3s, color .3s;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
  }
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

const ProductCard = ({ product }) => (
  <Card>
    <ImgWrap>
      <Img src={product.image} alt={product.title} />
      {product.tag && (
        <Tag className={product.tag.toLowerCase()}>{product.tag}</Tag>
      )}
    </ImgWrap>

    <Content>
      <Title>{product.title}</Title>
      <Price>R$ {product.price.toFixed(2)}</Price>
      <Rating>⭐ {product.rating}</Rating>
      <Button>Adicionar</Button>
    </Content>
  </Card>
);

export default ProductCard;
