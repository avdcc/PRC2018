<template>

  <v-container>
    <v-data-table
      :headers="headers"
      :items="ator"
      class="elevation-1"
    >

      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warning">
          Não foi possível apresentar a lista dos filmes.
        </v-alert>
      </template>

      <template v-slot:items="props">
        <tr @click="rowClicked(props.item)">
          <td class="subheading">{{ props.item.ftit }}</td>

          <td class="subheading">{{ props.item.f.split('#')[1] }}</td>
        </tr>
      </template>

    </v-data-table>
  </v-container>
</template>


<script>
  import axios from 'axios'
  const lhost = 'http://cinema.di.uminho.pt'

  export default {
    props: ['idAtor'],
    data: () => ({
      headers: [
        {text: 'Nome do Filme', align: 'left', sortable: true, value: 'ftit', class: 'title'},
        {text: 'Identificador do Filme', sortable: false, value: 'f', class: 'title'}
      ],
      ator: []
    }),
    mounted: async function () {
      try {
        var response = await axios.get(lhost + '/atores/' + this.idAtor + '/filmes')
        this.ator = response.data
      } catch (error) {
        return error
      }
    },
    methods: {
      rowClicked: function (item) {
        this.$router.push('/filmes/' + item.f.split('#')[1])
      }
    }
  }

</script>


<style>

</style>