import { useEffect, useRef, useState } from 'react'
import styled, { css } from "styled-components"
import Link from "next/link";
import { useRouter } from "next/router";

// Service
import { Head } from "@/components/service"
import { useAppContext } from "@/components/context/App";

// Constants
import { nav, section } from "@/common/constants"

// Components
import { Logo } from '@/components/ui';
import { PageControl } from '@/components/composite'

// STYLES
const Content = styled.div`
  position: relative;
  // z-index: 5;
  height: 100%;
  ${({ fullsize }) => !fullsize && css`
    padding-top: 88px;
  `}
`
const Header = styled.header`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  color: #000000;
  border-bottom: 1px solid #DBDBDB;
  height: 8vh;
  max-height: 88px;
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`
const Page = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`
const LogoLink = styled.a`
  margin: 0 50px;
  cursor: pointer;
`
const PageTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  /* margin-left: 178px; */
`
const MenuButton = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  /* padding: 38px 105px 37px 38px; */
  padding-right: 100px;
  padding-left: 40px;
  background-color: #4EA4D9;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #ffffff;
  white-space: nowrap;
  cursor: pointer;
  appearance: none;
  outline: none;
  border: none;
  margin-left: auto;
  position: relative;
  transition: .15s ease-in-out background-color;
  
  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 100%;
    margin-left: -72px;
    top: 50%;
    height: 2px;
    background-color: white;
    border-radius: 9999px;
  }
  
  &:after {
    width: 26px;
    margin-top: -8px;
  }
  
  &:before {
    width: 19px;
    margin-bottom: -8px;
  }
  
  &:hover {
    background-color: #2D74AD;
  }
  
  &:active {
    background-color: #1A588B;
  }
`
const CloseMenuButton = styled(MenuButton)`
  position: absolute;
  top: 0;
  right: 0;
  height: 88px;
  background-color: transparent;
  padding-right: 0;
  padding-left: 0;
  width: 115px;
  
  &:after {
    margin-top: 0;
  }
  
  &:before {
    display: none;
  }
`
const Menu = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #263973;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-200vh);
  transition: transform .3s ease-in-out .1s;
  
  ${(p) => p.active && css`
    transform: translateY(0);
    transition: transform .3s ease-in-out;
  `}
`
const NavList = styled.ul`
  font-weight: 300;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.12em;
  width: 64.376%;
`
const activeItem = css`
  opacity: 1;
  transition: opacity .15s ease-in-out;
  
  &:before {
    background-color: #ffffff;
    transition: background-color .15s ease-in-out;
  }
`
const NavListItem = styled.li`
  + li {
    margin-top: 114px;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
    opacity: 0.3;
    transition: opacity .15s ease-in-out .3s;
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      top: 1em;
      right: 100%;
      margin-right: 24px;
      width: 92px;
      height: 1px;
      background-color: transparent;
      transition: background-color .15s ease-in-out .3s;
    }
    
    ${({ active }) => active && css`
      ${activeItem}
    `}
    
    &:hover {
      ${activeItem}
    }
  }
`
const ControlWrapper = styled.div`
  padding: 0 50px;
  position: absolute;
  /* z-index: 10; */
  right: 0;
  bottom: 40px;
  left: 0;
`


const Layout = ({ children, title, fullsize = false }) => {
  const pageRef = useRef()
  const appContext = useAppContext()
  const [ menuVisibility, setMenuVisibility ] = useState(false)
  const navigationElements = nav.sort((a, b) => a.order - b.order)
  const router = useRouter()
  
  useEffect(() => {
    // Записываем ссылку на PopupContainer для добавления доп элементов через портал
    if (pageRef && !appContext.pageRef) {
      appContext.pageRef = pageRef
    }
  }, [ pageRef ])
  
  return (
    <Page ref={pageRef}>
      <Head title={title}/>
      
      <Header>
        <Link href={section.home}>
          <LogoLink>
            <Logo/>
          </LogoLink>
        </Link>
        
        <PageTitle>{title}</PageTitle>
        
        {/* onClick={() => setMenuVisibility(true) */}
        <MenuButton>
          Интерактивные проекты
        </MenuButton>
      </Header>
      
      <Content fullsize={fullsize}>
        {children}
      </Content>
  
      <ControlWrapper>
        <PageControl/>
      </ControlWrapper>
  
      {/* <Menu active={menuVisibility}>
        <CloseMenuButton onClick={() => setMenuVisibility(false)}/>

        <NavList>
          {navigationElements.map((item) => (
            <NavListItem
              key={item.name}
              active={item.pathname === router.pathname}
            >
              <Link href={`${item.pathname}${item.search ? `/` + item.search : ''}`}>
                <a onClick={() => setMenuVisibility(false)}>{item.name}</a>
              </Link>
            </NavListItem>
          ))}
        </NavList>
      </Menu> */}
    </Page>
  )
}

export default Layout


