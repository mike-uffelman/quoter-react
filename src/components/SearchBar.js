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
                        <input className='search__input' type='text' value={this.state.term} onChange={this.onInputChange} />
                </form>
            </div>
        )
    }
}

                    // <div className='field five columns'>
                    //     <label>Quote Type</label>
                    //     <select className='search-input ui fluid dropdown' type='text' onChange={this.onInputChange}>
                    //         <option value={this.state.category}>Type</option>
                    //         <option value={this.state.category}>Quote Category</option>
                    //         <option value={this.state.category}>Author</option>
                    //         <option value={this.state.category}>Random</option>
                    //     </select>
                    // </div>


export default SearchBar;