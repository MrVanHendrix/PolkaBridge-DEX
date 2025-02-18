import { TableCell, TableRow } from "@material-ui/core";
import { formatCurrency } from "../../../../utils/helper";
import { formatTime } from "../../../../utils/timeUtils";

const TransactionRow = (props) => {
  const { classes, isItemSelected, labelId, handleClick, row } = props;

  console.log("transaction row", row);

  return (
    <>
      <TableRow
        hover
        onClick={(event) => handleClick(event, row.name)}
        //   role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.id}
        selected={isItemSelected}
        className={classes.tableMobile}
      >
        <TableCell padding="checkbox"></TableCell>
        <TableCell component="th" id={labelId} scope="row" padding="none">
          <span className={classes.cellTextSecondary}>
            {row.transactionType === "Mint"
              ? "Add"
              : row.transactionType === "Burn"
              ? "Remove"
              : "Swap"}{" "}
          </span>{" "}
          <span className={classes.cellText}>
            {row.token0.symbol} And {row.token1.symbol}
          </span>
        </TableCell>

        <TableCell align="right" className={classes.cellText}>
          {formatCurrency(row.total_value, true)}
        </TableCell>
      </TableRow>
      <TableRow
        hover
        onClick={(event) => handleClick(event, row.name)}
        //   role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.id}
        selected={isItemSelected}
        className={classes.tableDesktop}
      >
        <TableCell padding="checkbox"></TableCell>

        <TableCell component="th" id={labelId} scope="row" padding="none">
          <span className={classes.cellTextSecondary}>
            {row.transactionType === "Mint"
              ? "Add"
              : row.transactionType === "Burn"
              ? "Remove"
              : "Swap"}{" "}
          </span>{" "}
          <span className={classes.cellText}>
            {row.token0.symbol} And {row.token1.symbol}
          </span>
        </TableCell>
        <TableCell align="right">
          <span className={classes.cellText}>
            {formatCurrency(row.total_value, true)}
          </span>
        </TableCell>

        <TableCell align="right" className={classes.cellText}>
          {formatCurrency(row.amount0, true)}
        </TableCell>
        <TableCell align="right" className={classes.cellText}>
          {formatCurrency(row.amount1, true)}
        </TableCell>
        <TableCell align="right" className={classes.cellText}>
          {[...row.sender].splice(0, 5)} {"..."}
          {[...row.sender].splice([...row.sender].length - 5, 5)}
        </TableCell>
        <TableCell align="right" className={classes.cellText}>
          <span>{formatTime(row.time)}</span>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TransactionRow;
