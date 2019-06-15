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


    <!--       
        <v-card-title >

          <h1>{{player.n}}</h1>
        </v-card-title>
        <v-divider></v-divider> -->
    <v-container>
      <!-- 
      <v-card class="ma-4">
        <v-card-actions class="justify-center">
          <h1> {{player}} </h1>
        </v-card-actions>
      </v-card> -->

      <v-card class="ma-4">
        <v-layout row wrap>

          <v-flex xs1>
            <img vertical-align="middle" @error="onImageLoadFailure($event)" :src=player.ph height="100"
              class="ma-4 justify-center">
          </v-flex>
          <v-flex xs1>
          </v-flex>
          <v-flex xs5>
            <h1 class="mx-4 mt-4">{{player.n}}</h1>
            <!-- <h2 class="mx-4 mt-4"> - 2018: {{player.t18}} | 2019: {{player.t19}}</h2>3 -->
          </v-flex>






          <v-flex xs5>
            <v-list class="pa-4">
              <v-list-tile @click="goContry(player.natl)">
                <v-list-tile-content> Nationality:</v-list-tile-content>

                <v-list-tile-content class="align-end"><img vertical-align="middle" @error="onImageLoadFailure($event)"
                    :src=player.natp></td> {{player.natn}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Age:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ player.age }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>

        </v-layout>
      </v-card>

    </v-container>
    <!-- <h1> {{player}} </h1> -->
    <!-- <v-card-actions class="justify-center"> -->

    <!-- <v-layout row wrap>

        <v-flex xs1>
        </v-flex>
        <v-flex xs5>


          <h1 class="pa-4"> {{player.n}} </h1>
          <img vertical-align="middle" @error="onImageLoadFailure($event)" :src=player.ph height="100"
            class="px-4 mb-4"></td>
        </v-flex>
        <v-flex xs1>
        </v-flex>
        <v-flex xs4>
          <v-list class="pa-4">
            <v-list-tile @click="goContry(player.natl)">
              <v-list-tile-content> Nationality:</v-list-tile-content>

              <v-list-tile-content class="align-end"><img vertical-align="middle" @error="onImageLoadFailure($event)"
                  :src=player.natp></td> {{player.natn}}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Age:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ player.age }}</v-list-tile-content>
            </v-list-tile>
          </v-list>

        </v-flex>

      </v-layout> -->

    <!-- </v-card-actions> -->









    <v-card-actions class="justify-center">
      <v-btn large @click="get(2018)" class="ma-3"> 2018 </v-btn>
      <v-btn large @click="get(2019)" class="ma-3"> 2019 </v-btn>
    </v-card-actions>

    <v-container>


      <!-- <v-card class="ma-4">
        <v-card-actions class="justify-center">
          <h1> {{year}} </h1>
        </v-card-actions>
      </v-card>

          <v-card class="ma-4">
      <v-card-actions class="justify-center">
        <div>
          <apexchart type=radar height=350 :options="options" :series="[{
        name: 'series-1',
        data: [pace.res, shooting.res, passing.res, dribbling.res, defense.res, physical.res]
      }]" />
        </div>
      </v-card-actions>
    </v-card>



      <v-card class="mx-4 mb-4">
        <v-card-actions class="justify-center">

          <v-progress-circular :size="100" :width="15" :value="pace.res" color="blue" class="ma-4">
            Pace
          </v-progress-circular>
          <v-progress-circular :size="100" :width="15" :value="shooting.res" color="blue" class="ma-4">
            Shooting
          </v-progress-circular>
          <v-progress-circular :size="100" :width="15" :value="passing.res" color="blue" class="ma-4">
            Passing
          </v-progress-circular>
          <v-progress-circular :size="100" :width="15" :value="dribbling.res" color="blue" class="ma-4">
            Dribbling
          </v-progress-circular>
          <v-progress-circular :size="100" :width="15" :value="defense.res" color="blue" class="ma-4">
            Defense
          </v-progress-circular>
          <v-progress-circular :size="100" :width="15" :value="physical.res" color="blue" class="ma-4">
            Physical
          </v-progress-circular>
        </v-card-actions>

      </v-card> -->

      <v-layout row wrap>

        <v-flex xs4>
          <v-card class="mx-4 mb-4">
            <v-card-title>

              <h4>Pace</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>Acceleration:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ pace.acceleration }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>SprintSpeed:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ pace.sprintspeed }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>

        <v-flex xs4>
          <v-card class="mx-4 mb-4">
            <v-card-title>
              <h4>Shooting</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>Positioning:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ shooting.positioning }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Finishing:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ shooting.finishing }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Shot Power:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ shooting.shotpower }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Long Shots:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ shooting.longshots }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Volleys:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ shooting.volleys }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Penalties:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ shooting.penalties }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card class="mx-4 mb-4">
            <v-card-title>

              <h4>Passing</h4>



            </v-card-title>

            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>Vision: </v-list-tile-content>
                <v-list-tile-content class="align-end">{{ passing.vision }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Crossing:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ passing.crossing }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Free Kick:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ passing.fkaccuracy }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Short Passing:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ passing.shortpassing }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Long Passing:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ passing.longpassing }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Curve:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ passing.curve }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card class="mx-4 mb-4">
            <v-card-title>
              <h4>Dribbling</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>Agility:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ dribbling.agility }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Balance:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ dribbling.balance }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Reactions:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ dribbling.reactions }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Ball Controll:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ dribbling.ballcontrol }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Dribbling:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ dribbling.dribbling }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Composure:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ dribbling.composure }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card class="mx-4 mb-4">
            <v-card-title>
              <h4>Defense</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>Interceptions:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ defense.interceptions }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Heading:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ defense.headingaccuracy }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Marking:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ defense.marking }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Standing Tackle:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ defense.standingtackle }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Sliding Tackle:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ defense.slidingtackle }}</v-list-tile-content>
              </v-list-tile>

            </v-list>
          </v-card>
        </v-flex>

        <v-flex xs4>
          <v-card class="mx-4 mb-4">
            <v-card-title>
              <h4>Physical</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>Jumping:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ physical.jumping }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Stamina:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ physical.stamina }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Strength:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ physical.strength }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Agression:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ physical.aggression }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>

      </v-layout>
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
    props: ['idPlayer', 'idYear'],
    data: () => ({
      
      pace: "",
      shooting: "",
      passing: "",
      dribbling: "",
      defense: "",
      physical: "",

      positions: ""
    }),
    mounted: async function () {
      try {
        var rPace = await axios.get(lhost + "/player/pace/" + this.idYear + "/" + this.idPlayer)
        this.pace = rPace.data[0]
        this.pace.res = ((parseInt(rPace.data[0].acceleration) + parseInt(rPace.data[0].sprintspeed)) / 2)

        var rShooting = await axios.get(lhost + "/player/shooting/" + this.idYear + "/" + this.idPlayer)
        this.shooting = rShooting.data[0]
        this.shooting.res = (
          parseInt(rShooting.data[0].positioning) +
          parseInt(rShooting.data[0].finishing) +
          parseInt(rShooting.data[0].shotpower) +
          parseInt(rShooting.data[0].longshots) +
          parseInt(rShooting.data[0].volleys) +
          parseInt(rShooting.data[0].penalties)) / 6

        var rPassing = await axios.get(lhost + "/player/passing/" + this.idYear + "/" + this.idPlayer)
        this.passing = rPassing.data[0]
        this.passing.res = (
          parseInt(rPassing.data[0].vision) +
          parseInt(rPassing.data[0].crossing) +
          parseInt(rPassing.data[0].fkaccuracy) +
          parseInt(rPassing.data[0].shortpassing) +
          parseInt(rPassing.data[0].longpassing) +
          parseInt(rPassing.data[0].curve)) / 6

        var rDribbling = await axios.get(lhost + "/player/dribbling/" + this.idYear + "/" + this.idPlayer)
        this.dribbling = rDribbling.data[0]
        this.dribbling.res = (
          parseInt(rDribbling.data[0].agility) +
          parseInt(rDribbling.data[0].balance) +
          parseInt(rDribbling.data[0].reactions) +
          parseInt(rDribbling.data[0].ballcontrol) +
          parseInt(rDribbling.data[0].dribbling) +
          parseInt(rDribbling.data[0].composure)) / 6

        var rDefense = await axios.get(lhost + "/player/defense/" + this.idYear + "/" + this.idPlayer)
        this.defense = rDefense.data[0]
        this.defense.res = (
          parseInt(rDefense.data[0].interceptions) +
          parseInt(rDefense.data[0].headingaccuracy) +
          parseInt(rDefense.data[0].marking) +
          parseInt(rDefense.data[0].standingtackle) +
          parseInt(rDefense.data[0].slidingtackle)) / 5

        var rPhysical = await axios.get(lhost + "/player/physical/" + this.idYear + "/" + this.idPlayer)
        this.physical = rPhysical.data[0]
        this.physical.res = (
          parseInt(rPhysical.data[0].jumping) +
          parseInt(rPhysical.data[0].stamina) +
          parseInt(rPhysical.data[0].strength) +
          parseInt(rPhysical.data[0].aggression)) / 4

      } catch (error) {
        return error
      }
    },
    methods: {

      goBack: function () {
        this.$router.push('/club')
      },

      go2018: function () {
        this.$router.push( '/player/2018/' + this.idPlayer)
      },
      go2019: function () {
        this.$router.push( '/player/2019/' + this.idPlayer)
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
