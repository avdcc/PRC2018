<template>
  <v-card>

    <v-toolbar>
      <v-spacer></v-spacer>

      <v-toolbar-items>

        <v-btn flat @click="goPlayer"> Players </v-btn>
        <v-btn flat @click="goNationality"> Nationality </v-btn>
        <v-btn flat @click="goClubs"> Clubs </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <v-card-actions class="justify-center">
      <p class="display-4 pa-4">Players</p>
    </v-card-actions>




    <v-container>

      <v-card class="mb-4 pa-4">

        <v-card-title>
          <h2>Player Page</h2>
        </v-card-title>

        <v-card-actions class="justify-center">
          <v-layout wrap align-center>
            <v-flex xs11 d-flex>
              <v-autocomplete class="mr-4" v-model="pA" :items="ln" :loading="isLoading" color="white" hide-no-data
                hide-selected item-text="Description" item-value="API" label="Player"
                placeholder="Start typing to Search" prepend-icon="mdi-database-search" return-object></v-autocomplete>
            </v-flex>
            <v-flex xs1 d-flex>
              <v-btn @click="goPage">Search</v-btn>
            </v-flex>

          </v-layout>
        </v-card-actions>


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

      <v-card>



        <!-- <v-card-title> -->

          <!-- <v-spacer></v-spacer> -->
          <!-- <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field> -->
          <!-- hide-details -->
        <!-- </v-card-title> -->

        <v-data-table :headers="headers" :items="player" :search="search" :pagination.sync="pagination"
          :rows-per-page-items="pagination.rowsPerPageItems" :total-items="pagination.totalItems">


          <!-- rows-per-page-text="3" -->
          <!-- disable-initial-sort="True" -->
          <!-- class="elevation-1" -->

          <template v-slot:no-data>
            <v-alert :value="true" color="error" icon="warming">
              Was not possible to showcase the list of players.
            </v-alert>
          </template>

          <template v-slot:items="props">
            <tr @click="rowClicked(props.item)">
              <td>{{ props.item.id }}</td>
              <!-- <td class="subheading">{{ props.item.id }}</td> -->
              <td class="subheading"><img vertical-align="middle" @error="onImageLoadFailure($event)"
                  :src=props.item.nat></td>
              <td class="subheading"><img vertical-align="middle" @error="onImageLoadFailure($event)" :src=props.item.ph
                  width="48px" height="48px"></td>
              <td class="subheading">{{ props.item.n }}</td>
              <td class="subheading">{{ props.item.t18 }}</td>
              <td class="subheading">{{ props.item.t19 }}</td>
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


    </v-container>

    <v-footer app inset class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>

  </v-card>



</template>



<script>
  import axios from 'axios'
  const lhost = "http://localhost:7719"

  export default {
    data: () => ({
      pagination: {
        descending: true,
        sortBy: 't19',
        page: 1,
        rowsPerPage: 25,
        rowsPerPageItems: [5, 10, 25, 50, 100]
      },
      search: '',
      headers: [{
          text: 'Id',
          sortable: false,
          align: 'left',
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
          text: '2018',
          align: 'left',
          sortable: true,
          value: 't18',
          class: 'title'
        },
        {
          text: '2019',
          align: 'left',
          sortable: true,
          value: 't19',
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

      player: [],
      li: [],
      ln: [],
      ln18: [],
      ln19: [],
      pA: "",
      pB: "",
      yA: 0,
      yB: 0,
    }),
    mounted: async function () {
      try {
        var response = await axios.get(lhost + '/player')
        this.player = response.data

        for (var i = 0; i < response.data.length; i++) {
          this.li.push(response.data[i].id)
          this.ln.push(response.data[i].n)

          if (response.data[i].t18 != null) {
            this.ln18.push(response.data[i].n)
          }
          if (response.data[i].t19 != null) {
            this.ln19.push(response.data[i].n)
          }

        }


      } catch (error) {
        return error
      }
    },

    methods: {

      goCompare: function () {

        var idA = this.li[this.ln.indexOf(this.pA)]
        var idB = this.li[this.ln.indexOf(this.pB)]

        this.$router.push('/compare/' + this.yA + "/" + idA + "/" + this.yB + "/" + idB)
        // this.$router.go()
      },

      goPage: function () {

        var idA = this.li[this.ln.indexOf(this.pA)]

        this.$router.push('/player/' + idA )
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
