import React, { Fragment } from 'react'
import ProductCard from './ProductCard'
import ContentHeader from '../ContentHeader'

const ProductList = ({ products }) => {

    if (products.length === 0)
        return <div style={{ textAlign: 'center' }}>0 products found</div>

    return (
        <Fragment>
            <ContentHeader title='Product' img='/box.svg' />
            <div className='row'>
                {products.map((product =>
                    <ProductCard key={product.title} title={product.title} image={product.imageUrl} progress={product.price} />
                ))}
            </div>
        </Fragment>
    )
}

export default ProductList

