import { GetRequirementResponseDto } from "../__requirement-get/get-requirement.response-dto";

export type GetReleaseResponseDto = {
  readonly id: string;
  readonly service_id: string;
  readonly name: string;
  readonly semantic_version: string;
  // readonly confluence_page_link: string;
  readonly requirements: GetRequirementResponseDto[];
}
