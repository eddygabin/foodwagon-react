import React from 'react';

const SearchBox: React.FC = () => {
    return (
        <div className="search-box">
            <input type="text" className="form-control" placeholder="Enter Your Address" />
            <button className="btn btn-primary">Find Food</button>
        </div>
    );
};

export default SearchBox;