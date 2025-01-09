import { GetRequirementResponseDto } from "../__requirement-get/get-requirement.response-dto";

export type GetServiceResponseDto = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly confluence_page_link: string;
  readonly requirements: GetRequirementResponseDto[];
}
