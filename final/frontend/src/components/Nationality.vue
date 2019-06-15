
<template>
  <v-card>


    <v-toolbar>
      <v-spacer></v-spacer>

      <v-toolbar-items>

        <v-btn flat @click="goPlayer"> Players </v-btn>
        <v-btn flat @click="goNationality"> Nationality </v-btn>
        <v-btn flat @click="goClubs"> Clubs </v-btn>

        <!-- <tr @click="goPlayer"> <v-btn flat>Players </v-btn> </tr>
        <tr @click="goNationality"> <v-btn flat>Nationality</v-btn> </tr>
        <tr @click="goClubs"> <v-btn flat>Clubs</v-btn> </tr> -->

      </v-toolbar-items>
    </v-toolbar>

    <v-card-actions class="justify-center">
      <!-- <p class="display-4">Nationalities</p> -->
      <p class="display-4 pa-4">Nationalities</p>
    </v-card-actions>

    
    <v-container>
      <v-card>
        <v-card-title>
          
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
            <!-- hide-details -->
        </v-card-title>

        <v-data-table
          v-bind:headers="headers"
          v-bind:items="nationality"
      v-bind:search="search"
      v-bind:pagination.sync="pagination"
      class="elevation-1"
        >
      <!-- hide-actions -->

          <template v-slot:no-data>
            <v-alert :value="true" color="error" icon="warming">
              Was not possible to showcase the list of nationalitys.
            </v-alert>
          </template>

          <template v-slot:items="props">
            <tr @click="rowClicked(props.item)">
              <td class="subheading">{{ props.item.n }}</td>
              <td class="subheading"><img vertical-align="middle" @error="onImageLoadFailure($event)" :src=props.item.f ></td>
              <td class="subheading">{{ props.item.tp }}</td>
            </tr>
          </template>
          <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </template>
        </v-data-table>
      </v-card>
    </v-container>

        <!-- <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div> -->

     <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>

  </v-card>
</template>

<script>
  import axios from 'axios'
  const lhost = "http://localhost:7719"

  export default{
    data:() =>({
      pagination: {
        // descending: true,
        // page: 1,
        rowsPerPage: 25,
        searchLength: 25,
        // rowsPerPageItems: [5, 10, 25, 50, 100],
      },
      search: '',
      headers:[
        {text:'Name',align:'left',sortable:true,value:'n',class:'title'},
        {text:'Photo',align:'left',sortable:false,value:'ph',class:'title'},
        {text:'Total Players',align:'left',sortable:true,value:'tp',class:'title'}
      ],
      nationality:[]
    }),
    mounted: async function() {
      try {
        var response = await axios.get(lhost + '/nationality')
        this.nationality = response.data
      } catch (error) {
        return error
      }
    },
    methods: {

      goPlayer: function(){
        this.$router.push('/')
      },
      goNationality: function(){
        this.$router.push('/nationality')
      },
      goClubs: function(){
        this.$router.push('/club')
      },

      rowClicked: function(item){
        this.$router.push('/nationality/' + item.nat.split('#')[1])
      },
      onImageLoadFailure (event) {
        event.target.src = 'http://www.cityrider.com/fixed/43aspect.png'
      }
    }
  }

</script>



<style>

</style>
