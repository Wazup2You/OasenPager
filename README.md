# OasenPager
Een onepager over ons project voor Oasen.

# Project opstarten
1. Ga naar de 'development' branche
2. cd frontend
3. configureer Eslint
4. npm i
5. npm run dev

**Let op:** Zorg dat je Node versie 14 of hoger op je computer hebt geïnstalleerd, dit kan je controlleren met cmd ```node -v``` 

# Eslint configureren
Om Eslint te configureren, ga naar de settings.json file van visual studio code (ctrl + shift + p, typ in settings.json).
Voeg hier de volgende regels toe:
```{
    "eslint.validate": ["javascript", "javascriptreact"],
    "eslint.format.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
    },
}
```
Test of het werkt door drie of meer enters toe te voegen aan een file, als er geen blauwe kringels zichtbaar worden werkt Eslint niet naar behoren.

**Let op**: comment andere overschrijvende settings uit zoals defaultFormatter en formatOnSave
```
  // "editor.defaultFormatter": "esbenp.prettier-vscode",
  // "editor.formatOnSave": true,
```
# Tailwind
Styling gebeurt met Tailwind.

Bekijk de geconfigureerde instellingen in tailwind.config.js. Reeds toegevoegd:
- Oasen font (strada)
- Oasen kleur blauw
- [Line-clamp plugin](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- Scherm breekpunten

**Let op**: Check altijd tailwind.config.js en de styles/app.css voor het starten en na een nieuwe pull voor eventueel bruikbare toevoegingen

