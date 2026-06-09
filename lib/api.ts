import axios from 'axios';
import { type Note, type NoteTag } from '../types/note';

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: `https://notehub-public.goit.study/api/notes`,
  headers: {
    Authorization: `Bearer ${myKey}`,
  },
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface CreatesNote {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async (
  query: string,
  page: number
): Promise<FetchNotesResponse> => {
  const { data } = await api.get<FetchNotesResponse>('', {
    params: { page, search: query, perPage: 12 },
  });
  return data;
};

export const createNote = async (note: CreatesNote): Promise<Note> => {
  const { data } = await api.post<Note>('', note);
  return data;
};

export const deleteNote = async (id: Note['id']): Promise<Note> => {
  const { data } = await api.delete<Note>(`/${id}`);
  return data;
};

export const fetchNotesById = async (id: string): Promise<Note> => {
  const { data } = await api.get<Note>(`/${id}`);
  return data;
};
