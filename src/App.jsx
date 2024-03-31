import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function app(){

  return(
    <main>
      <section>
        <div>
          <img src={iconSedans} alt="icone dos carros sedans" />
          <h2>Sedans</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem expedita, recusandae quo doloribus facilis atque exercitationem et. Voluptatum ipsam sequi dolorum quibusdam, iure vel laboriosam provident voluptatibus explicabo sapiente?</p>
          <a href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
        <div>
          <img src={iconSuvs} alt="icone dos carros suvs" />
          <h2>Suvs</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, numquam blanditiis? Numquam amet, illo, minus at, quaerat natus ex magni nesciunt aperiam debitis accusamus sapiente omnis provident? Corrupti, a fugiat.</p>
          <a href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais </a>
        </div>
        <div>
          <img src={iconLuxury} alt="icone dos carros luxury" />
          <h2>Luxury</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit commodi, deleniti ducimus reprehenderit odit nulla modi temporibus a architecto exercitationem at. Saepe voluptatum eum eaque numquam molestias illo ipsum?</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>

        </div>
      </section>
    </main>
  )
}
