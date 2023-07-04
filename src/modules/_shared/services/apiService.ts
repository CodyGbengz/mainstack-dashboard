import axios from 'axios';

import { ApiRequestResult } from '../@types';

export type ApiGet<T> = (url: string) => Promise<ApiRequestResult<T>>;

export async function apiGet(url: string) {
  try {
    const response = await axios.get(url);
    const { data } = response;
    return { data, success: true };
  } catch (err) {
    console.log(err);
  }
}
