import './SearchBar.css';
import { FaRandom } from 'react-icons/fa';
import React from 'react';

class SearchBar extends React.Component {
    // state = { term: '', category: '' };
    state = { term: '', queryType: '' };


    onInputChange = (e) => {
        this.setState({ term: e.target.value.toLowerCase() })
    }

    onTypeChange = (e) => {
        this.setState({ queryType: e.target.value.toLowerCase() })
    }

    onFormSubmit = e => {
        e.preventDefault();
        if(this.state.term === '') return;
        this.props.onFormSubmit(this.state);
        
    }

    onRandBtn = e => {
        e.preventDefault();
        this.props.onRandBtn();
        this.setState({ term: '', queryType: '' })
    }

    componentDidUpdate() {
        // console.log(this.state)
    }

    // render function to return JSX
    render() {
        return (
            <div className='search'>
                <form className='search__form' onSubmit={this.onFormSubmit}>
                    <div className='input__container'>
                    <select className='search__select' onChange={this.onTypeChange} >
                            <option value="">Select</option>
                            <option value="tag">Tag</option>
                            <option value="author">Author</option>
                        </select>
                        <input className='search__input' type='text' placeholder='Search keywords' value={this.state.term} onChange={this.onInputChange} />
                         
                    </div>
                        
                </form>
                <button onClick={this.onRandBtn} className='search__random btn'><FaRandom /></button>
            </div>
        )
    }
}

export default SearchBar;