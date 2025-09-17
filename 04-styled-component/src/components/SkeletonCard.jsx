// src/components/SkeletonCard.jsx
import styled from "styled-components";

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  display: flex; flex-direction: column;
  position: relative;
`;

const PhImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #e0e0e0;
`;

const Body = styled.div`
  padding: 15px;
  display: flex; flex-direction: column;
  flex: 1 1 auto;
`;

const Line = styled.div`
  height: 1em;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 10px;

  &.title { width: 80%; }
  &.price { width: 50%; }
  &.rating { width: 30%; }
  &.button { height: 40px; margin-top: auto; }
`;

const Shimmer = styled.div`
  position: absolute; inset: 0;
  pointer-events: none;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0; left: -150%;
    width: 150%; height: 100%;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.2)"}, transparent);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% { left: -150%; }
    100% { left: 150%; }
  }
`;

const SkeletonCard = () => (
  <Wrap className="skeleton">
    <PhImage className="skeleton-image" />
    <Body className="card-content">
      <Line className="skeleton-line title" />
      <Line className="skeleton-line price" />
      <Line className="skeleton-line rating" />
      <Line className="skeleton-line button" />
    </Body>
    <Shimmer className="skeleton-shimmer" />
  </Wrap>
);

export default SkeletonCard;
