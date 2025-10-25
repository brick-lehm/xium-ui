import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { DataGridToolbarCore } from './toolbar-core';

const meta: Meta = {
  title: 'Components/CustomDataGrid',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  { field: 'email', headerName: 'Email', width: 200 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'jon@example.com' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei@example.com' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'jaime@example.com' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'arya@example.com' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 28, email: 'daenerys@example.com' },
];

export const WithCustomToolbar: Story = {
  render: () => (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: DataGridToolbarCore,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  ),
};

export const Basic: Story = {
  render: () => (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  ),
};
