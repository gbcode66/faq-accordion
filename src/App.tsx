import StarIcon from "./components/icons/StarIcon.tsx"
import faqs from "./data.json"
import Faq from "./components/Faq.tsx"

export default function App() {
  const faqEls = faqs.map((item, index) => <Faq key={index} faq={item} />)

  return (
    <div
      className="
        bg-[url('/images/background-pattern-mobile.svg')] bg-no-repeat bg-top bg-size-[100%] bg-purple-100
        min-h-screen pt-32
        lg:bg-[url('/images/background-pattern-desktop.svg')]">

      <main className="bg-white w-[90vw] mx-auto max-w-lg rounded-2xl shadow p-8 pb-1">
        <header className="flex justify-start items-center gap-x-4 mb-4">
          <StarIcon height={25} fill= "var(--color-purple-accent)" />
          <h1 className="text-purple-950 font-bold text-3xl">FAQs</h1>
        </header>
        <div className="divide-y divide-purple-100">{faqEls}</div>

        <footer>
          <small className="text-xs pt-4 text-center block my-4 ">
            <span>Challenge by{" "}
              <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
                Frontend Mentor
              </a>
            </span>
            <span className="block">Coded by&nbsp;
              <a href="https://github.com/fitforlife66" target="_blank" rel="noopener noreferrer">
                FitforLife66
              </a>
            </span>
          </small>
        </footer>
      </main>
    </div>
  )
}
