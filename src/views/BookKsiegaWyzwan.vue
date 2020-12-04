<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center header"
          >"Księga wyzwań Dasha i Lily" - Rachel Cohn, David Levithan</ion-title
        >
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="bookDescription">
        <ion-img class="book-image" src="./assets/images/KsiegaWyzwan.jpg" />
        <p class="description">
          Pełna wdzięku romantyczna historia z literaturą i bożonarodzeniowym
          Nowym Jorkiem w tle.<br />
          Szesnastoletnia Lily zostawia czerwony notes pelen wyzwań na ulubionej
          półce w swojej ulubionej księgarni. Notatnik czeka na odpowiedniego
          chlopaka, który odważy się podjąć grę. Ciekawski, ironiczny, lekko
          cyniczny Dash nie boi się zagadek, a księga wyzwań staje się dla niego
          tak potrzebną odskocznią od codzienności.<br />
          Dash i Lily urządzają podchody na wielką skalę - szukają notesu (i
          siebie nawzajem) po całym opanowanym świąteczną gorączką Manhattanie.
          Podczas gry zaczyna rodzić się uczucie. tylko czy na żywo Lily i Dash
          zrobią na sobie równie dobre wrażenie, co na papierze? To spotkanie
          może okazać się dla nich największym wyzwaniem...
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.header {
  font-size: 1.5rem;
  padding: 1rem;
}

.book-image {
  width: 100%;
}

.bookDescription {
  background-color: #ffffff;
  max-width: 800px;
  width: 100%;
  margin: 30px auto;
  font-family: "Century Schoolbook";
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.description {
  padding: 0px 20px 20px 20px;
}
</style>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default {
  name: "BookKsiegaWyzwan",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>