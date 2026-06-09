'use client';

interface ErrorProps {
  error: Error;
}

function NotesError({ error }: ErrorProps) {
  return <p>Could not fetch the list of notes. {error.message}</p>;
}

export default NotesError;
