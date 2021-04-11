import React from 'react'

const InsuranceSearch = (props) => {

    // handleSearchInput() - monitor all the changes coming into the input field and change the state
    const handleSearchInput = (event) => {
        let inputValue = event.target.value;
        console.log(event.target);
        props.handleFilterSearch(inputValue);
    };

    
    return (
        <div>
            <input
                className="customerNameSearch"
                name="search"
                type="text"
                placeholder="Filter by Customer's Name.."
                onChange={handleSearchInput} />
        </div>
    )
}

export default InsuranceSearch;