import React from 'react';
import FilterSidebar from '../../FilterSidebar';
import Search from '../../Search';
import Result2 from '../../Result2/Result2';
import SearchResult from '../../SearchResult/SearchResult';
import Page from '../../Page/Page';
import Header from '../../Header/Header';
const SearchResult2 = () => {
  return (
    <div>
      <Header title="Seacrh Result" description="Homepage - Search - Search Result"></Header>
            <main style={{ display: 'flex' ,background:'black'}}>
        <FilterSidebar />
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
        <Search></Search>
        <Result2></Result2>
          <SearchResult></SearchResult>
          
          <Page></Page>
        </div>
      </main> 
    </div>
  );
}

export default SearchResult2;
