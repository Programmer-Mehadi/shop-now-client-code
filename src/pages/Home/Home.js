import React, { Component } from 'react'
import ProductsSection from '../../components/Home/ProductsSection'
import Slider from '../../components/Home/Slider'

export default class Home extends Component {
  render() {
    return (
      <>
        <Slider></Slider>
        <ProductsSection></ProductsSection>
      </>
    )
  }
}
