// ...existing code...
const CONFIG = {
  coupleNames: "Julia & Grzegorz",
  date: "12.09.2025",
  location: "Villa Park, Warszawa",
  heroImage:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
  uploadUrl: "https://twoj-link-do-uploadu.example.com",
  galleryUrl:
    "https://www.dropbox.com/scl/fo/g0655yujh9qlhmpd5fiv7/AGhRYGcy1fdhMG9bKTUo8KE?rlkey=ky2zky799spgchik9g7lgrz81&st=9ni9kki1&dl=0",
};

export default function App() {
  const [first, second] = CONFIG.coupleNames.split("&").map((s) => s.trim());

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-neutral-900">
      {/* Górna sekcja */}
      <section className="flex justify-center px-4 sm:px-8 lg:px-16 py-10 sm:py-12 lg:py-16">
        <div className="w-full max-w-[100rem] rounded-[2rem] border border-neutral-200 bg-white/70 shadow-md backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-[2rem]">
            <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-start gap-14 relative">
              {/* Tylko na mobile: przezroczyste zdjęcie w tle */}
              <img
                src="/strona2.svg"
                alt="Para młoda tło"
                className="block md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 opacity-30 pointer-events-none select-none z-0"
              />
              <div className="flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500">
                <span>Elegant</span>
                <span className="font-serif">Rom&nce</span>
                <span>Romantic</span>
              </div>
              <h1 className="mt-6 font-serif text-[40px] leading-[1.05] sm:text-[56px] md:text-[68px] lg:text-[78px] tracking-tight text-neutral-900">
                <span className="block relative z-10">{first}</span>
                <span className="block -mt-2 relative z-10">
                  &amp; {second}
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-neutral-600">
                <span className="relative z-10">
                  Join us for a magical celebration!
                </span>
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href="https://www.dropbox.com/request/0PA6GvCR3z2qEM11zi24"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-white shadow-sm hover:bg-neutral-800 z-10 cursor-pointer"
                >
                  <span className="mr-2">📤</span> Dodaj zdjęcia
                </a>
                <a
                  href={CONFIG.galleryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-neutral-900 shadow-sm hover:bg-neutral-100 z-10"
                >
                  <span className="mr-2">📷</span> Zobacz i pobierz
                </a>
              </div>
              <div className="mt-4 text-xs text-neutral-500">
                {CONFIG.date} • {CONFIG.location}
              </div>
            </div>
            <div className="relative p-8 sm:p-12 lg:p-16 flex items-center justify-center">
              <div className="relative mx-auto w-4/5 md:w-full max-w-md">
                {/* zdjęcie pary młodej widoczne tylko na desktop */}
                <img
                  src="/strona2.svg"
                  alt="Para młoda"
                  className="hidden md:block w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between px-6 sm:px-10 py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            <span>Our Love Story</span>
            <span className="lowercase">
              {new Date().getFullYear()} • {CONFIG.coupleNames}
            </span>
            <span>Our Wedding</span>
          </div>
        </div>
      </section>

      {/* Dolna sekcja */}
      <section className="flex justify-center px-4 sm:px-8 lg:px-16 pb-20 -mt-6">
        <div className="w-full max-w-[100rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-12">
            <div className="rounded-[2rem] border border-neutral-200 bg-white shadow-sm p-5 sm:p-7 md:p-8 w-full flex flex-col items-center">
              <h3 className="font-serif text-lg mb-4">📤 Dodaj zdjęcia</h3>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                  CONFIG.uploadUrl
                )}`}
                alt="QR Upload"
                className="mb-4 rounded-lg"
              />
              <div className="mt-4 flex-1 flex items-end w-full">
                <a
                  href={CONFIG.uploadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
                >
                  <span className="mr-2">📤</span> Wyślij pliki
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-neutral-200 bg-white shadow-sm p-5 sm:p-7 md:p-8 w-full flex flex-col items-center">
              <h3 className="font-serif text-lg mb-4">📷 Zobacz i pobierz</h3>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                  CONFIG.galleryUrl
                )}`}
                alt="QR Gallery"
                className="mb-4 rounded-lg"
              />
              <p className="text-sm text-neutral-600 text-center mt-4">
                Tu obejrzysz galerię wszystkich zdjęć oraz pobierzesz je w
                pełnej jakości.
              </p>
              <div className="mt-4 flex-1 flex items-end w-full">
                <a
                  href={CONFIG.galleryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-900 hover:bg-neutral-100"
                >
                  <span className="mr-2">📷</span> Otwórz galerię
                </a>
              </div>
            </div>
          </div>
          <footer className="mt-12 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} {CONFIG.coupleNames} • {CONFIG.date} •{" "}
            {CONFIG.location}
          </footer>
        </div>
      </section>
    </main>
  );
}
