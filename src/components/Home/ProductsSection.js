import React, { Component } from 'react';
import ProductCard from '../product/ProductCard';
import Loading from '../Shared/Loading/Loading';
export default class ProductsSection extends Component {
    constructor() {
        super()
        this.state = {
            products: null
        }
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data })
            })
    }
    render() {
        return (
            <div className='py-20 px-10'>
                {
                    this.state.products ? <>
                        <h2 className='text-2xl font-bold text-center text-blue-800'>All Products: {
                            this.state.products && this.state.products.length}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16'>
                            {
                                this.state.products ? this.state.products.map(product =>
                                    <div key={product.id}>
                                        <ProductCard product={product}></ProductCard>
                                    </div>
                                ) : <p>No Products Found</p>
                            }
                        </div>
                    </> : <Loading></Loading>
                }
            </div>
        )
    }
}
