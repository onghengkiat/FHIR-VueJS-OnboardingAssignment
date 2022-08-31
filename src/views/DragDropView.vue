<script>
import { useCardStore } from '../stores/cardState'
import { storeToRefs } from 'pinia'
import CardContainer from '../components/CardContainer.vue';
import Card from '../components/Card.vue';

export default {
  setup() {
    const cardStore = useCardStore();
    if (!cardStore.isFetched) {
      cardStore.fetchData();
    }

    const { cards } = storeToRefs(cardStore);
    
    return {
      cards,
    }
  },
  computed: {
    containerOne() {
      return this.cards.filter((item) => item.list === 1)
    },
    containerTwo() {
      return this.cards.filter((item) => item.list === 2)
    },
  },
  methods: {
    startDrag(evt, card) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('cardID', card.id)
    },
    onDrop(evt, list) {
      const cardID = evt.dataTransfer.getData('cardID')
      const card = this.cards.find((card) => card.id == cardID)
      card.list = list
    },
  },
  components: {
    CardContainer,
    Card
  },
}
</script>


<template>
  <div class="center">
    <div class="row">
      <CardContainer
        id="card-container-1"
        class="column"
        @drop="onDrop($event, 1)"
        @dragover.prevent
        @dragenter.prevent
      >
        <Card 
          v-for="card in containerOne"
          draggable="true"
          @dragstart="startDrag($event, card)"
          v-bind="card.data"
        />
      </CardContainer>
      <CardContainer
        id="card-container-2"
        class="column"
        @drop="onDrop($event, 2)"
        @dragover.prevent
        @dragenter.prevent
      >
        <Card
          v-for="card in containerTwo"
          draggable="true"
          @dragstart="startDrag($event, card)"
          v-bind="card.data"
        />
      </CardContainer>
    </div>
  </div>
</template>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.row {
  display: inline-flex;
}

.column {
  margin: 0 30px;
}
</style>

