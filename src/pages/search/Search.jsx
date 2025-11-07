import React, { useState } from 'react'
import productsData from '../../data/products.json'
import ProductCards from '../shop/ProductCards'

const Search = () => {
    const [searchQuery,setsearchQuery] = useState('')
    const [filterProducts,setfilterProducts] = useState(productsData)

    const handleSearch = () => {
        const query = searchQuery.toLowerCase()
        const filtered = productsData.filter(product => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query))    
        setfilterProducts(filtered)

    }
  return (
    <>
     <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Search Products</h2>
        <p className='section__subheader'>Browse a diverse rang of categories, from check dresses to versatile accessories Elevate your style today</p>
    </section>
    <section className='section__container'>
        <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-8'>
        <input type="text" className='w-full search-bar max-w-4xl p-2 border rounded' placeholder="Search for products" value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>
        <button onClick={handleSearch} className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'>
            Search
        </button>
        </div>
        <ProductCards products={filterProducts} />
    </section>
    </>
  )
}

export default Search