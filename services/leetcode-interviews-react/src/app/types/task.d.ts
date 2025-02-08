export interface Task {
    id: string;
    title: string;
    description: string;
    examples: string;
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[];
  }
  