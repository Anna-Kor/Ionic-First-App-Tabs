<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center header"
          >"Joyland" - Stephen King</ion-title
        >
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="bookDescription">
        <ion-img class="book-image" src="./assets/images/Joyland.jpg" />
        <p class="description">
          Devin Jones, student college&rsquo;u, zatrudnia się na okres wakacji w
          lunaparku, by zapomnieć o dziewczynie, która złamała mu serce. Tam
          jednak zmuszony jest zmierzyć się z czymś dużo straszniejszym:
          brutalnym morderstwem sprzed lat, losem umierającego dziecka i
          mrocznymi prawdami o życiu - i tym, co po nim następuje. Wszystko to
          sprawi, że jego świat już nigdy nie będzie taki sam...<br />
          Pasjonująca opowieść o miłości i stracie, o dorastaniu i starzeniu się
          - i o tych, którym nie dane jest doświadczyć ani jednego, ani
          drugiego, bo śmierć zabiera ich przedwcześnie.<br />
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
  name: "BookJoyland",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>