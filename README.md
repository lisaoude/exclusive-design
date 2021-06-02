# Exclusive Design

**NOTE:** de website staat nog niet online.

## Table of Contents
- [💬 Opdracht](#-opdracht)
    - [✏️ Debrief](#pencil2-debrief)
    - [👑 prioriteitenlijst](#crown-prioriteitenlijst-moscow)
- [💻 Opbouw project](#-opbouw-project)
- [⬇️ Hoe te installeren](#%EF%B8%8F-hoe-te-installeren)
- [📦 npm Packages](#-npm-packages)
- [📚 bronnen](#-bronnen)

# 💬 Opdracht 

Volgend jaar begint de (halve) **minor Exclusive Design.** Wat jullie hebben gedaan bij het
vak Human Centered Design gaan andere studenten dan tien weken lang doen. Ze gaan tien
weken lang prototypes maken voor echte mensen met echte beperkingen.

**Voor deze minor is een goede website nodig.**

*Het concept is als volgt:* de website moet de bezoeker een indruk geven van hoe het is
om het web te bezoeken met beperkingen. Terwijl het tegelijkertijd natuurlijk wel
*informatief* is. Én *toegankelijk*.

Het is de bedoeling dat er in de toekomst ook *werk uit de minor* op komt te staan. Dat is
er nu nog niet, dus wordt er in eerste instantie werk uit andere minoren getoond wat
aansluit bij de minor. De projecten die jullie bij het van HCD hebben gedaan
bijvoorbeeld.

## :pencil2: Debrief

De volledige debrief is te vinden op [deze Notion pagina](https://www.notion.so/lisaoude/Debrief-991ec9b658554cc7b65f7a474989638f).

</br>

---

## :crown: Prioriteitenlijst (MoSCoW):

### Must have
- [ ] Showcase studentenwerk
- [X] Informatie Minor
- [ ] Verbeterde ervaring voor mensen met beperking
- [ ] Ervaren hoe het is om een beperking te hebben
- [X] halve minor vermelden

### Should Have
- [X] Maken in 11ty
- [ ] Meerdere beperkingen ervaren + optie uit/aan zetten
- [ ] Nonsense

### Could Have
- [ ] Website customizen met font, kleur, etc.
- [ ] Randomizer

### Would have
- [ ] Website ziet er elke keer anders uit als je hem bezoekt

# 💻 Opbouw Project

Binnen dit project werken we met **[11ty](https://www.11ty.dev/)**, dit is een simpele statische site generator. De map `_site` zijn alle bestanden die *client side* worden ingeladen en gegenereert zodra de server is opgestart. Dit kan met `npm run watch` of `nmp run start`. De map `_includes`bevat de template van de verschillende pagina's en partials die we inladen in de templates. Dit zijn *html* en *Nunjucks* bestanden. 11ty werkt samen met .md bestanden, hiermee worden verschillende webpagina's aangemaakt. In de `public` map staan de bestanden waar wij binnen het project het meeste inwerken, dat is de styling, javascript en afbeeldingen dat we binnen de website gebruiken. *Binnen het project zijn we vooral veel gefocust op de CSS en daarmee experimenteren en de opmaak van de tekst.* 

# ⬇️ Hoe te installeren

1. Clone dit project 

    In terminal:
    ```
    git clone https://github.com/lisaoude/exclusive-design/
    ```

2. Installeer dependencies
    ```
    npm install
    ```

3. Start the server:
    ```
    npm run start
    ```

    of als je aanpassingen maakt en meteen wilt dat de server opnieuw opstart:

    ```
    npm run watch
    ```

4. Ga naar localhost
    ```
    http://localhost:8080/
    ```

# 📦 npm Packages

We hebben de package, 11ty gebruikt voor de opbouw van dit project. 

# 📚 bronnen

hier komen bronnen te staan