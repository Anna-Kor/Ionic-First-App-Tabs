<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center header"
          >"Normalni ludzie" - Sally Rooney</ion-title
        >
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="bookDescription">
        <ion-img class="book-image" src="./assets/images/NormalniLudzie.jpg" />
        <p class="description">
          W szkole Connell Marianne udają, że się nie znają. On jest gwiazdą
          szkolnej drużyny piłkarskiej, ona - typem dumnej outsiderki z bogatego
          domu, w którym matka chłopaka sprząta. kiedy syn przychodzi po nią do
          pracy, między dwojgiem zupełnie różnych nastolatków rodzi się
          nietypowa więź - taka, którą chcą za wszelką cenę ukryć przed
          światem.<br />
          Sally Rooney w <em>Normalnych ludziach</em> z wnikliwością opisuje
          psychikę młodych bohaterów i zarazem robi to w niezwykle oszczędny
          sposób. historia Marianne i Connella eksploruje temat subtelnych
          różnic klasowych, magnetyzm pierwszej miłości oraz skomplikowaną
          prawdę o rodzinie i przyjaźni.
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
  name: "BookNormalniLudzie",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>