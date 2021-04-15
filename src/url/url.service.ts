import { URL } from "url";
import { Injectable } from "@nestjs/common";
import { LinksDto } from "../dto/links.dto";
import { MetaDto } from "../dto/meta.dto";
import { RecordLinksDto } from "../dto/recordLinks.dto";
import { AppConfiguration } from "../app/app.config";

@Injectable()
class UrlService {
  public getLinksDto(path: string, meta: MetaDto): LinksDto {
    const links = new LinksDto();

    const { currentPage, isLastPage, perPage, totalPages } = meta;

    if (totalPages < 2) {
      return links;
    }

    if (currentPage > 1) {
      links.prev = this.getPreviousLink(path, currentPage, perPage);
      links.first = this.getFirstLink(path, perPage);
    }

    if (!isLastPage) {
      links.next = this.getNextLink(path, currentPage, totalPages, perPage);
      links.last = this.getLastLink(path, totalPages, perPage);
    }

    return links;
  }

  public getRecordLinksDto(path: string, id: number | string): RecordLinksDto {
    const link = new RecordLinksDto();

    link.self = new URL(`${path}/${id}`, AppConfiguration.baseUrl).toString();

    return link;
  }

  public getFirstLink(path: string, perPage: number): string {
    const first = new URL(path, AppConfiguration.baseUrl);

    first.searchParams.append("page", "1");
    first.searchParams.append("perPage", String(perPage));

    return first.toString();
  }

  public getNextLink(
    path: string,
    currentPage: number,
    totalPages: number,
    perPage: number,
  ): string {
    const next = new URL(path, AppConfiguration.baseUrl);

    next.searchParams.append(
      "page",
      String(Math.min(totalPages, currentPage + 1)),
    );

    next.searchParams.append("perPage", String(perPage));

    return next.toString();
  }

  public getPreviousLink(
    path: string,
    currentPage: number,
    perPage: number,
  ): string {
    const prev = new URL(path, AppConfiguration.baseUrl);

    prev.searchParams.append("page", String(Math.max(1, currentPage - 1)));
    prev.searchParams.append("perPage", String(perPage));

    return prev.toString();
  }

  public getLastLink(
    path: string,
    totalPages: number,
    perPage: number,
  ): string {
    const last = new URL(path, AppConfiguration.baseUrl);

    last.searchParams.append("page", String(totalPages));
    last.searchParams.append("perPage", String(perPage));

    return last.toString();
  }
}

export default UrlService;

export { UrlService };
