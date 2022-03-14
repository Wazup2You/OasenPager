export function Navbar() {

    return (
    <nav className="p-5 bg-blue-oasen shadow md:flex md:items-center md:justify-between sticky top-0">
        
        <div className="">
            <span className="cursor-pointer">
                <img className="h-20 inline" src='src/Oasen_Logo_Drinkwater_Kleur_RGB.png' alt="Oasen Drinkwater" />   
            </span>
            <span className="absolute left-1/2 -translate-x-1/2">
                <img className="h-20 inline" src='src/Logo.png' alt="Oasen Drinkwater" />   
            </span>
        </div>
        
        <ul className="md:flex md:items-center">
            <li className="mx-4">
                <a href="https://www.oasen.nl/mijn-oasen" className="text-xl oasenwhite hover:text-black duration-500">Mijn Oasen</a>
            </li>
            <li className="mx-4">
                <a href="https://www.oasen.nl/drinkwater" className="text-xl oasenwhite hover:text-black duration-500">Drinkwater</a>
            </li>
            {/* <button className="flex text-xl bg-blue-oasenDark text-white oasenwhite duration-500 px-6 py-2 mx-4 hover:opacity-30 rounded">
                Menu<ion-icon name="menu" className="text-3xl"></ion-icon>
            </button> */}
            
        </ul>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </nav>

    )
}

