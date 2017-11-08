import React, { Component } from 'react';

class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SearchResults">
              <h1 className="title">Results </h1>
               <div className="results">
                <ul>
                 <li>1</li>   
                 <li>2</li>   
                 <li>3</li>   
                </ul>
               </div>
            </div>
        );
    };
}

export default SearchResults;