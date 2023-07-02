export type ApiRequestResult<TData = any> = {
	error?: number | boolean;
	success?: boolean;
	data?: TData;
	status?: number | null;
	message?: string;
	errorData?: any;
	count?: number;
};

export interface IRequestOptions {
	fixedErrorMessage?: string;
	suppressErrors?: boolean;
	useServerErrorMsg?: boolean;
	returnDataExpected?: boolean;
}