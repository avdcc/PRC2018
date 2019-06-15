<template>
  <v-card>

    <v-toolbar>
      <v-spacer></v-spacer>

      <v-toolbar-items>

        <v-btn flat @click="goPlayer">Players</v-btn>
        <v-btn flat @click="goNationality">Nationality</v-btn>
        <v-btn flat @click="goClubs">Clubs</v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <v-container>

      <p class="display-3"><img vertical-align="middle" width="45px" height="35px" :src=name.f> {{name.name}}</p>

      <v-card class="mb-4 pa-4">

        <v-card-title>
          <h2>Compare Player Stats</h2>

        </v-card-title>

        <v-card-actions class="justify-center">
          <v-layout wrap align-center>

            <v-flex xs1 d-flex>
              <v-select :items=[2018,2019] v-model="yA" label="Standard"></v-select>
            </v-flex>

            <v-flex xs5 d-flex v-if="yA==2018">
              <v-autocomplete class="mr-4" v-model="pA" :items="ln18" :loading="isLoading" color="white" hide-no-data
                hide-selected item-text="Description" item-value="API" label="Player A"
                placeholder="Start typing to Search" prepend-icon="mdi-database-search" return-object></v-autocomplete>
            </v-flex>
            <v-flex xs5 d-flex v-else-if="yA==2019">
              <v-autocomplete class="mr-4" v-model="pA" :items="ln19" :loading="isLoading" color="white" hide-no-data
                hide-selected item-text="Description" item-value="API" label="Player A"
                placeholder="Start typing to Search" prepend-icon="mdi-database-search" return-object></v-autocomplete>
            </v-flex>
            <v-flex xs5 d-flex v-else>
              <v-autocomplete disabled=true class="mr-4" v-model="pA" :items="ln18" :loading="isLoading" color="white"
                hide-no-data hide-selected item-text="Description" item-value="API" label="Player A"
                placeholder="Start typing to Search" prepend-icon="mdi-database-search" return-object></v-autocomplete>
            </v-flex>

            <v-flex xs1 d-flex>
              <v-select :items=[2018,2019] v-model="yB" label="Standard"></v-select>
            </v-flex>

            <v-flex xs5 d-flex v-if="yB==2018">
              <v-autocomplete class="mr-4" v-model="pB" :items="ln18" :loading="isLoading" color="white" hide-no-data
                hide-selected item-text="Description" item-value="API" label="Player B"
                placeholder="Start typing to Search" prepend-icon="mdi-database-search" return-object></v-autocomplete>
            </v-flex>
            <v-flex xs5 d-flex v-else-if="yB==2019">
              <v-autocomplete class="mr-4" v-model="pB" :items="ln19" :loading="isLoading" color="white" hide-no-data
                hide-selected item-text="Description" item-value="API" label="Player B"
                placeholder="Start typing to Search" prepend-icon="mdi-database-search" return-object></v-autocomplete>
            </v-flex>
            <v-flex xs5 d-flex v-else>
              <v-autocomplete disabled=true class="mr-4" v-model="pB" :items="ln18" :loading="isLoading" color="white"
                hide-no-data hide-selected item-text="Description" item-value="API" label="Player B"
                placeholder="Start typing to Search" prepend-icon="mdi-database-search" return-object></v-autocomplete>
            </v-flex>

          </v-layout>
        </v-card-actions>
        <v-card-actions class="justify-center">
          <v-btn @click="goCompare">Compare</v-btn>
        </v-card-actions>
      </v-card>


      <v-layout row wrap>


        <v-flex xs6>
          <v-card class="mx-4 mb-4">


            <v-data-table :headers="headers" :items="p18" :search="search" :pagination.sync="pagination"
              :rows-per-page-items="pagination.rowsPerPageItems" :total-items="pagination.totalItems">


              <template v-slot:no-data>
                <v-alert :value="true" color="error" icon="warming">
                  Was not possible to showcase the list of players.
                </v-alert>
              </template>

              <template v-slot:items="props">
                <tr @click="rowClicked(props.item)">
                  <td class="subheading">{{ props.item.id }}</td>
                  <td class="subheading"><img vertical-align="middle" @error="onImageLoadFailure($event)"
                      :src=props.item.nat></td>
                  <td class="subheading"><img vertical-align="middle" @error="onImageLoadFailure($event)"
                      :src=props.item.ph width="48px" height="48px"></td>
                  <td class="subheading">{{ props.item.n }}</td>
                  <td class="subheading">{{ props.item.pt }}</td>
                  <td class="subheading">{{ props.item.age }}</td>
                </tr>
              </template>
              <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                  Your search for "{{ search }}" found no results.
                </v-alert>
              </template>
            </v-data-table>
          </v-card>

        </v-flex>

        <v-flex xs6>

          <v-card class="mx-4 mb-4">


            <v-data-table :headers="headers" :items="p19" :search="search" :pagination.sync="pagination"
              :rows-per-page-items="pagination.rowsPerPageItems" :total-items="pagination.totalItems">


              <template v-slot:no-data>
                <v-alert :value="true" color="error" icon="warming">
                  Was not possible to showcase the list of players.
                </v-alert>
              </template>

              <template v-slot:items="props">
                <tr @click="rowClicked(props.item)">
                  <td class="subheading">{{ props.item.id }}</td>
                  <td class="subheading"><img vertical-align="middle" @error="onImageLoadFailure($event)"
                      :src=props.item.nat></td>
                  <td class="subheading"><img vertical-align="middle" @error="onImageLoadFailure($event)"
                      :src=props.item.ph width="48px" height="48px"></td>
                  <td class="subheading">{{ props.item.n }}</td>
                  <td class="subheading">{{ props.item.pt }}</td>
                  <td class="subheading">{{ props.item.age }}</td>
                </tr>
              </template>
              <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                  Your search for "{{ search }}" found no results.
                </v-alert>
              </template>
            </v-data-table>
          </v-card>

          <!-- {text:'Id',align:'left',sortable:true,value:'id',class:'title'},
        {text:'Nationality',sortable:false,align:'left',value:'ph',class:'title'},
        {text:'Photo',sortable:false ,align:'left',value:'ph',class:'title'},
        {text:'Name',align:'left',sortable:true,value:'n',class:'title'},
        {text:'Pts.',align:'left',sortable:true,value:'pts',class:'title'},
        {text:'Age',align:'left',sortable:true,value:'age',class:'title'} -->

        </v-flex>
      </v-layout>




      <v-card-actions class="justify-center">
        <v-btn flat @click="goBack"> Go Back </v-btn>
      </v-card-actions>


    </v-container>


    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>


  </v-card>

  <!-- ?id ?ph ?age ?nat ?n ?pt -->

</template>

<script>
  import axios from 'axios'
  const lhost = "http://localhost:7719"

  export default {
    props: ['idClub'],
    data: () => ({
      pagination: {
        descending: true,
        sortBy: 'pts',
        page: 1,
        rowsPerPage: 50,
        rowsPerPageItems: [5, 10, 50]
      },
      search: '',
      headers: [{
          text: 'Id',
          align: 'left',
          sortable: true,
          value: 'id',
          class: 'title'
        },
        {
          text: 'Nationality',
          sortable: false,
          align: 'left',
          value: 'ph',
          class: 'title'
        },
        {
          text: 'Photo',
          sortable: false,
          align: 'left',
          value: 'ph',
          class: 'title'
        },
        {
          text: 'Name',
          align: 'left',
          sortable: true,
          value: 'n',
          class: 'title'
        },
        {
          text: 'Pts',
          align: 'left',
          sortable: true,
          value: 'pt',
          class: 'title'
        },
        {
          text: 'Age',
          align: 'left',
          sortable: true,
          value: 'age',
          class: 'title'
        }
      ],
      p18: [],
      p19: [],
      ln18: [],
      ln19: [],
      li: [],
      ln: [],
      name: "",
      pA: "",
      pB: "",
      yA: 0,
      yB: 0,
    }),
    mounted: async function () {
      try {
        var r18 = await axios.get(lhost + '/club/2018/' + this.idClub)
        var r19 = await axios.get(lhost + '/club/2019/' + this.idClub)

        var name = await axios.get(lhost + '/club/info/' + this.idClub)
        this.name = name.data[0]
        this.p18 = r18.data
        this.p19 = r19.data

        for (var i = 0; i < r18.data.length; i++) {

          this.li.push(r18.data[i].id)
          this.ln.push(r18.data[i].n)

          this.ln18.push(r18.data[i].n)
        }

        for (var i = 0; i < r19.data.length; i++) {

          this.li.push(r19.data[i].id)
          this.ln.push(r19.data[i].n)

          this.ln19.push(r19.data[i].n)
        }


      } catch (error) {
        return error
      }
    },
    methods: {

      goBack: function () {
        this.$router.push('/club')
      },
      goCompare: function () {

        var idA = this.li[this.ln.indexOf(this.pA)]
        var idB = this.li[this.ln.indexOf(this.pB)]

        this.$router.push('/compare/' + this.yA + "/" + idA + "/" + this.yB + "/" + idB)
      },

      goPlayer: function () {
        this.$router.push('/')
      },
      goNationality: function () {
        this.$router.push('/nationality')
      },
      goClubs: function () {
        this.$router.push('/club')
      },

      rowClicked: function (item) {
        this.$router.push('/player/' + item.id)
      },
      onImageLoadFailure(event) {
        event.target.src = 'http://www.cityrider.com/fixed/43aspect.png'
      }
    }
  }

</script>



<style>

</style>
