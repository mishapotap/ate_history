import React, { Fragment } from 'react';
import Link from "next/link";
import styled from "styled-components";

// Components
import { Cross } from "@/components/svg"
import { useRouter } from 'next/router';

const RootWithHref = styled(Link)``

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  background: rgba(0, 0, 0, 0.27);
  border: 0.5px solid #FFFFFF;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  
  transition: .15s ease-in-out background-color, .15s ease-in-out color, .15s ease-in-out border-color;
  
  &:hover {
    background-color: #2D74AD;
    color: #fff;
    z-index: 10;
    // border-color: #2D74AD;
  }
  
  &:active {
    background-color: #1A588B;
    color: #fff;
    z-index: 10;
    // border-color: #1A588B;
  }
`

const Icon = styled(Cross)`
  color: currentColor;
  width: 1em;
  height: 1em;
`

const CloseButton = ({ href, ...props }) => {
  const router = useRouter();
  if (href) {
    return (
      <RootWithHref href={href}>
        <Button onClick={() => router.back()} {...props}>
          <Icon/>
        </Button>
      </RootWithHref>
    )
  }
  
  return (
    <Button {...props}>
      <Icon/>
    </Button>
  )
}

export default CloseButton


