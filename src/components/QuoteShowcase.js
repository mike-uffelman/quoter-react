import './QuoteShowcase.css';
import React from 'react';

const QuoteShowcase = ({ quote }) => {
    // console.log('QuoteShowcase prop: ', quote.author)

    if(quote === undefined || quote.length === 0) {
        return;
    }

    return (
        <div className="showcase">
                <p className='showcase__description'>{quote.content}</p>
                <p className="showcase__author">{quote.author}</p>
        </div>
    )
}

export default QuoteShowcase;