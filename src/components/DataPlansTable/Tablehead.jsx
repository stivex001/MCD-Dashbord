import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tablehead = ({id, network, product, price, yourPrice, server, status, date, action, discount}) => {
  return (
    <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc" }}>{id}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{network}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{product}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{price}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{yourPrice}</TableCell>
              <TableCell style={{ color: "#8887a9" }}>{discount}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{server}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{status} </TableCell>
              <TableCell style={{ color: "#8281cc" }}>{date}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{action}</TableCell>
            </TableRow>
          </TableHead>
  )
}

export default Tablehead