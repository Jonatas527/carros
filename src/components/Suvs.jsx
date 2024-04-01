import iconSuvs from "../assets/icon-suvs.svg"

export default function Sedans() {
    return (
        <section className="bg-green p-12 ">
            <img src={iconSuvs} alt="icone dos carros suvs" className="mb-7" />
            <h2 className="font-shouders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
            <p className="font-lexend mb-7 text-offwhite lg:mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit commodi, deleniti ducimus reprehenderit odit nulla modi temporibus a architecto exercitationem at. Saepe voluptatum eum eaque numquam molestias illo ipsum?.</p>
            <a className="font-lexend bg-offwhitebg  block w-fit rounded-3xl text-green px-10 py-3 border-2 border-offwhite hover:bg-green hover:text-offwhite" href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais </a>
        </section>
    )
}