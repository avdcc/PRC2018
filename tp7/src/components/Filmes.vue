<template>

  <v-container>
    <v-data-table
      :headers="headers"
      :items="filmes"
      class="elevation-1"
    >

      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warming">
          Não foi possível apresentar a lista dos filmes.
        </v-alert>
      </template>

      <template v-slot:items="props">
        <tr @click="rowClicked(props.item)">
          <td class="subheading">{{ props.item.ano }}</td>
          <td class="subheading">{{ props.item.tit }}</td>
          <td class="subheading">{{ props.item.id.split("#f_")[1] }}</td>
        </tr>
      </template>

    </v-data-table>
  </v-container>
</template>


<script>
  import axios from 'axios'
  const lhost = "http://cinema.di.uminho.pt"

  export default{
    data:() =>({
      headers:[
        {text:'Ano',align:'left',sortable:true,value:'ano',class:'title'},
        {text:'Titulo',align:'left',sortable:true,value:'title',class:'title'},
        {text:'Identificador',align:'left',sortable:true,value:'id',class:'title'}
      ],
      filmes:[]
    }),
    mounted: async function() {
      try {
        var response = await axios.get(lhost + '/filmes')
        this.filmes = response.data
      } catch (error) {
        return error
      }
    },
    methods: {
      rowClicked: function(item){
        this.$router.push('/filmes/' + item.id.split('#')[1])
      }
    }
  }

</script>


<style>

</style>
