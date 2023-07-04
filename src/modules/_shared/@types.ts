export type ApiRequestResult<TData = any> = {
	error?: number | boolean;
	success?: boolean;
	data?: TData;
	status?: number | null;
	message?: string;
	errorData?: any;
	count?: number;
};

export interface DashboardData {
    graph_data: any;
    top_locations: any;
    top_sources: any;
}