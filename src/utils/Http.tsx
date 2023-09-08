import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export class Http {
    instance: AxiosInstance
    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL
        })
    }
    get<R = unknown>(url: string, query?: Record<string, string>, config?: Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>) {
        return this.instance.request<R>({
            ...config,
            url,
            params: query,
            method: 'get'
        })
    }
    post<R = unknown>(url: string, query?: Record<string, string>, config?: Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>) {
        return this.instance.request<R>({
            ...config,
            url,
            params: query,
            method: 'post'
        })
    }
    patch<R = unknown>(url: string, query?: Record<string, string>, config?: Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>) {
        return this.instance.request<R>({
            ...config,
            url,
            params: query,
            method: 'patch'
        })
    }
    delect<R = unknown>(url: string, query?: Record<string, string>, config?: Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>) {
        return this.instance.request<R>({
            ...config,
            url,
            params: query,
            method: 'delect'
        })
    }
}

export const http = new Http('/api/v1')

http.instance.interceptors.request.use(config => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`
    }
    return config
})

http.instance.interceptors.response.use(response => {
    return response
}, (error) => {
    if (error.response) {
        const axiosError = error as AxiosError
        if (axiosError.response?.status === 429) {
            alert('你太频繁了')
        }
    }
    throw error
})