export type APIResponse<T = any> = {
    results: Array<T> | T;
}