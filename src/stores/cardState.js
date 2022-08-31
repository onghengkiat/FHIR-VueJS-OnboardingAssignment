import { defineStore } from 'pinia'

export const useCardStore = defineStore({
  id: 'cardStore',
  state: () => ({
    cards: [],
    isFetched: false,
  }),
  actions: {
    fetchData() {
      fetch("https://build.fhir.org/patient-example.json")
        .then(response => response.json())
        .then(data => {
          const name = data["name"][1]["given"][0];
          const gender = data["gender"];
          const birthdate = data["birthDate"];
          const address = data["address"][0]["text"];
          this.cards = [
            {
              "id": 0,
              "list": 1,
              "data": {
                "gender": gender,
              }
            },
            {
              "id": 1,
              "list": 1,
              "data": {
                "name": name,
                "birthdate": birthdate,
              }
            },
            {
              "id": 2,
              "list": 2,
              "data": {
                "name": name,
                "address": address,
              }
            }
          ]

          this.isFetched = true;
        })
        .catch(exception => console.log(exception))
    }
  }
})
