# Projekt "Hazard Game"

### WYMAGANIA BIZNESOWE

Projekt ma być grą przeglądarkową, hazardową z różnymi grami, gra będzie posiadać własną walutę, będzie można ją zdobyć poprzez granie w “clicker” lub z gier hazardowych

### WYMAGANIA FUNKCJONALNE

+ Użytkownik będzie mógł się załóżyć konto w module “login”:
    * Pole gdzie użytkownik będzie mógł wpisać E-mail
    * Pole gdzie bedzie mozna wpisac Hasło
    * Przycisk “Zarejestruj”

+ Projekt będzie posiadał grę o nazwie “clicker” a w niej funkcje:
	* Pole na którym będzie można klikać aby zdobywać walute
	* Gra clicker będzie posiadać realne dla użytkownika limit CPS 
	* Gra będzie posiadać zabezpieczenie przed auto-clicker i AFK
+ Projekt będzie posiadać dużo gier hazardowych
	* Gry będą miały realny drop
	* Gry będą różnorodne

### WYMAGANIA NIEFUNKCJONALNE
- Aplikacja powinna być skalowana pod daną roździelczość (RWD)
- Aplikacja powinna mieć czas wyświetlania poniżej 2 sekund dla 80% zapytań
- Aplikacja powinna być w stanie utrzymać ten czas przy jednoczesnej liczbie użytkowników: 30
