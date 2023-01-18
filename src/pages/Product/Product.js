import React, { Component } from 'react';
import ratingIcon from '../../asset/rating-icon.png';
import Loading from '../../components/Shared/Loading/Loading';

export default class Product extends Component {

  constructor() {
    super()
    this.state = {
      productDetails: null
    }
  }

  componentDidMount() {
    const pathname = window.location.pathname;
    const id = pathname.split('/')[2]
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data =>
        this.setState({ productDetails: data })
      )
  }

  render() {
    return (
      <div className='py-20 px-10'>
        {
          this.state.productDetails ?
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
              <div className='flex justify-center'>
                <img src={this.state.productDetails?.image} alt="" className='max-h-[550px] w-[100%]' />
              </div>
              <div className='grid grid-cols-1 gap-4 '>
                <div>
                  <p className='uppercase text-slate-500 text-lg font-semibold'>{this.state.productDetails.category }</p>
                  <h2 className='text-xl font-bold'>{this.state.productDetails.title}</h2>
                </div>
                <div className='flex flex-col md:flex-row gap-5  md:gap-24 '>
                  <div>
                    <p className='uppercase text-slate-500 text-lg font-semibold'>PRICE</p>
                    <h2 className='text-xl font-bold'>${this.state.productDetails.price}</h2>
                    <p className='text-slate-500'>*Free shipping</p>
                  </div>
                  <div>
                    <div className='flex gap-2'>
                      <img src={ratingIcon} className='w-6 h-6' alt="" />
                      <img src={ratingIcon} className='w-6 h-6' alt="" />
                      <img src={ratingIcon} className='w-6 h-6' alt="" />
                      <img src={ratingIcon} className='w-6 h-6' alt="" />
                      <img src={ratingIcon} className='w-6 h-6' alt="" />
                    </div>
                    <p className='text-slate-600'>(73 Reviews)</p>
                  </div>
                </div>
                {/* description */}
                <div>
                  <h4 className='border-b-2 w-fit pb-1 mb-2  border-slate-800'>Description</h4>
                  <p>{this.state.productDetails.description}</p>
                </div>
                {/* quantity +  color */}
                <div className='flex flex-col md:flex-row gap-5 md:gap-20'>
                  <div>
                    <p className='text-lg font-bold'>Quantity</p>
                    <div className='flex gap-4 mt-4 font-bold'>
                      <button className='border-2 border-slate-800  w-7 '>-</button>
                      <p>1</p>
                      <button className='border-2 w-7 border-slate-800'>+</button>
                    </div>
                  </div>
                  <div>
                    <h2 className='text-lg font-bold'>Color</h2>
                    <div className='flex gap-5 mt-4'>
                      <div className='bg-green-500 w-5 h-5'></div>
                      <div className='bg-slate-800 w-5 h-5'></div>
                      <div className='bg-blue-500 w-5 h-5'></div>
                      <div className='bg-red-500 w-5 h-5'></div>
                    </div>
                  </div>
                </div>
                {/* button */}
                <div className='flex flex-wrap  gap-4 mt-10'>
                  <button className='btn rounded-none bg-slate-800 text-white px-7 w-fit min-w-[200px]'>ADD TO CART</button>
                  <button className='btn rounded-none border-2 bg-white text-slate-800 hover:text-white w-fit min-w-[200px]'>ADD TO FAVOURITE</button>
                </div>
              </div>
            </div> :
            <Loading></Loading>
        }
      </div>
    )
  }
}
