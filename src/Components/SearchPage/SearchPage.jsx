import React from 'react';
import SearchPageForm from "../../Containers/SearchPageForm/SearchPageForm";
import SearchPageResults from "../../Containers/SearchPageResults/SearchPageResults";
import SearchPageResultsLoadableComponent
    from "../../Containers/SearchPageResultsLoadableComponent/SearchPageResultsLoadableComponent";


function SearchPage() {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <SearchPageForm />

            <SearchPageResultsLoadableComponent>
                <SearchPageResults/>
            </SearchPageResultsLoadableComponent>
        </div>
    );
}

export default SearchPage;