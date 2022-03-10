export function Navbar() {

    return (
    <nav class="p-5 bg-blue-oasen shadow md:flex md:items-center md:justify-between sticky top-0">
        
        <div class="">
            <span class="cursor-pointer">
                <img class="h-20 inline" src={require('../../src/Oasen_Logo_Drinkwater_Kleur_RGB.png')} alt="Oasen Drinkwater" />   
            </span>
        </div>
        
        <ul class="md:flex md:items-center">
            <li class="mx-4">
                <a href="https://www.oasen.nl/mijn-oasen" class="text-xl oasenwhite hover:text-white duration-500">Mijn Oasen</a>
            </li>
            <li class="mx-4">
                <a href="https://www.oasen.nl/drinkwater" class="text-xl oasenwhite hover:text-white duration-500">Drinkwater</a>
            </li>
            <button class="flex text-xl bg-blue-oasenDark text-white oasenwhite duration-500 px-6 py-2 mx-4 hover:opacity-30 rounded">
                Menu<ion-icon name="menu" class="text-3xl"></ion-icon>
            </button>
            
        </ul>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </nav>

    )



}

