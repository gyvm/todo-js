import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {DefaultLayout} from "../templates/DefaultLayout";
import {SecondaryButton} from "../atom/button/SecondaryButton";
import {useContext} from "react";
import {UserContext} from "../../providers/UserProvider";

export const Top = () => {
    const navigate = useNavigate();
    const { setUserInfo } = useContext(UserContext)

    const onClickAdmin = () => {
        setUserInfo({isAdmin: true});
        navigate("/users");
    }
    const onClickGeneral = () => {
        setUserInfo({isAdmin: false});
        navigate("/users");
    }

return (
        <DefaultLayout>
            <SContainer>
                <h2>Topページです</h2>
                <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
                <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
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
