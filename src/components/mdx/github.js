import React from 'react'
import styled from 'styled-components'
import GithubIcon from '../../images/githubicon.inline.svg'

const StyledInfo = styled.a`
  color: ${({ theme }) => theme.textColor};
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.yellow2};

  color: #5a3800;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  font-weight: 350;
  a {
    color: #C7871E !important;
  }

  :hover {
    cursor: pointer;
  }
`
const StyledGithubIcon = styled(GithubIcon)`
  width: 16px;
  margin-right: 6px;
  path {
    fill: ${({ theme }) => theme.colors.text1};
  }

  :before {
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 1px;

    content: ' ';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.text1};
    opacity: 0.2;
  }
`

const Github = ({ children, link, ...rest }) => (
  <StyledInfo to={link} {...rest} target="_blank">
    <StyledGithubIcon />
    {children}
  </StyledInfo>
)

export default Github
