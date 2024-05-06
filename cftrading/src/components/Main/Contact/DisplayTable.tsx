import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useFrappeGetDocList } from 'frappe-react-sdk'


interface ContactFormFields {
    first_name: string,
    last_name: string,
    email_id: string,
  
  }

const DisplayTable = () => {

    const { data, isLoading, error, mutate } = useFrappeGetDocList<ContactFormFields>('Contact', {
        fields: ['first_name', 'last_name', 'email_id']
      }) 

  return (
    <div>ConcactForm

    {isLoading && <h1>Loading...</h1>}
    {error && <Alert severity='error'>
      <AlertTitle>{error.exception}</AlertTitle>
      {error.httpStatusText}
    </Alert>}
    {data && <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>First Name</TableCell>
        <TableCell align="right">Last Name</TableCell>
        <TableCell align="right">Email</TableCell>
        
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row: ContactFormFields) => (
                <TableRow
                key={row.first_name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
        
          <TableCell component="th" scope="row">
            {row.first_name}
          </TableCell>
          <TableCell align="right">{row.last_name}</TableCell>
          <TableCell align="right">{row.email_id}</TableCell>
        </TableRow>
         ))}
      
    </TableBody>
  </Table>
</TableContainer>
    }
    </div>
  )
}

export default DisplayTable