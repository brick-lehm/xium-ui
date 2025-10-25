import type { Meta, StoryObj } from '@storybook/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHeadCustom, TableSelectedAction, TablePaginationCustom, useTable } from './index';

const meta: Meta = {
  title: 'Components/Table',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const TABLE_HEAD = [
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'role', label: 'Role' },
  { id: 'status', label: 'Status' },
];

const TABLE_DATA = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', status: 'Active' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' },
];

export const WithCustomHead: Story = {
  render: () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHeadCustom headLabel={TABLE_HEAD} />
        <TableBody>
          {TABLE_DATA.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
};

export const WithSelection: Story = {
  render: () => {
    const table = useTable();

    return (
      <TableContainer component={Paper}>
        <TableSelectedAction
          numSelected={table.selected.length}
          rowCount={TABLE_DATA.length}
          onSelectAllRows={(checked) =>
            table.onSelectAllRows(
              checked,
              TABLE_DATA.map((row) => row.id)
            )
          }
          action={null}
        />
        <Table>
          <TableHeadCustom
            headLabel={TABLE_HEAD}
            rowCount={TABLE_DATA.length}
            numSelected={table.selected.length}
            onSelectAllRows={(checked) =>
              table.onSelectAllRows(
                checked,
                TABLE_DATA.map((row) => row.id)
              )
            }
          />
          <TableBody>
            {TABLE_DATA.map((row) => (
              <TableRow key={row.id} selected={table.selected.includes(row.id)}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePaginationCustom
          count={TABLE_DATA.length}
          page={table.page}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          onRowsPerPageChange={table.onChangeRowsPerPage}
        />
      </TableContainer>
    );
  },
};
