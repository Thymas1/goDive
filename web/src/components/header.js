import {Link} from 'gatsby'
import styled from 'styled-components'
import React from 'react'
import Icon from './icon'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <Root>
    <Wrapper>
      <Branding>
        <Link to='/'>{siteTitle}</Link>
      </Branding>
      <StyledNav>
        <StyledLink to='/archive/'>Archive</StyledLink>
      </StyledNav>
    </Wrapper>
  </Root>
)

export default Header

const Root = styled.div`
  position: relative;
  z-index: 100;
`
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1em;
  display: flex;
  justify-content: space-between;

  @media (min-width: 450px) {
    padding: 1.5em 1.5em;
  }
`

const Branding = styled.div`
  font-size: 26px;
  font-weight: 600;
 flex: 1;

  a {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      a &:hover {
        color: var(--color-accent);
      }
    }
  }
`
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  a {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a:hover {
      color: #3c57ff;
    }
`
const StyledLink = styled(Link)`
text-decoration: none;
display: inline-block;
color: white;
:hover{
  color: #3c57ff;
}
`
