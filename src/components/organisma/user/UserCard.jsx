import styled from "styled-components";
import {Card} from "../../atom/card/Card";
import {UserIconWithName} from "../../molecules/user/UserIconWithName";
import {memo} from "react";

// eslint-disable-next-line react/display-name
export const UserCard = memo((props) => {
    const { user } = props;
    console.log("UserCardがレンダリングされました");

    return (
        <Card>
            <UserIconWithName name={user.name} image={user.image} />
            <SDL>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>Web</dt>
                <dd>{user.website}</dd>
            </SDL>
        </Card>
    )
})

const SDL = styled.dl`
    text-align: left;
    margin-bottom: 0;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`;