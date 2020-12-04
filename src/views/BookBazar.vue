<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center header"
          >"Bazar złych snów" - Stephen King</ion-title
        >
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="bookDescription">
        <ion-img class="book-image" src="./assets/images/BazarZlychSnow.jpg" />
        <p class="description">
          Teksty zawarte w tym zbiorze mają wspólne motywy: zagadnienia
          moralności, życia pozagrobowego, winy i kary, pytanie, co zrobilibyśmy
          inaczej, gdybyśmy mogli zajrzeć w przyszłość lub naprawić błędy
          popełnione w przeszłości. Każdy utwór poprzedzony jest krótkim wstepem
          przestawiającym jego genezę. <em>Życie po życiu</em> to historia o
          człowieku, który umarł na raka okrężnicy i raz po raz przeżywa swoje
          życie na nowo, powtarzając te same błędy. W kilku opowiadaniach
          występują postacie, które u kresu życia rozpamiętują swoje zbrodnie i
          występki. Inne utwory pokazują, jak to jest, kiedy ktoś odkryje w
          sobie nadprzyrodzone moce - jak felietonista z <em>Nekrologów</em>.
          Imponujące, mrożące krew w żyłach, wciągające bez reszty opowiadania z
          <em>Bazaru złych snów</em> są jednym z najpiękniejszych darów Kinga
          dla jego czytelników.
          <q
            >Powstały specjalnie dla Ciebie - pisze autor. - Jeśli chcesz,
            mozesz je obejrzeć z bliska, ale ostrzegam, bądź ostrożny. Niektóre
            z nich mają kły.
          </q>
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
  name: "BookBazar",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>