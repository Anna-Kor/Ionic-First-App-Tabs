<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center header"
          >"Papierowe miasta" - John Green</ion-title
        >
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="bookDescription">
        <ion-img class="book-image" src="./assets/images/PapieroweMiasta.jpg" />
        <p class="description">
          Błyskotliwa, zabawna i poruszająca powieść drogi o dorzejwaniu,
          prawdziwej przyjaźni i miłości.<br />
          Quentin Jacobsen od zawsze zakochany jest we wspaniałej koleżance,
          zbuntowanej Margo Roth Spiegelman. W dzieciństwie przeżyli razem coś
          niesamowitego, teraz chodzą do tego samego liceum. Pewnego wieczoru w
          przewidywalne, nudne życie chłopaka wkracza Margo w stroju nindży i
          wciąga go w niezły bałagan. Po czym znika. Quentin wyrusza na
          poszukiwanie dziewczyny, która go fascynuje, idąc tropem
          skomplikowanych wskazówek, jakie zostawiła tylko dla niego. Żeby ją
          odnaleźć, musi pokonać setki kilometrów. Po drodze przekonuje się na
          własnej skórze, że ludzie są w rzeczywistości zupełnie inni, niż
          sądzimy.
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
  name: "BookPapieroweMiasta",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>