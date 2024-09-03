import styled from "styled-components";

import {HeaderOnly} from "../templates/HeaderOnly";
import {SearchInput} from "../molecules/SerchInput";
import {UserCard} from "../organisma/user/UserCard";
import {SecondaryButton} from "../atom/button/SecondaryButton";
import {useContext} from "react";
import {UserContext} from "../../providers/UserProvider";

const users = [...Array(10).keys()].map(val => {
        return {
            id: val,
            name: "未設定" + val,
            image: "https://picsum.photos/200",
            email: "test@example.com",
            phone: "000-0000-0000",
            company: {
                name: "株式会社テスト"
            },
            website: "https://example.com"
        }
    }
)

export const Users = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const onClickSwitch = () => setUserInfo({isAdmin: !userInfo.isAdmin});
    console.log("Usersがレンダリングされました");
    console.log(userInfo);

    return (
        <HeaderOnly>
            <SContainer>
                <h2>Usersページです</h2>
                <SearchInput />
                <br/>
                <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
                <SUserArea>
                    {users.map(obj => (
                        <UserCard key={obj.id} user={obj} />
                    ))}
                </SUserArea>
            </SContainer>
        </HeaderOnly>
    )
}

const SContainer = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    greid-gap: 20px;
`;