import tags from "./tags.json";
import styled from "styled-components";

const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-bottom: 56px;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const Tags = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: rgba(217, 217, 217, 0.3);
  cursor: pointer;
  transition: background-color 0.3 ease;
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tag = ({ setTag }) => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tag:</TagTitulo>
      <Div>
        {tags.map((tag) => {
          return (
            <Tags key={tag.id} onClick={() => setTag(tag.id)}>
              {tag.titulo}
            </Tags>
          );
        })}
      </Div>
    </TagsContainer>
  );
};

export default Tag;
