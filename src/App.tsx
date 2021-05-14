import React,{useState,useEffect} from 'react';
import { Container } from '@material-ui/core';
import './App.scss';
import {SalesFilter} from './SalesFilter'
import {SalesList} from './SalesList'
import data from './data.json'

const App:React.FC = () => {

  interface SaleItem {
    url       : string,
    name      : string,
    tag       : string,
    code      : string,
    logo      : string,
    date      : string,
    distance  : number,
    createdAt : string,
    dealer    : string
  }

  const [filter,setFilter] = useState<string | unknown>('-')
  const [keyword,setKeyword] = useState<string>('')
  const [sales_items,setSalesItems] = useState<SaleItem[]>([])
  const [current_page,setCurrentPage] = useState<number>(1)

  useEffect(() => {
    setSalesItems(data)
  },[])

  const handleKeywordChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setKeyword(e.target.value)
    // REQUEST API CALL with search keyword
    
    // SET RESPONSE to sales_items
    //setSalesItems(response.data)
  }
  const handleFilterChange = (e: React.ChangeEvent<{
      name?: string | undefined;
      value: string | unknown;
    }>
  ) => {
    setFilter(e.target.value)
    // REQUEST API CALL with filter 
  
    // SET RESPONSE to sales_items
    // setSalesItems(response.data)
  }
  const handleExcelClick = () => {
    alert('Download Excel File')
  }
  const handlePdfClick = () => {
    alert('Download Pdf File')
  }
  const handleCreate = () => {
    alert('Create New Sales')
  }
  const handlePaginate = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    // REQUEST API CALL with current_page

    // SET RESPONSE to sales_items
    // setSalesItems(response.data)
  }

  return (
    <Container maxWidth={false}>
        <SalesFilter
          handleKeywordChange={handleKeywordChange}
          handleFilterChange={handleFilterChange}
          filter={filter}
          keyword={keyword}
          handleExcelClick={handleExcelClick}
          handlePdfClick={handlePdfClick}
          handleCreate={handleCreate}
        >
        </SalesFilter>
        <SalesList
          sale_items={sales_items}
          total_pages={10}
          current_page={current_page}
          handlePaginate={handlePaginate}
        >

        </SalesList>
    </Container>
  );
}

export default App;