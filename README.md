# Exclusive Design
[Livelink](https://exclusive-design.netlify.app/)

</br>

---

</br>

![overviewpagina mockup](https://user-images.githubusercontent.com/57795294/122287333-1cc45080-cef1-11eb-9c39-8e463936abdc.png)

</br>

---

</br>

## Table of Contents
- [💬 Opdracht](#-opdracht)
    - [✏️ Debrief](#pencil2-debrief)
    - [👑 prioriteitenlijst](#crown-prioriteitenlijst-moscow)
- [💻 Opbouw project](#-opbouw-project)
- [⬇️ Installeren](#%EF%B8%8F-installeren)
- [📦 npm packages](#-npm-packages)
- [📚 Bronnen](#-bronnen)

</br>

---

</br>

## 💬 Opdracht 

Volgend jaar begint de (halve) **minor Exclusive Design.** Wat jullie hebben gedaan bij het
vak Human Centered Design gaan andere studenten dan tien weken lang doen. Ze gaan tien
weken lang prototypes maken voor echte mensen met echte beperkingen.

**Voor deze minor is een goede website nodig.**

*Het concept is als volgt:* de website moet de bezoeker een indruk geven van hoe het is
om het web te bezoeken met beperkingen. Terwijl het tegelijkertijd natuurlijk wel
*informatief* is. Én *toegankelijk*.

Het is de bedoeling dat er in de toekomst ook *werk uit de minor* op komt te staan. Dat is
er nu nog niet, dus wordt er in eerste instantie werk uit andere minoren getoond wat
aansluit bij de minor. De projecten die jullie bij het vak HCD hebben gedaan
bijvoorbeeld.

</br>

---

</br>

## :pencil2: Debrief

De volledige debrief is te vinden op [deze Notion pagina](https://www.notion.so/lisaoude/Debrief-991ec9b658554cc7b65f7a474989638f).

</br>

---

</br>

## :crown: Prioriteitenlijst (MoSCoW):

### Must have
- [x] Overviewpagina met korte introductie
- [X] Detailpagina met standaard informatie minor
- [x] Benoemen halve minor
- [x] Passende stijl toepassen
- [X] Showcase studentenwerk
- [x] 2 lagen om te ervaren hoe het is om een beperking te hebben

### Should Have
- [X] Maken in 11ty
- [x] Nonsense toevoegen
- [ ] Meerdere lagen om te ervaren hoe het is om een beperking te hebben
- [ ] Meerdere beperkingen ervaren + optie aan/uit zetten

### Could Have
- [ ] Verbeterde ervaring voor mensen met beperking
- [ ] Website customizen met font, kleur, etc.
- [ ] Randomizer

### Would have
- [ ] Website ziet er elke keer anders uit als je hem bezoekt

</br>

---

</br>

## 💻 Opbouw Project

Binnen dit project werken we met **[11ty](https://www.11ty.dev/)**, dit is een simpele statische site generator. De map `_site` bevat alle bestanden die *client side* worden ingeladen en gegenereert zodra de server is opgestart. Dit kan met `npm run watch` of `nmp run start`. De map `_includes`bevat de template van de verschillende pagina's en partials die we inladen in de templates. Dit zijn *HTML* en *Nunjucks* bestanden. 11ty werkt samen met `.md` bestanden, hiermee worden verschillende webpagina's aangemaakt. In de `public` map staan de bestanden waarin wij binnen het project het meeste werken, dat is de CSS, JavaScript en afbeeldingen die we binnen de website gebruiken. *Binnen het project zijn we vooral veel gefocust op de CSS, waarmee we experimenteren met zowel de gehele styling als de opmaak van de teksten.* 

</br>

---

</br>

## :inbox_tray: Installeren

### 1. :dancers: Clone deze repository

Voordat we van start kunnen gaan, zullen we de repository moeten clonen.  
Dit kan worden gedaan door de volgende regel in de terminal te typen:

```
git clone https://github.com/lisaoude/exclusive-design/
```

<br/>

### 2. :computer: Installeer de dependencies

Als volgende zullen we de dependencies moeten installeren


```
npm install
```

<br/>

### 3. :arrow_forward: Start de server

Vervolgens starten we de server op.  
Dit kan worden gedaan door de volgende regel in de terminal te typen:

```
npm run start
```

of als je aanpassingen maakt en meteen wilt dat de server opnieuw opstart:

```
npm run watch
```

<br/>

### 4. :globe_with_meridians: Navigeer naar de localhost

We zijn er bijna! We hoeven alleen nog naar de localhost in de browser te navigeren.

```
http://localhost:8080/
```

<br/>

---

</br>

## :closed_lock_with_key: License

Deze repository is gelicentieerd als [MIT](https://github.com/lisaoude/exclusive-design/blob/main/LICENSE) by © Sanne Duinker & Lisa Oude Elferink, 2021

<br/>

---

</br>

## 📦 npm packages

We hebben de package [11ty](https://www.11ty.dev/) gebruikt voor de opbouw van dit project.  
11ty is een static site generator. In ons geval gebruiken wij 11ty om van de `.md` bestanden pagina's te maken. Vervolgens gebruiken wij Nunjucks om templates en template partials aan te maken waar de content uit de HTML bestanden in wordt geplaatst.

</br>

---
