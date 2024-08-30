import { Pagination } from '@/types/pagination.types';
import { Pagination as MUIPagination } from '@mui/material/';
import Stack from '@mui/material/Stack';

type PaginationControlsProps = {
  pagination: Pagination;
  onChange: (page: number) => void;
};

export const PaginationControls = ({
  pagination,
  onChange,
}: PaginationControlsProps) => {
  const { page, totalPages } = pagination;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };
  return (
    <Stack
      spacing={2}
      sx={{ padding: '2rem 0 4rem', display: 'flex', alignItems: 'center' }}
    >
      <MUIPagination
        count={totalPages}
        showFirstButton
        showLastButton
        sx={{ margin: '0 auto' }}
        page={page}
        onChange={handleChange}
        defaultPage={1}
      />
    </Stack>
  );
};
