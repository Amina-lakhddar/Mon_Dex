// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
let section_article=document.getElementById("grid");
function afficher(creatures){
    section_article.innerHTML=creatures.map(function(creature){
        return`<article class="flex flex-col gap-3  h-100 rounded-card w-[80%] bg-white border-2 border-orange-500 p-3 pb-4 transition-transform duration-300 hover:-translate-y-1 lg:w-[30%]">
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
            <img src=${creature.image} alt="" class="img_card">
            <span class="span-card">${creature.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${creature.name}</h3>
            <span class="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">${creature.type}</span>
          </div>
          <p class="text-transition-transform duration-300 hover:-translate-y-1sm text-muted">${creature.level}</p>
          <button type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article>`
        
    })
};
afficher(creatures);
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 2. DÉTAIL
function detail(){
  // let liste_article =document.getElementById("grid");
  // console.log(liste_article.textContent);
  let panneau_detail=document.getElementById("detail");
  let articles=document.querySelectorAll("article");
  
  articles.forEach(function(article){
    article.addEventListener("click",function(){
      let id_crature=article.querySelector("span");
      let detail_creature=creatures.filter(function(creature){
        return creature.id===id_crature.textContent;
      })
      return panneau_detail.innerHTML=`<div class="flex items-center justify-between">
            <span class="font-mono text-sm text-ink">${detail_creature[0].id} · Détail</span>
            <button type="button" aria-label="Fermer le détail" class="btn-outline w-11 px-0">✕</button>
          </div>
          <div class="flex h-48 items-center justify-center rounded-2xl bg-brand-light">
            <img src="${detail_creature[0].image}" alt="" class="img_card">
          </div>
          <div class="flex items-center justify-between">
            <h2 class="font-display text-3xl font-extrabold text-orange-700">${detail_creature[0].name}</h2>
            <span class="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">${detail_creature[0].type}</span>
          </div>
          <p class="text-gray-700">${detail_creature[0].description}
          </p>
          <div class="flex flex-col gap-2 text-sm">
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold text-orange-700">PV</span><span
                class="h-3 rounded-full bg-ground"><span
                  class="block h-3 w-[30%] rounded-full bg-orange-500" style="width: ${detail_creature[0].stats.hp}%"></span></span><span
                class="text-right font-mono">${detail_creature[0].stats.hp}</span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold text-orange-700">Attaque</span><span
                class="h-3 rounded-full bg-ground"><span
                  class="block h-3 w-[33%] rounded-full bg-orange-500" style="width: ${detail_creature[0].stats.attack}%"></span></span><span
                class="text-right font-mono">${detail_creature[0].stats.attack}</span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold text-orange-700">Défense</span><span
                class="h-3 rounded-full bg-ground"><span
                  class="block h-3 w-[43%] rounded-full bg-orange-500" style="width: ${detail_creature[0].stats.defence}%"></span></span><span
                class="text-right font-mono">${detail_creature[0].stats.defence}</span></div>
          </div>
          <button type="button" class="btn-primary">Ajouter à l'équipe</button>`
      
    })
  })

}
detail();
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 3. RECHERCHE
function rechercher() {
    let search = document.querySelector("#search");

    search.addEventListener("input", function () {
        let valeur = search.value.toLowerCase();

        let resultat = creatures.filter(function (creature) {
            return creature.name.toLowerCase().includes(valeur);
        });

        afficher(resultat);
        detail();
    });
}

rechercher();
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
function filter(){
  let type_creature=document.getElementById("filters");
    type_creature.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
          if(event.target.textContent==="Tous"){
            afficher(creatures);
            detail();
          }else{
            let resultat_type=creatures.filter(function(creature){
              return creature.type===event.target.textContent;
            })
            afficher(resultat_type) 
            detail();
          }
      }
    });
}
filter();
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
function ajouter(){
  
}
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
