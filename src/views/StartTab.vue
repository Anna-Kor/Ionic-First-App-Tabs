<template>
  <ion-page>
    <ion-grid class="main-container">
      <ion-row class="header">
        <ion-img
          class="logo-image"
          src="./assets/images/logo.jpg"
          alt="Logo image"
        />
      </ion-row>
      <ion-row class="description">
          <ion-text
            >Ta strona internetowa powstała, aby pokazać moje książki.</ion-text
          >
      </ion-row>
    </ion-grid>
  </ion-page>
</template>

<style scoped>
.main-container {
  width: 100%;
  padding: 0;
}

.header {
  justify-content: center;
  width: 100%;
  height: 400px;
  background-image: url("../../public/assets/images/books_shelf.jpg");
  background-size: 100% 100%;
}

.logo-image {
  max-width: 500px;
  position: relative;
}

.description {
  justify-content: center;
  text-align: center;
  padding: 50px;
  font-family: "Century Schoolbook";
  font-size: 32px;
}

.choosingVersion-btn {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

ion-col {
  text-align: center;
}
</style>

<script lang="ts">
import { IonPage, IonImg, IonText, IonGrid, IonRow } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartTab",
  components: { IonPage, IonImg, IonText, IonGrid, IonRow },
});
</script>