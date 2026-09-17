import {
  ArrowRight,
  BookHeart,
  BookOpen,
  Clock3,
  Headphones,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  MonitorSmartphone,
  Search,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { LibraryTable } from "@/components/library-table";
import { Navbar } from "@/components/navbar";

const categories = [
  { name: "Fiction", count: "12,480 titles", icon: BookOpen, tone: "sage" },
  { name: "History", count: "6,210 titles", icon: Landmark, tone: "olive" },
  { name: "Nature", count: "4,890 titles", icon: Leaf, tone: "mint" },
  { name: "Audiobooks", count: "8,320 titles", icon: Headphones, tone: "lime" },
];

const featuredBooks = [
  {
    title: "The Hidden Life of Trees",
    author: "Peter Wohlleben",
    category: "Nature",
    cover: "cover-forest",
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fiction",
    cover: "cover-midnight",
  },
  {
    title: "The Art of Stillness",
    author: "Pico Iyer",
    category: "Essays",
    cover: "cover-stillness",
  },
  {
    title: "Gathering Moss",
    author: "Robin Wall Kimmerer",
    category: "Science",
    cover: "cover-moss",
  },
];

const libraryJsonLd = {
  "@context": "https://schema.org",
  "@type": "Library",
  name: "Verdant Public Library",
  description:
    "A modern public library offering books, digital resources, events, and welcoming community spaces.",
  url: "https://verdant-library.example",
  email: "hello@verdantlibrary.org",
  telephone: "+1-555-014-7823",
  address: {
    "@type": "PostalAddress",
    streetAddress: "148 Willow Avenue",
    addressLocality: "Greenfield",
    addressRegion: "CA",
    postalCode: "93927",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(libraryJsonLd) }}
      />

      <div className="announcement">
        <div className="shell announcement-inner">
          <span>
            <Sparkles size={14} />
            Fall reading season is here
          </span>
          <a href="#collections">
            See our staff picks <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-leaf hero-leaf-one" />
          <div className="hero-leaf hero-leaf-two" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <Leaf size={15} />
                Your community. Your library.
              </span>
              <h1>
                Stories that grow
                <span>with you.</span>
              </h1>
              <p>
                Discover ideas, build new skills, and find a quiet corner to call
                your own. Your next chapter starts here.
              </p>

              <form className="hero-search" action="#catalog">
                <Search size={21} />
                <label className="sr-only" htmlFor="hero-search">
                  Search the library catalog
                </label>
                <input id="hero-search" placeholder="Search books, authors, and more" />
                <button type="submit" aria-label="Search">
                  <ArrowRight size={19} />
                </button>
              </form>

              <div className="hero-links">
                <span>Popular:</span>
                <a href="#catalog">New arrivals</a>
                <a href="#catalog">Award winners</a>
                <a href="#catalog">For kids</a>
              </div>
            </div>

            <div className="hero-art" aria-label="A curated stack of books">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="book-display">
                <div className="display-book display-book-left">
                  <span className="book-topline">A FIELD GUIDE TO</span>
                  <strong>WILD<br />IDEAS</strong>
                  <Leaf size={28} />
                  <small>ROWAN BELL</small>
                </div>
                <div className="display-book display-book-center">
                  <span className="book-topline">THE</span>
                  <strong>GREEN<br />ROOM</strong>
                  <span className="book-sun" />
                  <small>ADA MORI</small>
                </div>
                <div className="display-book display-book-right">
                  <span className="book-topline">ESSAYS ON</span>
                  <strong>QUIET<br />THINGS</strong>
                  <span className="book-line-art">✦</span>
                  <small>LOU WREN</small>
                </div>
              </div>
              <div className="floating-card floating-rating">
                <span className="floating-icon">
                  <Star size={17} fill="currentColor" />
                </span>
                <span>
                  <strong>4.9 / 5</strong>
                  <small>Reader satisfaction</small>
                </span>
              </div>
              <div className="floating-card floating-members">
                <span className="avatar-stack">
                  <i>AM</i><i>JL</i><i>RK</i>
                </span>
                <span>
                  <strong>32k+</strong>
                  <small>Active members</small>
                </span>
              </div>
            </div>
          </div>

          <div className="shell hero-stats">
            <div>
              <strong>75,000+</strong>
              <span>Books & resources</span>
            </div>
            <div>
              <strong>24 / 7</strong>
              <span>Digital access</span>
            </div>
            <div>
              <strong>120+</strong>
              <span>Events each month</span>
            </div>
            <div>
              <strong>Free</strong>
              <span>For every resident</span>
            </div>
          </div>
        </section>

        <section className="section categories-section" id="explore">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">Explore by interest</span>
                <h2>Find your next curiosity.</h2>
              </div>
              <a className="text-link" href="#catalog">
                Browse all categories <ArrowRight size={16} />
              </a>
            </div>

            <div className="category-grid">
              {categories.map(({ name, count, icon: Icon, tone }) => (
                <a className={`category-card category-${tone}`} href="#catalog" key={name}>
                  <span className="category-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </span>
                  <span>
                    <strong>{name}</strong>
                    <small>{count}</small>
                  </span>
                  <ArrowRight className="category-arrow" size={18} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section featured-section" id="collections">
          <div className="shell">
            <div className="section-heading centered-heading">
              <span className="eyebrow">Handpicked for you</span>
              <h2>Fresh from the shelves.</h2>
              <p>Thoughtful reads selected by the people who know books best.</p>
            </div>

            <div className="book-grid">
              {featuredBooks.map((book) => (
                <article className="book-card" key={book.title}>
                  <div className={`book-cover ${book.cover}`}>
                    <div className="cover-decoration" />
                    <span>{book.category}</span>
                    <strong>{book.title}</strong>
                    <small>{book.author}</small>
                  </div>
                  <div className="book-card-copy">
                    <span className="book-category">{book.category}</span>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <span className="availability">
                      <i />
                      Available now
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="center-action">
              <a className="button button-outline" href="#catalog">
                View all new arrivals <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section services-section">
          <div className="shell services-grid">
            <div className="services-copy">
              <span className="eyebrow light-eyebrow">More than books</span>
              <h2>A place to learn, make, and connect.</h2>
              <p>
                From research help to creative technology, your library card
                opens the door to more than you might expect.
              </p>
              <a className="button button-light" href="#membership">
                Explore member benefits <ArrowRight size={17} />
              </a>
            </div>
            <div className="services-list">
              <article>
                <span><MonitorSmartphone size={22} /></span>
                <div>
                  <h3>Digital library</h3>
                  <p>eBooks, films, courses, and magazines—wherever you are.</p>
                </div>
              </article>
              <article>
                <span><Users size={22} /></span>
                <div>
                  <h3>Community programs</h3>
                  <p>Book clubs, workshops, story time, and local gatherings.</p>
                </div>
              </article>
              <article>
                <span><BookHeart size={22} /></span>
                <div>
                  <h3>Personal reading help</h3>
                  <p>Tell our librarians what you love and get a custom list.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section catalog-section" id="catalog">
          <div className="shell">
            <div className="section-heading split-heading catalog-heading">
              <div>
                <span className="eyebrow">Library catalog</span>
                <h2>Browse the collection.</h2>
                <p>Search, filter, and sort a sample of our most-loved titles.</p>
              </div>
              <span className="updated-label">
                <Clock3 size={15} /> Updated today
              </span>
            </div>
            <LibraryTable />
          </div>
        </section>

        <section className="section events-section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">At the library</span>
                <h2>Something is always happening.</h2>
              </div>
              <a className="text-link" href="#visit">
                View all events <ArrowRight size={16} />
              </a>
            </div>

            <div className="events-grid">
              <article className="event-card event-featured">
                <div className="event-date"><strong>24</strong><span>SEP</span></div>
                <div>
                  <span className="event-type">Author talk</span>
                  <h3>An evening with local storytellers</h3>
                  <p>Meet three remarkable writers reshaping how we see home.</p>
                  <span className="event-meta"><Clock3 size={15} /> 6:30 PM · Reading Room</span>
                </div>
                <a href="#visit" aria-label="View event"><ArrowRight size={19} /></a>
              </article>
              <article className="event-card">
                <div className="event-date"><strong>27</strong><span>SEP</span></div>
                <div>
                  <span className="event-type">Workshop</span>
                  <h3>Creative writing lab</h3>
                  <span className="event-meta"><Clock3 size={15} /> 11:00 AM · Studio 2</span>
                </div>
              </article>
              <article className="event-card">
                <div className="event-date"><strong>01</strong><span>OCT</span></div>
                <div>
                  <span className="event-type">For families</span>
                  <h3>Story garden Saturday</h3>
                  <span className="event-meta"><Clock3 size={15} /> 10:00 AM · Courtyard</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="membership-section" id="membership">
          <div className="shell membership-card">
            <div className="membership-pattern" />
            <div>
              <span className="eyebrow light-eyebrow">
                <Sparkles size={15} /> Your library card is free
              </span>
              <h2>One card. A world of possibilities.</h2>
              <p>
                Join thousands of readers, learners, and neighbors. It only takes
                a few minutes to get started.
              </p>
            </div>
            <a className="button button-lime" href="#">
              Become a member <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" id="visit">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#">
              <span className="brand-mark">
                <BookOpen size={22} strokeWidth={1.8} />
              </span>
              <span>
                <strong>Verdant</strong>
                <small>Public Library</small>
              </span>
            </a>
            <p>
              A welcoming place for every story, every question, and every
              neighbor.
            </p>
          </div>
          <div className="footer-links">
            <h3>Explore</h3>
            <a href="#catalog">Catalog</a>
            <a href="#collections">New arrivals</a>
            <a href="#explore">Digital library</a>
            <a href="#visit">Events</a>
          </div>
          <div className="footer-links">
            <h3>Library</h3>
            <a href="#membership">Get a card</a>
            <a href="#visit">About us</a>
            <a href="#visit">Support the library</a>
            <a href="#visit">Accessibility</a>
          </div>
          <div className="footer-contact">
            <h3>Visit us</h3>
            <p><MapPin size={17} /> 148 Willow Avenue<br />Greenfield, CA 93927</p>
            <p><Clock3 size={17} /> Mon–Fri 9–8<br />Sat–Sun 10–5</p>
            <p><Mail size={17} /> hello@verdantlibrary.org</p>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Verdant Public Library</span>
          <span>Built for curious minds.</span>
        </div>
      </footer>
    </>
  );
}
