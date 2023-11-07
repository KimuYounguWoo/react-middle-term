import styled from "styled-components";
// Components

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  background: var(--primary);

  a {
    color: #45413c;

    &:hover {
      color: #fbfdff;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <h3>Copyright 김용우, 컴퓨터공학과 201935231 김용우, dyw1014@gachon.ac.kr</h3>
    </StyledFooter>
  );
}
