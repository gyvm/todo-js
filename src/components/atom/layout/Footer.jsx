import styled from "styled-components";

export const Footer = () => {
    return (
        <SFooter>
            <SFooter>&copy; 2024 test Inc.</SFooter>
        </SFooter>
    );
};

const SFooter = styled.footer`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    width: 100%;
`;
