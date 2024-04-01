import iconLuxury from "../assets/icon-luxury.svg"


export default function Sedans() {
    return (
        <div className="bg-dark-green p-12 max-rounded-b-lg lg:rounded-r-lg">
            <img src={iconLuxury} alt="icone dos carros luxury" className="mb-7" />
            <h2 className="font-shouders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxury</h2>
            <p className="font-lexend mb-7 text-offwhite lg:mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit commodi, deleniti ducimus reprehenderit odit nulla modi temporibus a architecto exercitationem at. Saepe voluptatum eum eaque numquam molestias illo ipsum?</p>
            <a className="font-lexend font-lexend bg-offwhitebg  block w-fit rounded-3xl text-dark-green px-10 py-3 border-2 border-offwhite  hover:bg-dark-green hover:text-offwhite" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>

        </div>
    )
}