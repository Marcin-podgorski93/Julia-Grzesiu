const CONFIG = {
  coupleNames: "Julia & Grzegorz",
  date: "12.09.2025",
  location: "Villa Park, Warszawa",
  heroImage:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
  uploadUrl: "https://twoj-link-do-uploadu.example.com",
  galleryUrl: "https://twoj-link-do-galerii.example.com",
};

export default function App() {
  // Wklej swój Dropbox access token poniżej
  const DROPBOX_ACCESS_TOKEN =
    "sl.u.AF70i72O4Iy9l0Ue-tQQ6RPBMN-QnIN_CxSbfPEKKB8_5RdKbS-Hm-0gCWWyx3FWkBcXGUK6bc276Sknco12jU3fw1DgUO7wY_EFggDqtHCoFKHoUWIdq6ykF0FyieF0sAtJ3Mwy9K-1ohnoKk1ZrpvJ1ZZ1SmeYTYSz242i4ipasXeqRM2ECDpjDtmFy2R5LUQX4b77H1miUX2dM8sIkX4KHO3EUqGpQciO0qYHCUMsJ1gc3fYNjGE8AlIoM5Lux7LcSDzph4EOh1oNbAnVJMLHdv6UG-8sBhi7jc_DsDdX_UBrUHmDmlkkrXZNlASH5UWxllq9kilvlpzek1s0D2djyGj2Iioe1Jtd7bVW_U8hGdvqgnhMKQhjbN0IGxQAfW79b3zYV1R2TXZyu4tJqF3TqjxD7CiZi8QHrgtj5zDNs2rChf0S4NnD5I7CVFfsY3S_Yb_l7r2-v8v1-wz0fsfXSy448jeibSFIDj3oaNvGfKJGmkPIGzYvKleeQDlFh0MgT_e3fuNc3BVaCQoXVPIBSy_KM4_tCPn8jPaHjB8b_oXmZLrAnxLnvMgixxQZDkgTl1lhGcpUMivxlmT9wpjfT_1Y4tqeTHJkhA4ubc0udTOWA1t6H3wyIWxt-BqojuERBvuUTIyt3NPtlGQErGYXFj6PtkVIM6P9P4SyZ8Gmcfm8ihhghg0wCH1j3gdGqujwgv0LfYRoCtVWQhjwjrPgHcqJGe11i011i-phtvmUopu1ePtmk8NagIPf1SFfFkbywCdnjmCFKtkdoTblRKMec0SAesv16c-773e2e_7Bg8zpYljkuWZHhdQ-hQ6Z8XoCjA7-GDVoHIh9aeVwTSrzHKMpXyYvMlrtYgUR4iFA3Tsx4i5NjC4_tLHVQLyHXFW44eV2jChWKWOO_Qzc1HJfZI29QUZL4-axQj3omQyQODUhU1A7Wz-E_tHsucT659v0o3XaTH9qZs0fTrltszzF_qjPeSai_uhAJjrZv9sJtaj0exw-e9zDoWf8J9qez1euBd386aTurJ0U9IPtuxHKGATIrWMCEVBD_TrIUIJ5z_53LX-rzwq33jAmBkDa4F_ndaiACU1os1Rb5Yg3aP5rKPrubcwFRnAPSlwNdn9kN63I2vafJmfdzeR4r1lMVqLvzb0bJ4pAi0QPIQbqBezQ9pBGDVg4LcT0I-rMp-2qjG7BJV4pkEI9AT3DamYDDqzhZ1xYRXh1-wFZ07E_lZd2U_ufgbJVRhD4iGQMrL9tHWXBesZTKo01qSJgOM_lvioZNrH-vsEr4R8WT6H4oX9gCCXiy2ebzJrV9hIYdR7RtngJh3N_QMYv66tqyfLX3HgUQZ9paXLnH12eeE7p58r3g9EjmN0JN4dNYY-QzezjMjwH15K1SWoS6RWPDPtgjgG_kfZXaJwM9HPrlRaEGmi2a__-xLr2iV0bH-Vd1fgld8cSYFrDrxO7Jura-T3OPZ8";

  // Funkcja uploadu pliku do Dropbox
  async function handleDropboxUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    const Dropbox = (window as any).Dropbox;
    const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN });
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        await dbx.filesUpload({
          path: `/${file.name}`,
          contents: file,
        });
        alert(`Plik ${file.name} przesłany!`);
      } catch (err) {
        alert(`Błąd przesyłania: ${file.name}`);
      }
    }
  }
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
                <label className="inline-flex flex-1 items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-white shadow-sm hover:bg-neutral-800 z-10 cursor-pointer">
                  <span className="mr-2">📤</span> Dodaj zdjęcia
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleDropboxUpload}
                  />
                </label>
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
