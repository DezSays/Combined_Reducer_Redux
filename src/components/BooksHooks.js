import React from 'react'
import {usesSelector} from 'react-redux'

const BooksHooks = () => {

    const authors = usesSelector(state => state.auth.authors)
    const books = usesSelector(state => state.books.books)
  return (
    <>
    
    </>
  )
}

export default BooksHooks