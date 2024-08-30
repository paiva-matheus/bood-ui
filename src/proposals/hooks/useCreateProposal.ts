import { api } from '@/services/axios';
import {
  CreateProposalFormData,
  ProposalsService,
} from '@/proposals/services/proposals.service';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

export type CreateProposalFormSchema = Omit<
  CreateProposalFormData,
  'propertyId'
>;

export const useCreateProposal = () => {
  const proposalsService = new ProposalsService(api);

  const proposalSchema: ZodType<CreateProposalFormSchema> = z.object({
    name: z
      .string({ required_error: 'Campo obrigatório' })
      .min(1, 'Nome é obrigatório')
      .max(100, 'O nome deve ter no máximo 100 caracteres'),
    email: z
      .string({ required_error: 'Campo obrigatório' })
      .email('Email inválido'),
    observation: z
      .string({ required_error: 'Campo obrigatório' })
      .min(10, 'Faça uma obeservação para iniciar a proposta')
      .max(500, 'A observação deve ter no máximo 500 caracteres'),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProposalFormSchema>({
    resolver: zodResolver(proposalSchema),
  });

  const createProposal = async (
    createProposalFormData: CreateProposalFormData
  ) => {
    const { proposal, isSuccess } = await proposalsService.create(
      createProposalFormData
    );
    if (isSuccess) {
      toast.success('Proposta enviada!');
      reset({ email: '', name: '', observation: '' });
      return proposal;
    }
    toast.error('Falha ao enviar proposta, tente novamente.');
  };

  return { createProposal, handleSubmit, errors, control };
};
