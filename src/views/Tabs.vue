<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="startTab" href="/tabs/startTab">
        <ion-icon :icon="homeOutline" />
        <ion-label>Start</ion-label>
      </ion-tab-button>

        <ion-tab-button tab="bookInstytut" href="/tabs/bookInstytut">
        <ion-icon :icon="bookOutline" />
        <ion-label>Instytut</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="bookJoyland" href="/tabs/bookJoyland">
        <ion-icon :icon="bookOutline" />
        <ion-label>Joyland</ion-label>
      </ion-tab-button>

      <ion-tab-button
        tab="bookPapieroweMiasta"
        href="/tabs/bookPapieroweMiasta"
      >
        <ion-icon :icon="bookOutline" />
        <ion-label>Papierowe Miasta</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="bookKsiegaWyzwan" href="/tabs/bookKsiegaWyzwan">
        <ion-icon :icon="bookOutline" />
        <ion-label>Księga Wyzwan Dasha i Lily</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="bookBazar" href="/tabs/bookBazar">
        <ion-icon :icon="bookOutline"/>
        <ion-label>Bazar złych snów</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="bookNormalniLudzie" href="/tabs/bookNormalniLudzie">
        <ion-icon :icon="bookOutline" />
        <ion-label>Normalni ludzie</ion-label>
      </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<style scoped>
  ion-tab-button {
    width: 1rem;
  }
</style>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { homeOutline, bookOutline } from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      homeOutline,
      bookOutline,
    };
  },
};
</script>