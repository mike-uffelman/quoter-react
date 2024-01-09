import './QuoteDisplay.css';
import React from 'react';
import QuoteDetail from './QuoteDetail';

const QuoteDisplay = ({ quotes, onQuoteSelect }) => {
    
    if(!quotes || quotes.length === 0) {
        // console.log('no quotes')
        return;
    }
    
    return (
        <ul className='quote-display'>
                <QuoteDetail onQuoteSelect={onQuoteSelect} quotes={quotes}/>
        </ul>
    )
    
}

export default QuoteDisplay;