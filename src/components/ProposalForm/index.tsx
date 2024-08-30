import {
  CreateProposalFormSchema,
  useCreateProposal,
} from '@/proposals/hooks/useCreateProposal';
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { ProposalFormContainer } from './styles';

type ProposalFormProps = {
  propertyId: string;
};

const ButtonSX = {
  transition: 'all 0.3s ease-in-out',
  background: 'var(--blue)',
  fontWeight: 700,
  marginTop: '1rem',
  padding: '1rem 1rem',
  fontSize: '1rem',
  '&:hover': {
    background: 'var(--blue)',
    filter: 'brightness(90%)',
  },
};

export const ProposalForm = ({ propertyId }: ProposalFormProps) => {
  const { errors, handleSubmit, control, createProposal } = useCreateProposal();

  const onSubmit = async (data: CreateProposalFormSchema) => {
    createProposal({ ...data, propertyId });
  };

  return (
    <ProposalFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Typography
        variant='h5'
        component='h2'
        gutterBottom
        fontWeight={700}
        textAlign='center'
        sx={{ color: 'var(--text-color)' }}
      >
        Entre em contato
      </Typography>
      <Controller
        name='name'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='Nome'
            variant='outlined'
            fullWidth
            margin='normal'
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='Email'
            variant='outlined'
            fullWidth
            margin='normal'
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        name='observation'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='Observação'
            variant='outlined'
            fullWidth
            margin='normal'
            multiline
            rows={4}
            error={!!errors.observation}
            helperText={errors.observation?.message}
          />
        )}
      />

      <Button type='submit' variant='contained' sx={ButtonSX} fullWidth>
        Enviar
      </Button>
    </ProposalFormContainer>
  );
};
