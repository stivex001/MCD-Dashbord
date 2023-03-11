import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const Tablehead = ({
  id,
  network,
  product,
  price,
  yourPrice,
  server,
  status,
  date,
  action,
  discount,
}) => {
  return (
    <TableHead>
      <TableRow style={{ backgroundColor: "#f3f2f7"}}>
        <TableCell style={{ color: "#8281cc", fontWeight: '700'  }}>{id}</TableCell>
        <TableCell style={{ color: "#8281cc", fontWeight: '700'  }}>{network}</TableCell>
        <TableCell style={{ color: "#8281cc", fontWeight: '700'  }}>{product}</TableCell>
        <TableCell style={{ color: "#8281cc", fontWeight: '700'  }}>{price}</TableCell>
        <TableCell style={{ color: "#8281cc", fontWeight: '700'  }}>{yourPrice}</TableCell>
        <TableCell style={{ color: "#8887a9", fontWeight: '700'  }}>{discount}</TableCell>
        <TableCell style={{ color: "#8281cc", fontWeight: '700'  }}>{server}</TableCell>
        <TableCell style={{ color: "#8281cc", fontWeight: '700'  }}>{status} </TableCell>
        <TableCell style={{ color: "#8281cc", fontWeight: '700'  }}>{date}</TableCell>
        <TableCell style={{ color: "#8281cc", fontWeight: '700'  }}>{action}</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default Tablehead;
