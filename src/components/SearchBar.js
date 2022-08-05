import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    // state = { term: '', category: '' };
    state = { term: '' };


    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    // render function to return JSX
    render() {
        return (
            <div className='search'>
                <form className='search__form' onSubmit={this.onFormSubmit}>
                        {/* <label className='search__label'>Search:</label> */}
                        <input className='search__input' type='text' placeholder='Search keywords' value={this.state.term} onChange={this.onInputChange} />
                </form>
            </div>
        )
    }
}

export default SearchBar;