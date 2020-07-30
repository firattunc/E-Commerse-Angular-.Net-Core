import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedProductResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}
