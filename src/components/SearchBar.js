import React from 'react';

class SearchBar extends React.Component {


    // render function to return JSX
    render() {
        return (
            <div>
                <form className=''>
                    <label className=''>Search Quotes</label>
                    <input className='' type='text' />
                </form>
                 
            </div>
        )
    }
}


export default SearchBar;