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
      <p class="display-4 pa-4">TeamBuilder</p>
    </v-card-actions>



    <v-container>

      <v-card class="mb-4 pa-4">
        <v-select :items=[2018,2019] v-model="yB" label="Standard"></v-select>

      </v-card>

      <v-card class="mb-4 pa-4">
        <v-layout row wrap>
          <v-flex xs1>
            <h1>FUCK</h1>
          </v-flex>
          <v-flex xs11>
              <v-autocomplete class="mr-4" v-model="pA" :items="ln18" :loading="isLoading" color="white" hide-no-data
                hide-selected item-text="Description" item-value="API" label="Player A"
                placeholder="Start typing to Search" prepend-icon="mdi-database-search" return-object></v-autocomplete>
          </v-flex>
        </v-layout>
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
      // try {
      //   var response = await axios.get(lhost + '/player')
      //   this.player = response.data

      //   for (var i = 0; i < response.data.length; i++) {
      //     this.li.push(response.data[i].id)
      //     this.ln.push(response.data[i].n)

      //     if (response.data[i].t18 != null) {
      //       this.ln18.push(response.data[i].n)
      //     }
      //     if (response.data[i].t19 != null) {
      //       this.ln19.push(response.data[i].n)
      //     }

      //   }


      // } catch (error) {
      //   return error
      // }
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

        this.$router.push('/player/' + idA)
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
