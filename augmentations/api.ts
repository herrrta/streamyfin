import {Api} from "@jellyfin/sdk";
import {AxiosInstance} from "axios";
import {Results} from "@/utils/jellyseerr/server/models/Search";

interface SearchQuery {
  page: number,
  total_pages: number,
  total_results: number;
  results: Results;
}

namespace Jellyseerr {
  export enum Endpoints {
    SEARCH = "/search",
    REQUEST = "/request",
    MOVIES = "/movies",
    TV = "/tv"
  }

  export class Api {
    baseUrl: string;
    axiosInstance: AxiosInstance;

    constructor (baseUrl: string, axios: AxiosInstance) {
      this.baseUrl = baseUrl;
      this.axiosInstance = axios;
    }

    async search(params: SearchQuery): Promise<Results> {
      const response = await this.axiosInstance.get(this.baseUrl + Endpoints.SEARCH, {params})
      return response.data as Results
    }
  }
}

declare module "@jellyfin/sdk" {
  interface Api {
    jellyseerr(baseUrl: string): Jellyseerr.Api;
  }
}

Api.prototype.jellyseerr = function (baseUrl: string) {
  return new Jellyseerr.Api(baseUrl, this.axiosInstance);
}

export {};