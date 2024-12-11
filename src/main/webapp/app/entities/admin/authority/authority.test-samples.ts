import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '07f8cdc9-1684-4d20-9f35-cc519ac62d5c',
};

export const sampleWithPartialData: IAuthority = {
  name: '1a1930d3-7b81-40f6-b0d2-842d93e9c0fd',
};

export const sampleWithFullData: IAuthority = {
  name: '40308b19-3284-4c8e-b5f4-30c3f1e4e273',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
