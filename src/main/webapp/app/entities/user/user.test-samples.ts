import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 27099,
  login: 'Ta',
};

export const sampleWithPartialData: IUser = {
  id: 30476,
  login: 'urb5Fv',
};

export const sampleWithFullData: IUser = {
  id: 2725,
  login: '_=B}c@m9y\\<Hfk2b\\?Ff\\CB6',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
