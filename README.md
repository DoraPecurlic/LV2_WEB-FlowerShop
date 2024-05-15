# LV 2 zadatak - JavaScript  command line aplikacije

Ova command line JavaScript aplikacija simulira košaricu na web stranici za trgovinu.

## Dokumentacija Funkcija Aplikacije

1. **addToCart(itemName)**
   - **Opis:** Dodaje određeni cvijet u korisnikovu košaricu tražeći po imenu u listi dostupnih cvjetova. Ako se ne pronađe odgovarajući cvijet, prikazuje se poruka o pogrešci.
   - **Parametri:** itemName (string): Ime cvijeta koji se dodaje u košaricu.

3. **removeFromCart(itemName)**
   - **Opis:** Uklanja određeni cvijet iz korisnikove košarice. Traži cvijet po imenu u košarici i, ako se pronađe, uklanja ga. Ako se predmet ne pronađe, prikazuje se poruka o pogrešci.
   - **Parametri:** itemName (string): Ime cvijeta koji se uklanja iz košarice.

5. **viewFlowers()**
   - **Opis:** Prikazuje popis svih dostupnih cvjetova zajedno s njihovim cijenama. Ova funkcija iterira po polju stavki i ispisuje ime i cijenu svake stavke.

7. **viewCart()**
   - **Opis:** Prikazuje sve stavke trenutno u korisnikovoj košarici, uključujući detalje o svakoj stavki. Prikazuje ime, cijenu i količinu svake stavke.

9. **buy()**
   - **Opis:** Pokušava kupiti sve stavke u korisnikovoj košarici. Izračunava ukupnu cijenu i provjerava ima li korisnik dovoljno novca u novčaniku. Ako su sredstva dostupna, kupnja se završava i košarica se prazni. Ako nema dovoljno sredstava, prikazuje se poruka o nedostatku sredstava.

11. **viewBalance()**
    - **Opis:** Prikazuje trenutno stanje  korisnikovog novčanika, prikazujući koliko novca je dostupno za kupnju.

13. **help()**
    - **Opis:** Pruža popis svih dostupnih naredbi unutar aplikacije, objašnjavajući svrhu i opću uporabu svake naredbe. Ova funkcija pomaže novim korisnicima da se učinkovito snalaze u aplikaciji.

## Značajke Aplikacije
- Intuitivna za korisnike
- Pomoćna naredba "help" za brzo snalaženje
- Provjere pogrešaka i povratne informacije za korisnike
- Case sensitive
- 


