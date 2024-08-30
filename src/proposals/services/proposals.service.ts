import BaseAPI from '@/services/base-api';

export type CreateProposalFormData = {
  name: string;
  email: string;
  observation: string;
  propertyId: string;
};

export type CreateProposalResponse = {
  proposal?: CreateProposalFormData;
  error?: any;
  isSuccess: boolean;
};

export class ProposalsService extends BaseAPI {
  async create({
    name,
    email,
    observation,
    propertyId,
  }: CreateProposalFormData) {
    try {
      const response = await this.http.post('/proposals', {
        name,
        email,
        observation,
        propertyId,
      });

      const proposal = response.data.data;

      return { proposal, isSuccess: true };
    } catch (error: any) {
      return {
        isSuccess: false,
        error: error.response?.data,
      };
    }
  }
}
