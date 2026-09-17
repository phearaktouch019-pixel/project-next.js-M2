"use client";

import { ArrowRight, Search } from "lucide-react";
import {
  createContext,
  type FormEvent,
  type ReactNode,
  useContext,
  useState,
} from "react";

type CatalogSearchContextValue = {
  query: string;
  setQuery: (query: string) => void;
};

const CatalogSearchContext = createContext<CatalogSearchContextValue | null>(
  null,
);

export function CatalogSearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");

  return (
    <CatalogSearchContext.Provider value={{ query, setQuery }}>
      {children}
    </CatalogSearchContext.Provider>
  );
}

export function useCatalogSearch() {
  const context = useContext(CatalogSearchContext);

  if (!context) {
    throw new Error("useCatalogSearch must be used within CatalogSearchProvider");
  }

  return context;
}

export function HeroCatalogSearch() {
  const { query, setQuery } = useCatalogSearch();

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form className="hero-search" onSubmit={submitSearch}>
      <Search size={21} />
      <label className="sr-only" htmlFor="hero-search">
        Search the library catalog
      </label>
      <input
        id="hero-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search books, authors, and more"
      />
      <button type="submit" aria-label="Search">
        <ArrowRight size={19} />
      </button>
    </form>
  );
}
