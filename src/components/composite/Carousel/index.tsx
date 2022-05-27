import Slick, { Settings } from 'react-slick'
import SlickStyles from './styles'
import { ForwardedRef, forwardRef } from 'react'

function Carousel(props: Settings, ref: ForwardedRef<HTMLElement>) {
  return (
    <>
      <SlickStyles />
      <Slick {...props} ref={ref} />
    </>
  )
}
export default forwardRef(Carousel)
