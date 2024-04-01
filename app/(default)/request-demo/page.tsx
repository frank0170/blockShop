export const metadata = {
  title: 'Request Demo - Creative',
  description: 'Page description',
}

import Blocks from './blocks'
import Community from './community'

export default function Home() {
  return (
    <>
      {/* Demo form */}
      <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="px-4 sm:px-6">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">Contacteaza-ne pentru orice intrebare</h1>
              <p className="text-lg text-zinc-500">Clienții pot contacta echipa noastră prin telefon, e-mail sau formularul de contact de pe site-ul nostru dedicat.</p>


            </div>

            {/* Form */}
            <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">

              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="name">Nume</label>
                    <input id="name" className="form-input text-sm w-full" type="text"  required />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="email">Email</label>
                    <input id="email" className="form-input text-sm w-full" type="email"  required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="channel">Topic</label>
                    <select id="channel" className="form-select w-full" required>
                      <option>General</option>
                      <option>Oferte</option>
                      <option>Colaborare</option>
                      <option>Intrebari</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Mesaj</label>
                    <textarea id="message" className="form-textarea text-sm w-full" rows={4}  required></textarea>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow">Trimite</button>
                </div>
              </form>

              <div className="text-center mt-6">
                <div className="text-xs text-zinc-500">
                  By submitting you agree with our <a className="underline hover:no-underline" href="#0">Terms</a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Blocks />
      <Community />      
    </>
  )
}
