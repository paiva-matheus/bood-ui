import { api } from '@/services/axios';
import { faker } from '@faker-js/faker';
import { ProposalsService } from '@/proposals/services/proposals.service';
import { proposalFixture } from './fixtures/proposal';

const mockPost = jest.spyOn(api, 'post');
const service = new ProposalsService(api);

describe('create', () => {
  test('returns success response with proposal', async () => {
    const mockProposal = proposalFixture();

    const mockedResponse = {
      status: 201,
      data: { data: mockProposal },
      statusText: 'Created',
      headers: {},
      config: {},
    };

    mockPost.mockResolvedValueOnce(mockedResponse);
    const { isSuccess, proposal } = await service.create({
      email: mockProposal.email,
      name: mockProposal.email,
      observation: mockProposal.observation,
      propertyId: mockProposal.propertyId,
    });

    expect(isSuccess).toEqual(true);
    expect(proposal).toEqual(mockProposal);
    expect(mockPost).toHaveBeenCalledWith(`/proposals`, {
      email: mockProposal.email,
      name: mockProposal.email,
      observation: mockProposal.observation,
      propertyId: mockProposal.propertyId,
    });
  });

  test('returns an error when property not found', async () => {
    const mockProposal = proposalFixture();
    const apiError = {
      message: 'Invalid or missing inputs provided for: propertyId',
    };
    const mockedErrorResponse = {
      response: {
        data: apiError,
        status: 400,
        statusText: 'Bad Request',
        headers: {},
        config: {},
      },
    };

    mockPost.mockRejectedValueOnce(mockedErrorResponse);
    const fakeUUID = faker.string.uuid();
    const response = await service.create({
      email: mockProposal.email,
      name: mockProposal.email,
      observation: mockProposal.observation,
      propertyId: fakeUUID,
    });

    expect(response.isSuccess).toEqual(false);
    expect(response.error).toEqual(apiError);
    expect(mockPost).toHaveBeenCalledWith(`/proposals`, {
      email: mockProposal.email,
      name: mockProposal.email,
      observation: mockProposal.observation,
      propertyId: fakeUUID,
    });
  });
});
