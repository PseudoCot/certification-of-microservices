import { ServiceData } from "../data/service.data";
import { RequirementDataMocks } from "./requirements.data-mock";

export const ServiceDataMocks: ServiceData[] = [
  {
    id: 'sajoxc783hixc9v8',
    name: 'Data converter',
    description: 'Сервис для конвертации данных любым способом',
    confluencePageLink: 'cool-project.com/home',
    requirements: { ...RequirementDataMocks }
  },
  {
    id: 'disa8y8d29h8o8dfo',
    name: 'Image cropper',
    description: 'Сервис для обрезания изображений',
    // confluencePageLink: 'cool-project.com/home',
    requirements: { ...RequirementDataMocks }
  },
  {
    id: 'hd8s9ay82hc9ds0',
    name: 'PROJECT 777',
    description: 'Cool project 8)',
    // confluencePageLink: 'cool-project.com/home',
    requirements: { ...RequirementDataMocks }
  }
];
