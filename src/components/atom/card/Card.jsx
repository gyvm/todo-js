import styled from "styled-components";

export const Card = (props) => {
    const {children} = props;
    return <SCard>{children}</SCard>
}

const SCard = styled.div`
    background-color: #eff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 16px;
`;
