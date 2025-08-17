import React, { useState } from "react";
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
  const [uploadStatus, setUploadStatus] = useState("");
  // Wklej swój Dropbox access token poniżej
  const DROPBOX_ACCESS_TOKEN =
    "sl.u.AF7upBsaydoYTy980eYxIrxXtFp72ZGWcMERwNqurXCL0riEtHp3HNOjcD4Fg4WsYqJ4-cilgp-6YGyrIiLHksghB9zJpTSI8HmH_CY6gU-SJRW5TFNFvi916D7aHCJAatqQ3sEbF5GS--Ws1Mm1xe3EIzabp7aEyp5lhBmqLJP_R44JDtlJYFaAQO3LnUCZdSBabKyOkCemm3VVcCc4DF8pvEY95IEQVEaTqwMgEf-XU7oPJ3A-HlDU7joUi2r6GwVHAD8NHLh9IzVJGI4BHbO3TD2T8cvggLJxpE69mWGz4sYNXNgr7sefGTyCwg2DklHZC6B7r0VExp9LuL3D96DJwwQgYGykJ2pwmIV3ezy1RCt-6B_8wswDdHrCwLB12xh_tUjc_Ta8pXUZ8OYKUzTl17BO9-ImxslE1m6yxCKXMTRerT7OWQj-ku-Dh7CyU8yrF497X0-fDTev_gACnpFt_8uPuFMcdTVwu7sTO4guU9-46rY4wPD0F-ux-Y6Um0KYx0RNotcJprOwsZZXRDcW2H8-QomhVG8AlzMZetbWEGidwfrupkjI_Bd3vZqAy76eahzSGP30Yo_HXIaS5-JKx4bBX67L5KA6bgcz0O_O7bIBc4WiPmVjb15yDafw5JsBmZZrMhiSZ3M7ufUblwQx81CRWLaVNZWjh7Z9J9mK3gk595wtR7rJe7-NqQpF_8ZXZQqh6bThOPSeKwgFKWbo3_YdBchPJ6vERmMLE1pdKwO7ftQgcldbE_30Xg99NrwFkqz887Se6LEhfqG8f40wYwOGNdgxU62k_dunZ9phGJgir1CYZ26Nk4xCVF6jqGeljIc3zfNyQpldap0H4sKb1UoP72u75kz8kT-kZ2PXZ8CbGP48dgGlAbVNIKVdCp_VuHPEHNkkMt4YYrhmJgh6_nPq5ipncRyaLMT0hvPkAkkoDAVo0i--RowwhzmCklpy3rATH00Pam2l1R_rKQbRWQtTRkkH7NiNxX4N2wwlg8Wy6XUzyouwN_oEpsm-J7lRvylCTx0TUjTN7Z2KA3nXF4tdlijmtIJHUTdSQlLQFTIo2oehM7Q61CFE5WAWORMRKePxPlLu9daYMUg3byJ-ptcPlDvCtXidQtf4qi4npS73SKoWNikbvcWmrz3MlgOxsHAB8bG3wekD9jMw3lAZbaMP1ONTyAhZbt2dzPG1A4q8x_3uF7wur9TSNPCL49CQPCja9WxFWrGKqROpg191G6GPwifi7XzgZ73owgIAlOCCKs7jmjYICne2xG0ip64_NRUzj9UU-CItsP_212BUm0eEXGB0DbJqL3N4KAdXc18acyg_vINMOMiruR-CNXgkgGH5eD5bT-RUYG-CItxMQBPyroC0BvhkSOT7w4ysHdXfPhmRdUu55xGxPdaHefvahtG8-ogXXSBlAe6-7HwuMGZomw28Wr-7BmO5cAYZ8MG8LEEHrFnLfJNBSarXqqg";

  // Funkcja uploadu pliku do Dropbox
  async function handleDropboxUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    const DropboxCtor = (window as any).Dropbox?.Dropbox;
    if (!DropboxCtor) {
      alert("Dropbox SDK nie jest załadowany!");
      return;
    }
    const dbx = new DropboxCtor({ accessToken: DROPBOX_ACCESS_TOKEN });
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
                <a
                  href="https://www.dropbox.com/request/0PA6GvCR3z2qEM11zi24"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-white shadow-sm hover:bg-neutral-800 z-10 cursor-pointer"
                >
                  <span className="mr-2">📤</span> Dodaj zdjęcia
                </a>
                {uploadStatus && (
                  <div className="text-xs text-green-700 ml-2 mt-2">
                    {uploadStatus}
                  </div>
                )}
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
