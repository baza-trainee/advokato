import { resultsItems } from "../ResultItems.js";
import {
  ContentStyled,
  WrapperStyled,
  ResultItemStyled,
  ImageStyled,
  ResultText,
  BubbleForm,
  ButtonStyled,
  PublicationDate,
  ArrowBlock,
} from "./ResultElement.styled.js";

import { Icon } from "../../Icon";

export const ResultElement = () => {
  return (
    <>
      {resultsItems.map((item) => (
        <ContentStyled key={item.id}>
          <WrapperStyled>
            <ResultItemStyled>
              <ImageStyled
                src={item.imageUrl}
                width={464}
                height={380}
                alt="photo-result"
              />

              <ResultText>
                <h3>{item.title}</h3>
                <p className="desc">{item.desc}</p>
                <BubbleForm>
                  <ButtonStyled>Корпоративне право</ButtonStyled>
                  <PublicationDate>11/07/2022</PublicationDate>
                </BubbleForm>
              </ResultText>
            </ResultItemStyled>
          </WrapperStyled>
          <ArrowBlock>
            <Icon
              id={"icon-arrow-up"}
              width={14}
              height={12}
              fill={"#969395"}
            />
          </ArrowBlock>
        </ContentStyled>
      ))}
    </>
  );
};
