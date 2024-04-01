import Sedans from "./components/Sedans"
import Suvs  from "./components/Suvs"
import Luxury from "./components/Luxury"

export default function app(){

  return(
    <main className="min-h-svh bg-offwhitebdg py-20 px-6 lg:flex justify-center intems-center">
      <section className="lg:flex max-w-[920px]">
        <Sedans/>
        <Suvs/>
        <Luxury/>
      </section>
    </main>
  )
}
