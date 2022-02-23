export type APIResponse<T = any> = {
    results: Array<T> | T;
};

export type APIGameParams = {
    search?: string;
    page?: string;
    ordering?: string;
    tags?: string;
    metacritic?: string;
    genres?: string;
};
