import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function app(){

  return(
    <main className="min-h-svh bg-offwhitebdg py-20 px-6">
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="icone dos carros sedans" />
          <h2 className="font-shouders">Sedans</h2>
          <p className="font-lexend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem expedita, recusandae quo doloribus facilis atque exercitationem et. Voluptatum ipsam sequi dolorum quibusdam, iure vel laboriosam provident voluptatibus explicabo sapiente?</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
        <div className="bg-green">
          <img src={iconSuvs} alt="icone dos carros suvs" />
          <h2 className="font-shouders">Suvs</h2>
          <p className="font-lexend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, numquam blanditiis? Numquam amet, illo, minus at, quaerat natus ex magni nesciunt aperiam debitis accusamus sapiente omnis provident? Corrupti, a fugiat.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais </a>
        </div>
        <div className="bg-dark-green">
          <img src={iconLuxury} alt="icone dos carros luxury" />
          <h2 className="font-shouders" >Luxury</h2>
          <p className="font-lexend">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit commodi, deleniti ducimus reprehenderit odit nulla modi temporibus a architecto exercitationem at. Saepe voluptatum eum eaque numquam molestias illo ipsum?</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>

        </div>
      </section>
    </main>
  )
}
