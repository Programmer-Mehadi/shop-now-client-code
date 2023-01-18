import React, { Component } from 'react';
import ProductCard from '../product/ProductCard';
import Loading from '../Shared/Loading/Loading';
export default class ProductsSection extends Component {
    constructor() {
        super()
        this.state = {
            products: null,
            showProducts: null
        }
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data, showProducts: data.slice(0, 6) })
            })
    }
    showMore = () => {
        let lengt = this.state.showProducts.length;
        console.log(lengt);
        this.setState({ showProducts: this.state.products.slice(0, lengt + 6) })
    }
    render() {

        return (
            <div className='py-20 px-10'>
                {
                    this.state.showProducts ? <>
                        <h2 className='text-2xl font-bold text-center text-blue-800'>All Products: {
                            this.state.products && this.state.products.length}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16'>
                            {
                                this.state.showProducts ? this.state.showProducts.map(product =>
                                    <div key={product.id}>
                                        <ProductCard product={product}></ProductCard>
                                    </div>
                                ) : <p>No Products Found</p>
                            }
                        </div>
                    </> : <Loading></Loading>
                }
                {
                    this.state.products && this.state.products.length !== this.state.showProducts.length && <div className='flex justify-center'>
                        <button className='btn w-fit mx-auto bg-blue-300 text-blue-800 border-2 border-blue-800 font-bold hover:text-white ' onClick={this.showMore}>Show more</button>
                    </div>
                }
            </div>
        )
    }
}
