import iconSedans from "../assets/icon-sedans.svg"

export default function Sedans() {
    return (
        <div className="bg-orange p-12 max-rounded-t-lg lg:rounded-l-lg ">
            <img src={iconSedans} alt="icone dos carros sedans" className="mb-7" />
            <h2 className="font-shouders mb-7 uppercase text-4xl font-bold text-white">Sedans</h2>
            <p className="font-lexend mb-7 text-offwhite lg:mb-20 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem expedita, recusandae quo doloribus facilis atque exercitationem et. Voluptatum ipsam sequi dolorum quibusdam, iure vel laboriosam provident voluptatibus explicabo sapiente?</p>
            <a className="font-lexend  bg-offwhitebg  block w-fit rounded-3xl text-orange px-10 py-3 border-2 border-offwhite hover:bg-orange hover:text-offwhite" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
        )
}

