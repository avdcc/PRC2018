
<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="player"
      class="elevation-1"
      disable-initial-sort="True"
    >

      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warming">
          Não foi possível apresentar a lista dos player.
        </v-alert>
      </template>

      <template v-slot:items="props">
        <tr @click="rowClicked(props.item)">
          <td class="subheading">{{ props.item.id }}</td>
          <td class="subheading"><img vertical-align="middle" @error="onImageLoadFailure($event)" :src=props.item.ph width="48px" height="48px"></td>
          <td class="subheading">{{ props.item.n }}</td>
          <td class="subheading">{{ props.item.age }}</td>
          <!-- <td class="subheading">{{ props.item.ph }}</td> -->
        </tr>
      </template>

    </v-data-table>
  </v-container>
</template>

<script>
  import axios from 'axios'
  const lhost = "http://localhost:7719"

  export default{
    data:() =>({
      headers:[
        {text:'Id',align:'left',sortable:true,value:'id',class:'title'},
        {text:'Photo',align:'left',value:'ph',class:'title'},
        {text:'Name',align:'left',sortable:true,value:'n',class:'title'},
        {text:'Age',align:'left',sortable:true,value:'age',class:'title'}
      ],
      player:[]
    }),
    mounted: async function() {
      try {
        var response = await axios.get(lhost + '/player')
        this.player = response.data
      } catch (error) {
        return error
      }
    },
    methods: {
      rowClicked: function(item){
        this.$router.push('/player/p' + item.id)
      },
      onImageLoadFailure (event) {
        event.target.src = 'http://www.cityrider.com/fixed/43aspect.png'
      }
    }
  }

</script>



<style>

</style>
