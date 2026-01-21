import { Subject } from '../types';

export const DEPARTMENTS = [
  'CS','Math','English'
]

export const deparment_opiton = DEPARTMENTS.map((dept)=>({
  value : dept,
  label : dept,
}))

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    description: 'Fundamentals of data structures including arrays, linked lists, trees, and graphs',
    department: 'CS',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 2,
    name: 'Algorithms',
    code: 'CS102',
    description: 'Study of algorithms, complexity analysis, and optimization techniques',
    department: 'CS',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 3,
    name: 'Calculus I',
    code: 'MATH101',
    description: 'Introduction to differential and integral calculus',
    department: 'Math',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 4,
    name: 'Linear Algebra',
    code: 'MATH102',
    description: 'Vectors, matrices, linear transformations, and eigenvalues',
    department: 'Math',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 5,
    name: 'English Literature',
    code: 'ENG101',
    description: 'Survey of major works in English literature from medieval to modern times',
    department: 'English',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 6,
    name: 'Writing Composition',
    code: 'ENG102',
    description: 'Techniques for effective academic and professional writing',
    department: 'English',
    createdAt: '2024-01-15T10:00:00Z',
  },
]