import axios from 'axios';

import { ApiRequestResult, IRequestOptions,  } from '../@types';

export type ApiGet<T> = (
	url: string,
	options?: IRequestOptions,
) => Promise<ApiRequestResult<T>>;

export async function apiGet<TData = any>(
	url: string,
	options?: IRequestOptions,
): Promise<ApiRequestResult<TData>> {
	try {
		const response = await axios.get(url);
		const { data, count } = response.data;
		return { data, success: true, count };
	} catch (err) {
		console.log(err)
	}
}
