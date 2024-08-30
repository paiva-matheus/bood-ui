import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

type SortFilterProps = {
  sortProperties: (sortParams: SortParams) => void;
};

export const SortFilter = ({ sortProperties }: SortFilterProps) => {
  const [sort, setSort] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as Sort);
    if (event.target.value) {
      sortProperties({
        sortBy: 'price',
        sortOrder: event.target.value as Sort,
      });
    } else {
      sortProperties({
        sortBy: 'title',
        sortOrder: event.target.value as Sort,
      });
    }
  };
  return (
    <FormControl fullWidth sx={{ maxWidth: '81.25rem', marginTop: '2rem' }}>
      <InputLabel id='sort-filter-select'>Filtrar</InputLabel>
      <Select
        labelId='sort-filter-select'
        value={sort}
        label='Filtrar'
        onChange={handleChange}
      >
        <MenuItem value=''>Padrão</MenuItem>
        <MenuItem value='asc'>Menor Valor</MenuItem>
        <MenuItem value='desc'>Maior Valor</MenuItem>
      </Select>
    </FormControl>
  );
};
