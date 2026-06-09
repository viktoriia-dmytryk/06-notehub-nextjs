'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { Note } from '../../types/note';

import { useState } from 'react';
import css from './NotesPage.module.css';
import { useDebouncedCallback } from 'use-debounce';
import { fetchNotes, FetchNotesResponse } from '@/lib/api';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import NoteList from '@/components/NoteList/NoteList';
import Modal from '@/components/Modal/Modal';
import NoteForm from '@/components/NoteForm/NoteForm';

function NotesPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSearch = useDebouncedCallback(query => {
    setQuery(query);
    setPage(1);
  }, 1000);

  const { data } = useQuery<FetchNotesResponse>({
    queryKey: ['notes', query, page],
    queryFn: () => fetchNotes(query, page),
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.totalPages ?? 0;

  const handleButtonModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox query={query} onSearch={onSearch} />
        {totalPages > 1 && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}
        <button
          className={css.button}
          type="button"
          onClick={handleButtonModal}
        >
          Create note +
        </button>
      </header>

      {(data?.notes?.length ?? 0) > 0 && (
        <NoteList noteListArray={data?.notes as Note[]} />
      )}
      {isModalOpen && (
        <Modal onClose={onCloseModal}>
          <NoteForm onClose={onCloseModal} />
        </Modal>
      )}
    </div>
  );
}

export default NotesPage;
