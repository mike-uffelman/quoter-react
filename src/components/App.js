import './App.css';
import React from 'react';
import QuoteDisplay from './QuoteDisplay';
import SearchBar from './SearchBar';
import quoter from '../apis/quoter';
import QuoteShowcase from './QuoteShowcase';
import HeadingNav from './HeadingNav';


class App extends React.Component {
    state = { quotes: [], history: [] };

    axiosParams({term, queryType}) {
        if(queryType === 'tag') {
            return {
                params: {
                    tags: term
                }
            }
        }

        if(queryType === 'author') {
            return {
                params: {
                    author: term
                }
            }
        }
    }

    // fix build fetch, can use just one response object, the params are whats chanign not the endpoint string
    buildFetch = async (params) => {
        const response = await quoter.get('/quotes', await this.axiosParams(params));
        return response;
    }

    onFormSubmit = async (state) => {
        const response = await this.buildFetch(state);

        this.setState({ 
            displayQuote: response.data.results[0], 
            quotes: response.data.results
        })
    }

    onRandBtn = async () => {
        const response = await quoter.get('/random', {})

        this.setState({
            displayQuote: response.data
        })        
    }

    onQuoteSelect = (quote) => {
        this.setState({ displayQuote: quote })
    }

    // componentDidUpdate() {
    //     console.log(this.state.displayQuote);
    // }

    render() {
        return (
            <div className='application'>
                <div className='application__fixed'>
                    <HeadingNav />
                    <SearchBar onRandBtn={this.onRandBtn} onFormSubmit={this.onFormSubmit}/>
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