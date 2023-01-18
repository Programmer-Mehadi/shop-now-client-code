import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ratingIcon from '../../asset/rating-icon.png';

class ProductCard extends Component {

    render() {
        return (
            <div className="card bg-base-100 shadow-2xl m-0 p-0">
                <figure className="px-10 pt-10">
                    <img src={this.props.product?.image} alt="Shoes" className="rounded-xl h-28" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{this.props.product?.title}</h2>
                    <p className='text-sm text-slate-400'>{this.props.product?.description.length > 100 ? `${this.props.product?.description.slice(0, 101)}...` : this.props.product?.description}</p>
                    <p className='font-bold text-2xl'>${this.props.product?.price}</p>
                    <div className='flex items-center font-bold'>
                        <img src={ratingIcon} alt="" className='mr-2 h-6 w-6' />
                        <img src={ratingIcon} alt="" className='mr-2 h-6 w-6' />
                        <img src={ratingIcon} alt="" className='mr-2 h-6 w-6' />
                        <img src={ratingIcon} alt="" className='mr-2 h-6 w-6' />
                        <img src={ratingIcon} alt="" className='mr-2 h-6 w-6' />
                    </div>
                </div>
                <div className="card-actions">
                    <Link to={`/product/${this.props.product.id}`} className="btn btn-primary bg-blue-800  w-full rounded-t-none">Buy Now</Link>
                </div>
            </div>
        );
    }
}

export default ProductCard;