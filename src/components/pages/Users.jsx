import styled from "styled-components";
import {HeaderOnly} from "../templates/HeaderOnly";
import {SearchInput} from "../molecules/SerchInput";
import {UserCard} from "../organisma/user/UserCard";

const users = [...Array(10).keys()].map(val => {
        return {
            id: val,
            name: "未設定",
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
    return (
        <HeaderOnly>
            <SContainer>
                <h2>Usersページです</h2>
                <SearchInput />
                <SUserArea>
                    {users.map(user => (
                        <UserCard key={user.id} user={user}/>
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