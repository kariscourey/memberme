import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setMember } from '../rtk-files/memberSlice';
import { useDeleteSavedMemberMutation } from '../rtk-files/savedMembersApi';
import { ListCardButton } from './ListCardButton';
import { preventDefault } from './util';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};



export function CustomTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const rows = props.rows;

    const [deleteSavedMember] = useDeleteSavedMemberMutation();
    const { queries: savedMembersQueries } = useSelector(state => state.savedMembers);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const routeChange = (value) => {
        let path = `/members/${value}`;
        navigate(path);
    }

    const handleClick = async (e) => {

        const savedMember = savedMembersQueries[`getSavedMembers(undefined)`]?.data?.saved_members.find(element => element.uuid === e.target.value);

        const card = {
            name: {
                first: savedMember?.name_first,
                last: savedMember?.name_last,
            },
            location: {
                street: {
                    number: savedMember?.street_number,
                    name: savedMember?.street_name,
                },
                city: savedMember?.city,
                state: savedMember?.state,
                postcode: savedMember?.postcode,
            },
            email: savedMember?.email,
            login: {
                uuid: savedMember?.uuid,
            },
            dob: {
                date: savedMember?.dob_date,
                age: savedMember?.dob_age,
            },
            phone: savedMember?.phone,
            picture: {
                thumbnail: savedMember?.thumbnail,
                large: savedMember?.large
            },
        }

        dispatch(setMember(card));
        routeChange(e.target.value);

    }

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row" align="center">
                                <img src={row.thumbnail} alt="thumbnail" />
                            </TableCell>
                            <TableCell>
                                <ListCardButton value={row.uuid} onClick={handleClick} >
                                    {row.name_first} {row.name_last}
                                </ListCardButton>
                            </TableCell>
                            <TableCell>
                                {row.dob_age}
                            </TableCell>
                            <TableCell>
                                {row.email}
                            </TableCell>
                            <TableCell>
                                {row.street_number} {row.street_name}<br />
                                {row.city}, {row.state} {row.postcode}
                            </TableCell>
                            <TableCell>
                                {row.phone}
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined" color="error" value={row} onClick={preventDefault(deleteSavedMember, () => (row.uuid))}>
                                    DELETE
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
