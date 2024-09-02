import styled from "styled-components";
import {DefaultLayout} from "../templates/DefaultLayout";

export const Top = () => {
    return (
        <DefaultLayout>
            <SContainer>
                <h2>Topページです</h2>
            </SContainer>
        </DefaultLayout>
    )
}

const SContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;
