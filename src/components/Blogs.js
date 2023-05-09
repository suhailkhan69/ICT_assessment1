import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Blogs = () => {
    var [blog,setblog]=useState([]);
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
                console.log(response);
               setblog(blog=response.data);
        })
      },[])
    
    return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Id</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
           
           
          </TableRow>
        </TableHead>
        
        <TableBody>
          {blog.map((value,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {value.id}
              </StyledTableCell>
              <StyledTableCell align="left">{value.title}</StyledTableCell>
              
              
              
            </StyledTableRow>
          ))}
        </TableBody>
          
        
      </Table>
    </TableContainer>
    </div>
  )
}

export default Blogs
