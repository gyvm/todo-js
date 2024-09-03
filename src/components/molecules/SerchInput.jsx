import { Input } from "../atom/input/Input";
import { PrimaryButton } from "../atom/button/PrimaryButton";
import styled from "styled-components";
import {memo} from "react";

// eslint-disable-next-line react/display-name
export const SearchInput = memo(() => {
    console.log("SearchInputがレンダリングされました");
    return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
})

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
