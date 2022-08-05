import './App.css';
import React from 'react';
import QuoteDisplay from './QuoteDisplay';
import SearchBar from './SearchBar';
import quoter from '../apis/quoter';
import QuoteShowcase from './QuoteShowcase';
import HeadingNav from './HeadingNav';


class App extends React.Component {
    
    state = { quotes: [], history: [] };

    onFormSubmit = async term => {
        console.log('before lookup: ', term)
        const response = await quoter.get('/quotes', {
            params: {
                tags: term
            }
        });
        console.log(term);
        console.log(response.data.results);


        console.log('onFormSubmit - return term: ', response.data)

        this.setState({ 
            displayQuote: [], 
            quotes: response.data.results
        })
    }

    onQuoteSelect = (quote) => {
        console.log('selecting this quote to display', quote)

        this.setState({ displayQuote: quote })
    }

    componentDidMount() {
        console.log(this.state);
    }

    // want to update state.history with prior searches on each update
    componentDidUpdate() {
        const prevHistory = this.state.quotes;
        console.log('previous history: ', prevHistory)
        console.log(this.state.displayQuote);
        // this.setState({ history: this.state.quotes})
    }

    render() {
        return (
            <div className='application'>
                <div className='application__fixed'>
                    <HeadingNav />
                    <SearchBar onFormSubmit={this.onFormSubmit}/>
                    <QuoteShowcase quote={this.state.displayQuote} />
                </div>
                <div className='application__list'>
                    <QuoteDisplay onQuoteSelect={this.onQuoteSelect} quotes={this.state.quotes}/>
                </div>
            </div>
        )
    }
}

export default App;