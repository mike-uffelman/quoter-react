import './QuoteDisplay.css';
import React from 'react';
import QuoteDetail from './QuoteDetail';

const QuoteDisplay = ({ quotes, onQuoteSelect }) => {
    console.log(quotes);
    
    if(!quotes || quotes.length === 0) {
        console.log('no quotes')
        return <div>Please search...</div>
    }
    
    return (
        <ul className='quote-display'>
                <QuoteDetail onQuoteSelect={onQuoteSelect} quotes={quotes}/>
        </ul>
    )
    
}

export default QuoteDisplay;