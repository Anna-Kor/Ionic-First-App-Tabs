<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center header">"Instytut" - Stephen King</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="bookDescription">
        <ion-img class="book-image" src="./assets/images/Instytut.jpg" />
        <p class="description"
          >Dramatyczny pojedynek dobra ze złem w miejscu, w którym ci dobrzy nie
          zawsze wygrywają.<br />
          Luke Ellis budzi się w pokoju do złudzenia przypominającym jego
          własny, tyle że bez okien. Wkrótce orientuje się, że trafił do
          tajemniczego Instytutu i nie jest jedynym dzieciakiem, którego tu
          uwięziono. To miejsce odosobnienia dla natolatków obdarzonych
          umiejętnościami telepatii lub telekinezy. W Instytucie zostaną poddani
          testom, które wzmocnią ich parapsychiczne moce. Opiekunowie nie mają
          skrupułów: grzeczne dzieci są nagradzane, nieposłuszne - surowo
          karane. Wszyscy jednak, prędzej czy później, trafią do drugiej części
          Instytutu, a stamtąd nikt już nie wraca. Gdy kolejne dzieci znikają w
          Tylnej Połowie, Luke jest coraz bardziej zdesperowany. Musi uciec i
          wezwać pomoc. Bo jeśli komuś miałoby się udać, to właśnie jemu. Tylko
          że nikt dotąd nie uciekł z Instytutu.</p
        >
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
  name: "BookInstytut",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>