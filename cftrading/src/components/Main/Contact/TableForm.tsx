import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const TableForm = () => {
  return (

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
          
            <TableCell component="th" scope="row">
              Name
            </TableCell>
            <TableCell align="right">13</TableCell>
            <TableCell align="right">19</TableCell>
            <TableCell align="right">30</TableCell>
            <TableCell align="right">40</TableCell>
          </TableRow>
        
      </TableBody>
    </Table>
  </TableContainer>

    
  )
}

export default TableForm