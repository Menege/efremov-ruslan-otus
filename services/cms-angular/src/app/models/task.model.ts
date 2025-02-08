import { Tag } from './tag.model';

export interface Task {
    id: string;
    title: string;
    description: string;
    inputExample: string;
    outputExample: string;
    difficulty: string;
    tags: Tag[];
  }
  