import React, { FC } from 'react';

type Props = {
  search: string;
  setSearch: (value: string) => void;
  sort: 'title' | 'publicationDate' | 'price';
  setSort: (value: 'title' | 'publicationDate' | 'price') => void;
};

export const SearchAndSort: FC<Props> = ({ search, setSearch, sort, setSort }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value as 'title' | 'publicationDate' | 'price')}
        className="border p-2 rounded"
      >
        <option value="title">Title</option>
        <option value="publicationDate">Date</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};