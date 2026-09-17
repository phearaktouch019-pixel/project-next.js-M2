"use client";

import {
  ArrowDownAZ,
  ArrowUpAZ,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useMemo, useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  year: number;
  format: string;
  status: "Available" | "Checked out" | "Reference";
};

type SortKey = "title" | "author" | "year";
type SortDirection = "asc" | "desc";

const books: Book[] = [
  { id: 1, title: "The Overstory", author: "Richard Powers", category: "Fiction", year: 2018, format: "Hardcover", status: "Available" },
  { id: 2, title: "Braiding Sweetgrass", author: "Robin Wall Kimmerer", category: "Nature", year: 2013, format: "Paperback", status: "Checked out" },
  { id: 3, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", year: 1988, format: "Hardcover", status: "Available" },
  { id: 4, title: "The Creative Act", author: "Rick Rubin", category: "Arts", year: 2023, format: "Audiobook", status: "Available" },
  { id: 5, title: "The Dawn of Everything", author: "David Graeber", category: "History", year: 2021, format: "eBook", status: "Checked out" },
  { id: 6, title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", category: "Fiction", year: 2022, format: "Hardcover", status: "Available" },
  { id: 7, title: "The Book of Delights", author: "Ross Gay", category: "Essays", year: 2019, format: "Paperback", status: "Available" },
  { id: 8, title: "Ways of Seeing", author: "John Berger", category: "Arts", year: 1972, format: "Paperback", status: "Reference" },
  { id: 9, title: "Entangled Life", author: "Merlin Sheldrake", category: "Nature", year: 2020, format: "eBook", status: "Available" },
  { id: 10, title: "The Disordered Cosmos", author: "Chanda Prescod-Weinstein", category: "Science", year: 2021, format: "Audiobook", status: "Available" },
  { id: 11, title: "Pachinko", author: "Min Jin Lee", category: "Fiction", year: 2017, format: "Paperback", status: "Checked out" },
  { id: 12, title: "The Warmth of Other Suns", author: "Isabel Wilkerson", category: "History", year: 2010, format: "Hardcover", status: "Available" },
  { id: 13, title: "On Freedom", author: "Maggie Nelson", category: "Essays", year: 2021, format: "Hardcover", status: "Reference" },
  { id: 14, title: "Underland", author: "Robert Macfarlane", category: "Nature", year: 2019, format: "Paperback", status: "Available" },
];

const pageSize = 6;

export function LibraryTable() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [status, setStatus] = useState("All status");
  const [sortKey, setSortKey] = useState<SortKey>("title");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => ["All categories", ...Array.from(new Set(books.map((book) => book.category))).sort()],
    [],
  );

  const filteredBooks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return books
      .filter((book) => {
        const matchesQuery =
          !normalizedQuery ||
          book.title.toLowerCase().includes(normalizedQuery) ||
          book.author.toLowerCase().includes(normalizedQuery);
        const matchesCategory = category === "All categories" || book.category === category;
        const matchesStatus = status === "All status" || book.status === status;
        return matchesQuery && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        const first = a[sortKey];
        const second = b[sortKey];
        const comparison =
          typeof first === "number"
            ? first - Number(second)
            : first.localeCompare(String(second));
        return sortDirection === "asc" ? comparison : -comparison;
      });
  }, [category, query, sortDirection, sortKey, status]);

  const totalPages = Math.max(1, Math.ceil(filteredBooks.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleBooks = filteredBooks.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  function updateFilters(callback: () => void) {
    callback();
    setPage(1);
  }

  function updateSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((direction) => (direction === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
    setPage(1);
  }

  return (
    <div className="catalog-panel">
      <div className="catalog-toolbar">
        <label className="catalog-search">
          <span className="sr-only">Search by title or author</span>
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => updateFilters(() => setQuery(event.target.value))}
            placeholder="Search title or author..."
          />
        </label>

        <div className="catalog-filters">
          <span className="filter-label">
            <SlidersHorizontal size={16} />
            Filter
          </span>
          <label>
            <span className="sr-only">Category</span>
            <select
              value={category}
              onChange={(event) => updateFilters(() => setCategory(event.target.value))}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">Availability status</span>
            <select
              value={status}
              onChange={(event) => updateFilters(() => setStatus(event.target.value))}
            >
              <option>All status</option>
              <option>Available</option>
              <option>Checked out</option>
              <option>Reference</option>
            </select>
          </label>
        </div>
      </div>

      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>
                <button type="button" onClick={() => updateSort("title")}>
                  Title {sortKey === "title" && (sortDirection === "asc" ? <ArrowDownAZ size={15} /> : <ArrowUpAZ size={15} />)}
                </button>
              </th>
              <th>
                <button type="button" onClick={() => updateSort("author")}>
                  Author {sortKey === "author" && (sortDirection === "asc" ? <ArrowDownAZ size={15} /> : <ArrowUpAZ size={15} />)}
                </button>
              </th>
              <th>Category</th>
              <th>
                <button type="button" onClick={() => updateSort("year")}>
                  Year {sortKey === "year" && (sortDirection === "asc" ? <ArrowDownAZ size={15} /> : <ArrowUpAZ size={15} />)}
                </button>
              </th>
              <th>Format</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {visibleBooks.map((book) => (
              <tr key={book.id}>
                <td data-label="Title">
                  <strong>{book.title}</strong>
                </td>
                <td data-label="Author">{book.author}</td>
                <td data-label="Category">
                  <span className="category-tag">{book.category}</span>
                </td>
                <td data-label="Year">{book.year}</td>
                <td data-label="Format">{book.format}</td>
                <td data-label="Status">
                  <span className={`status status-${book.status.toLowerCase().replace(" ", "-")}`}>
                    <span />
                    {book.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleBooks.length === 0 && (
        <div className="empty-state">
          <Search size={28} />
          <strong>No books found</strong>
          <span>Try another title, author, or filter.</span>
        </div>
      )}

      <div className="catalog-footer">
        <span>
          Showing {visibleBooks.length ? (currentPage - 1) * pageSize + 1 : 0}–
          {Math.min(currentPage * pageSize, filteredBooks.length)} of {filteredBooks.length} books
        </span>
        <div className="pagination" aria-label="Catalog pagination">
          <button
            type="button"
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => setPage((current) => Math.max(1, current - 1))}
          >
            <ChevronLeft size={17} />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            aria-label="Next page"
            disabled={currentPage === totalPages}
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
