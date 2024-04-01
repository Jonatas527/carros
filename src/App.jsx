import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function app(){

  return(
    <main className="min-h-svh bg-offwhitebdg py-20 px-6 lg:flex justify-center intems-center">
      <section className="lg:flex max-w-[920px]">
        <div className="bg-orange p-12 max-rounded-t-lg lg:rounded-l-lg ">
          <img src={iconSedans} alt="icone dos carros sedans"  className="mb-7"/>
          <h2 className="font-shouders mb-7 uppercase text-4xl font-bold text-white">Sedans</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem expedita, recusandae quo doloribus facilis atque exercitationem et. Voluptatum ipsam sequi dolorum quibusdam, iure vel laboriosam provident voluptatibus explicabo sapiente?</p>
          <a className="font-lexend  bg-offwhitebg  block w-fit rounded-3xl text-orange px-10 py-3 border-2 border-offwhite hover:bg-orange hover:text-offwhite" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
        <div className="bg-green p-12 ">
          <img src={iconSuvs} alt="icone dos carros suvs" className="mb-7" />
          <h2 className="font-shouders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit commodi, deleniti ducimus reprehenderit odit nulla modi temporibus a architecto exercitationem at. Saepe voluptatum eum eaque numquam molestias illo ipsum?.</p>
          <a className="font-lexend bg-offwhitebg  block w-fit rounded-3xl text-green px-10 py-3 border-2 border-offwhite hover:bg-green hover:text-offwhite" href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais </a>
        </div>
        <div className="bg-dark-green p-12 max-rounded-b-lg lg:rounded-r-lg">
          <img src={iconLuxury} alt="icone dos carros luxury" className="mb-7"/>
          <h2 className="font-shouders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxury</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit commodi, deleniti ducimus reprehenderit odit nulla modi temporibus a architecto exercitationem at. Saepe voluptatum eum eaque numquam molestias illo ipsum?</p>
          <a className="font-lexend font-lexend bg-offwhitebg  block w-fit rounded-3xl text-dark-green px-10 py-3 border-2 border-offwhite  hover:bg-dark-green hover:text-offwhite" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>

        </div>
      </section>
    </main>
  )
}
