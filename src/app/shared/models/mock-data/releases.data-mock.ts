import { ReleaseData } from "../data/release.data";
import { RequirementDataMocks } from "./requirements.data-mock";

export const ReleaseDataMocks: ReleaseData[] = [
  {
    id: 'shd8sa78g3fkn89ds',
    service_id: 'sajoxc783hixc9v8',
    name: 'Проектирование',
    // semanticVersion: '',
    // confluencePageLink: 'cool-project.com/home'
    requirements: { ...RequirementDataMocks }
  },
  {
    id: 'jfosd88f9huifs682',
    service_id: 'sajoxc783hixc9v8',
    name: 'Разработка',
    // semanticVersion: '',
    // confluencePageLink: 'cool-project.com/home'
    requirements: { ...RequirementDataMocks }
  },
  {
    id: 'h8fs8h893hjfs8721',
    service_id: 'sajoxc783hixc9v8',
    name: 'Тестирование',
    // semanticVersion: '',
    // confluencePageLink: 'cool-project.com/home'
    requirements: { ...RequirementDataMocks }
  }
];
