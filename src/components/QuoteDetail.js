import './QuoteDetail.css';
import React from 'react';

const QuoteDetail = ({ quotes, onQuoteSelect }) => {

    console.log('QuoteDetail: ', quotes);


    

    const quoteItem = quotes.map(quote => {
        return (
            <li key={quote._id} className="list__item" onClick={() => onQuoteSelect(quote)}>
                <div className="list__description">{quote.content}</div>
                <div className="list__author"><em>~ {quote.author} ~</em></div>
            </li>
        )
    })

    return <div className='list__container'>{quoteItem}</div>
    
}

export default QuoteDetail;