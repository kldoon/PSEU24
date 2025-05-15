import type express from 'express';

export type IGetUsersRequest = express.Request<any, any, any, Store.IGetUsersQueryPayload>;
export type IGetUsersResponse = express.Response<Store.IUser[] | string>;