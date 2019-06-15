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


    <v-card class="ma-4">
      <v-card-actions class="justify-center">
        <h1>Comparing:</h1>

        <!-- <h1>{{paceA}}</h1> -->
        <!-- <h1> {{ia}} {{ya}} {{ib}} {{yb}} </h1> -->
      </v-card-actions>
    </v-card>
3

    <v-container>

      <v-layout row wrap>
        <v-flex xs6>
          <v-card class="ma-4">
            <v-layout row wrap>
              <v-flex xs1>
                <img vertical-align="middle" @error="onImageLoadFailure($event)" :src=pA.ph height="100"
                  class="ma-4 justify-center">
              </v-flex>
              <v-flex xs1>
              </v-flex>
              <v-flex xs5>
                <h1 class="mx-4 mt-4">{{pA.n}}</h1>
                <h2 class="mx-4 mt-4"> {{ya}}</h2>
              </v-flex>

              <v-flex xs5>
                <v-list class="pa-4">
                  <v-list-tile @click="goContry(pA.natl)">
                    <v-list-tile-content> Nationality:</v-list-tile-content>

                    <v-list-tile-content class="align-end"><img vertical-align="middle"
                        @error="onImageLoadFailure($event)" :src=pA.natp></td> {{pA.natn}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Age:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ pA.age }}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>

            </v-layout>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card class="ma-4">
            <v-layout row wrap>
              <v-flex xs1>
                <img vertical-align="middle" @error="onImageLoadFailure($event)" :src=pB.ph height="100"
                  class="ma-4 justify-center">
              </v-flex>
              <v-flex xs1>
              </v-flex>
              <v-flex xs5>
                <h1 class="mx-4 mt-4">{{pB.n}}</h1>
                <h2 class="mx-4 mt-4"> {{yb}}</h2>
              </v-flex>

              <v-flex xs5>
                <v-list class="pa-4">
                  <v-list-tile @click="goContry(pB.natl)">
                    <v-list-tile-content> Nationality:</v-list-tile-content>

                    <v-list-tile-content class="align-end"><img vertical-align="middle"
                        @error="onImageLoadFailure($event)" :src=pB.natp></td> {{pB.natn}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Age:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ pB.age }}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>

            </v-layout>
          </v-card>
        </v-flex>

      </v-layout>



      <v-layout row wrap class="ma-4">

        <v-flex xs6>

          <v-card class="mx-4 mb-4">

            <v-divider></v-divider>
            <v-list>
              <v-list-tile @click="goClub(statusA.cid)">
                <v-list-tile-content>Club:</v-list-tile-content>
                <v-list-tile-content class="align-end"> <img vertical-align="middle" @error="onImageLoadFailure($event)"
                    :src=statusA.clogo> </img> {{statusA.cn }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Wage:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusA.wage }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Release Clause:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusA.release_clause }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Value:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusA.value }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>International Reputation:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusA.international_reputation }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Skill Moves:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusA.skill_moves }}/5</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Height:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusA.height }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Weight:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusA.weight }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Preferred Foot:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusA.preferred_foot }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Weak Foot:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusA.weak_foot }}/5</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>

        </v-flex>


        <v-flex xs6>

          <v-card class="mx-4 mb-4">

            <v-divider></v-divider>
            <v-list>
              <v-list-tile @click="goClub(statusB.cid)">
                <v-list-tile-content>Club:</v-list-tile-content>
                <v-list-tile-content class="align-end"> <img vertical-align="middle" @error="onImageLoadFailure($event)"
                    :src=statusB.clogo> </img> {{statusB.cn }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Wage:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusB.wage }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Release Clause:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusB.release_clause }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Value:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusB.value }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>International Reputation:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusB.international_reputation }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Skill Moves:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusB.skill_moves }}/5</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Height:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusB.height }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Weight:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusB.weight }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Preferred Foot:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusB.preferred_foot }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Weak Foot:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ statusB.weak_foot }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>

        </v-flex>



      </v-layout>








      <v-layout row wrap class="ma-4">
        <v-flex xs12>
          <h1 class="ma-4">Overall</h1>
        </v-flex>

        <v-flex xs4>
          <v-card class="mx-4 mb-4">

            <v-list>
              <v-list-tile>
                <v-list-tile-content>Pace:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(paceA.res) }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Shooting:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(shootingA.res) }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Passing:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(passingA.res) }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Dribbling:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(dribblingA.res) }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Defense:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(defenseA.res) }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Physical:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(physicalA.res) }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>

        <v-flex xs4>
          <v-card>
            <v-card-actions class="justify-center">
              <div>
                <apexchart type=radar height=350 :options="options" :series="[{
                name: pA.n,
                data: [parseInt(paceA.res), parseInt(shootingA.res), parseInt(passingA.res), parseInt(dribblingA.res), parseInt(defenseA.res), parseInt(physicalA.res)]
              },{
                name: pB.n,
                data: [parseInt(paceB.res), parseInt(shootingB.res), parseInt(passingB.res), parseInt(dribblingB.res), parseInt(defenseB.res), parseInt(physicalB.res)]
              }]" />
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs4>

          <v-card class="mx-4 mb-4">
            <v-list>
              <v-list-tile>
                <v-list-tile-content>Pace:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(paceB.res) }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Shooting:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(shootingB.res) }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Passing:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(passingB.res) }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Dribbling:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(dribblingB.res) }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Defense:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(defenseB.res) }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Physical:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ parseInt(physicalB.res) }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>

      </v-layout>




      <!-- PACE -->

      <v-card @click="getDetail" class=" pa-4" v-if="!detail">
        <v-card-actions class="justify-center">
          <h1 class="ma-4"> Show Details </h1>
        </v-card-actions>
      </v-card>


      <v-card class=" pa-4" v-else>

        <v-layout row wrap class="ma-4">
          <v-flex xs12>
            <h1 class="ma-4">Pace</h1>
          </v-flex>
          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Acceleration:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ paceA.acceleration }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>SprintSpeed:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ paceA.sprintspeed }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card>
              <v-card-actions class="justify-center">
                <div>
                  <apexchart type=bar height=350 :options="optionsPace" :series="[{
                name: pA.n,
                data: [paceA.acceleration,paceA.sprintspeed]
              },{
                name: pB.n,
                data: [paceB.acceleration,paceB.sprintspeed]
              }]" />
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Acceleration:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ paceB.acceleration }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>SprintSpeed:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ paceB.sprintspeed }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

        </v-layout>

























        <!-- shoooooooooooooting -->

        <v-layout row wrap class="ma-4">
          <v-flex xs12>
            <h1 class="ma-4">Shooting</h1>
          </v-flex>
          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Positioning:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingA.positioning }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Finishing:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingA.finishing }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Shot Power:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingA.shotpower }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Long Shots:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingA.longshots }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Volleys:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingA.volleys }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Penalties:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingA.penalties }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card>
              <v-card-actions class="justify-center">
                <div>
                  <apexchart type=radar height=350 :options="optionsShooting" :series="[{
                name: pA.n,
                data: [shootingA.positioning, shootingA.finishing, shootingA.shotpower,shootingA.longshots,shootingA.volleys, shootingA.penalties]
              },{
                name: pB.n,
                data: [shootingB.positioning, shootingB.finishing, shootingB.shotpower,shootingB.longshots,shootingB.volleys, shootingB.penalties]
              }]" />
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Positioning:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingB.positioning }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Finishing:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingB.finishing }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Shot Power:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingB.shotpower }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Long Shots:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingB.longshots }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Volleys:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingB.volleys }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Penalties:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ shootingB.penalties }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

        </v-layout>

















        <!-- passing -->

        <v-layout row wrap class="ma-4">
          <v-flex xs12>
            <h1 class="ma-4">Passing</h1>
          </v-flex>
          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Vision:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingA.vision }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Crossing:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingA.crossing }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Free Kicks:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingA.fkaccuracy }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Short Passing:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingA.shortpassing }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Long Passing:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingA.longpassing }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Curve:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingA.curve }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card>
              <v-card-actions class="justify-center">
                <div>
                  <apexchart type=radar height=350 :options="optionsPassing" :series="[{
                name: pA.n,
                data: [passingA.vision,passingA.crossing,passingA.fkaccuracy,passingA.shortpassing,passingA.longpassing,passingA.curve]
              },{
                name: pB.n,
                data: [passingB.vision,passingB.crossing,passingB.fkaccuracy,passingB.shortpassing,passingB.longpassing,passingB.curve]
              }]" />
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Vision:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingB.vision }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Crossing:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingB.crossing }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Free Kicks:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingB.fkaccuracy }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Short Passing:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingB.shortpassing }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Long Passing:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingB.longpassing }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Curve:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ passingB.curve }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

        </v-layout>







        <!-- dribbling -->

        <v-layout row wrap class="ma-4">
          <v-flex xs12>
            <h1 class="ma-4">Dribbling</h1>
          </v-flex>
          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Agility:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingA.agility }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Balance:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingA.balance }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Reactions:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingA.reactions }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Ball Control:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingA.ballcontrol }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Dribbling:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingA.dribbling }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Composure:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingA.composure }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card>
              <v-card-actions class="justify-center">
                <div>
                  <apexchart type=radar height=350 :options="optionsDribbling" :series="[{
                name: pA.n,
                data: [dribblingA.agility,dribblingA.balance,dribblingA.reactions,dribblingA.ballcontrol,dribblingA.dribbling,dribblingA.composure]
              },{
                name: pB.n,
                data: [dribblingB.agility,dribblingB.balance,dribblingB.reactions,dribblingB.ballcontrol,dribblingB.dribbling,dribblingB.composure]
              }]" />
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Agility:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingB.agility }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Balance:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingB.balance }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Reactions:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingB.reactions }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Ball Control:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingB.ballcontrol }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Dribbling:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingB.dribbling }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Composure:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ dribblingB.composure }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

        </v-layout>











        <!-- dribbling -->

        <v-layout row wrap class="ma-4">
          <v-flex xs12>
            <h1 class="ma-4">Defense</h1>
          </v-flex>
          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Interceptions:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ defenseA.interceptions }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Heading:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ defenseA.headingaccuracy }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Marking:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ defenseA.marking }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Standing Tackle:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ defenseA.standingtackle }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Sliding Tackle:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ defenseA.slidingtackle }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card>
              <v-card-actions class="justify-center">
                <div>
                  <apexchart type=radar height=350 :options="optionsDefense" :series="[{
                name: pA.n,
                data:[defenseA.interceptions,defenseA.headingaccuracy,defenseA.marking,defenseA.standingtackle,defenseA.slidingtackle]
              },{
                name: pB.n,
                data: [defenseB.interceptions,defenseB.headingaccuracy,defenseB.marking,defenseB.standingtackle,defenseB.slidingtackle]
              }]" />
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Interceptions:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ defenseB.interceptions }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Heading:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ defenseB.headingaccuracy }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Marking:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ defenseB.marking }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Standing Tackle:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ defenseB.standingtackle }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Sliding Tackle:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ defenseB.slidingtackle }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

        </v-layout>






        <!-- dribbling -->

        <v-layout row wrap class="ma-4">
          <v-flex xs12>
            <h1 class="ma-4">Physical</h1>
          </v-flex>
          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Interceptions:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ physicalA.jumping }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Heading:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ physicalA.stamina }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Marking:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ physicalA.strength }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Standing Tackle:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ physicalA.aggression }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card>
              <v-card-actions class="justify-center">
                <div>
                  <apexchart type=radar height=350 :options="optionsPhysical" :series="[{
                name: pA.n,
                data:[physicalA.jumping,physicalA.stamina,physicalA.strength,physicalA.aggression]
              },{
                name: pB.n,
                data:[physicalB.jumping,physicalB.stamina,physicalB.strength,physicalB.aggression]
              }]" />
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card class="mx-4 mb-4">

              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Interceptions:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ physicalB.jumping }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Heading:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ physicalB.stamina }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Marking:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ physicalB.strength }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Standing Tackle:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ physicalB.aggression }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

        </v-layout>






      </v-card>




    </v-container>

    <!-- <v-flex xs6>
    <v-flex xs1>
      <img vertical-align="middle" @error="onImageLoadFailure($event)" :src=pA.ph height="100"
        class="ma-4 justify-center">
    </v-flex>
    <v-flex xs1>
    </v-flex>
    <v-flex xs5>
      <h1 class="mx-4 mt-4">{{pA.n}}</h1>
    </v-flex>

    <v-flex xs5>
      <v-list class="pa-4">
        <v-list-tile @click="goContry(pA.natl)">
          <v-list-tile-content> Nationality:</v-list-tile-content>

          <v-list-tile-content class="align-end"><img vertical-align="middle" @error="onImageLoadFailure($event)"
              :src=pA.natp></td> {{pA.natn}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>Age:</v-list-tile-content>
          <v-list-tile-content class="align-end">{{ pA.age }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-flex> -->
    <!-- 
  </v-layout>
  </v-card> -->



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
    props: ['ia', 'ya', 'ib', 'yb'],
    data: () => ({
      pA: "",
      pB: "",


      detail: false,

      paceA: "",
      paceB: "",
      shootingA: "",
      shootingB: "",
      passingA: "",
      passingB: "",
      dribblingA: "",
      dribblingB: "",
      defenseA: "",
      defenseB: "",
      positionsA: "",
      positionsB: "",
      physicalA: "",
      physicalB: "",
      statusA: "",
      statusB: "",



      options: {
        chart: {
          id: 'vuechart'
        },
        xaxis: {
          categories: ["Pace", "Shooting", "Passing", "Dribbling", "Defense", "Physical"]
        }
      },

      optionsPace: {
        chart: {
          id: 'vuechart'
        },
        xaxis: {
          categories: ["Acceleration", "SprintSpeed"]
        }
      },

      optionsShooting: {
        chart: {
          id: 'vuechart'
        },
        xaxis: {
          categories: ["Positioning", "Finishing", "Shot Power", "Long Shots", "Volleys", "Penalties"]
        }
      },

      optionsPassing: {
        chart: {
          id: 'vuechart'
        },
        xaxis: {
          categories: ["Pace", "Shooting", "Passing", "Dribbling", "Defense", "Physical"]
        }
      },

      optionsDribbling: {
        chart: {
          id: 'vuechart'
        },
        xaxis: {
          categories: ["Agility", "Balance", "Reactions", "Ball Control", "Dribbling", "Composure"]
        }
      },


      optionsDefense: {
        chart: {
          id: 'vuechart'
        },
        xaxis: {
          categories: ["Interceptions", "Heading", "Marking", "Standing Tackle", "Sliding Tackle"]
        }
      },

      optionsPhysical: {
        chart: {
          id: 'vuechart'
        },
        xaxis: {
          categories: ["Interceptions", "Heading", "Marking", "Standing Tackle"]
        }
      },



    }),
    mounted: async function () {

      var rPlayerA = await axios.get(lhost + "/player/" + this.ia)
      this.pA = rPlayerA.data[0]

      var rPlayerB = await axios.get(lhost + "/player/" + this.ib)
      this.pB = rPlayerB.data[0]




      try {
        var rPaceA = await axios.get(lhost + "/player/pace/" + this.ya + "/" + this.ia)
        this.paceA = rPaceA.data[0]
        this.paceA.res = ((parseInt(rPaceA.data[0].acceleration) + parseInt(rPaceA.data[0].sprintspeed)) / 2)

        var rShootingA = await axios.get(lhost + "/player/shooting/" + this.ya + "/" + this.ia)
        this.shootingA = rShootingA.data[0]
        this.shootingA.res = (
          parseInt(rShootingA.data[0].positioning) +
          parseInt(rShootingA.data[0].finishing) +
          parseInt(rShootingA.data[0].shotpower) +
          parseInt(rShootingA.data[0].longshots) +
          parseInt(rShootingA.data[0].volleys) +
          parseInt(rShootingA.data[0].penalties)) / 6

        var rPassingA = await axios.get(lhost + "/player/passing/" + this.ya + "/" + this.ia)
        this.passingA = rPassingA.data[0]
        this.passingA.res = (
          parseInt(rPassingA.data[0].vision) +
          parseInt(rPassingA.data[0].crossing) +
          parseInt(rPassingA.data[0].fkaccuracy) +
          parseInt(rPassingA.data[0].shortpassing) +
          parseInt(rPassingA.data[0].longpassing) +
          parseInt(rPassingA.data[0].curve)) / 6

        var rDribblingA = await axios.get(lhost + "/player/dribbling/" + this.ya + "/" + this.ia)
        this.dribblingA = rDribblingA.data[0]
        this.dribblingA.res = (
          parseInt(rDribblingA.data[0].agility) +
          parseInt(rDribblingA.data[0].balance) +
          parseInt(rDribblingA.data[0].reactions) +
          parseInt(rDribblingA.data[0].ballcontrol) +
          parseInt(rDribblingA.data[0].dribbling) +
          parseInt(rDribblingA.data[0].composure)) / 6

        var rDefenseA = await axios.get(lhost + "/player/defense/" + this.ya + "/" + this.ia)
        this.defenseA = rDefenseA.data[0]
        this.defenseA.res = (
          parseInt(rDefenseA.data[0].interceptions) +
          parseInt(rDefenseA.data[0].headingaccuracy) +
          parseInt(rDefenseA.data[0].marking) +
          parseInt(rDefenseA.data[0].standingtackle) +
          parseInt(rDefenseA.data[0].slidingtackle)) / 5

        var rPhysicalA = await axios.get(lhost + "/player/physical/" + this.ya + "/" + this.ia)
        this.physicalA = rPhysicalA.data[0]
        this.physicalA.res = (
          parseInt(rPhysicalA.data[0].jumping) +
          parseInt(rPhysicalA.data[0].stamina) +
          parseInt(rPhysicalA.data[0].strength) +
          parseInt(rPhysicalA.data[0].aggression)) / 4


        var rStatusA = await axios.get(lhost + "/player/status/" + this.ya + "/" + this.ia)
        this.statusA = rStatusA.data[0]


        var rPaceB = await axios.get(lhost + "/player/pace/" + this.ya + "/" + this.ia)
        this.paceB = rPaceB.data[0]
        this.paceB.res = ((parseInt(rPaceB.data[0].acceleration) + parseInt(rPaceB.data[0].sprintspeed)) / 2)

        var rShootingB = await axios.get(lhost + "/player/shooting/" + this.yb + "/" + this.ib)
        this.shootingB = rShootingB.data[0]
        this.shootingB.res = (
          parseInt(rShootingB.data[0].positioning) +
          parseInt(rShootingB.data[0].finishing) +
          parseInt(rShootingB.data[0].shotpower) +
          parseInt(rShootingB.data[0].longshots) +
          parseInt(rShootingB.data[0].volleys) +
          parseInt(rShootingB.data[0].penalties)) / 6

        var rPassingB = await axios.get(lhost + "/player/passing/" + this.yb + "/" + this.ib)
        this.passingB = rPassingB.data[0]
        this.passingB.res = (
          parseInt(rPassingB.data[0].vision) +
          parseInt(rPassingB.data[0].crossing) +
          parseInt(rPassingB.data[0].fkaccuracy) +
          parseInt(rPassingB.data[0].shortpassing) +
          parseInt(rPassingB.data[0].longpassing) +
          parseInt(rPassingB.data[0].curve)) / 6

        var rDribblingB = await axios.get(lhost + "/player/dribbling/" + this.yb + "/" + this.ib)
        this.dribblingB = rDribblingB.data[0]
        this.dribblingB.res = (
          parseInt(rDribblingB.data[0].agility) +
          parseInt(rDribblingB.data[0].balance) +
          parseInt(rDribblingB.data[0].reactions) +
          parseInt(rDribblingB.data[0].ballcontrol) +
          parseInt(rDribblingB.data[0].dribbling) +
          parseInt(rDribblingB.data[0].composure)) / 6

        var rDefenseB = await axios.get(lhost + "/player/defense/" + this.yb + "/" + this.ib)
        this.defenseB = rDefenseB.data[0]
        this.defenseB.res = (
          parseInt(rDefenseB.data[0].interceptions) +
          parseInt(rDefenseB.data[0].headingaccuracy) +
          parseInt(rDefenseB.data[0].marking) +
          parseInt(rDefenseB.data[0].standingtackle) +
          parseInt(rDefenseB.data[0].slidingtackle)) / 5

        var rPhysicalB = await axios.get(lhost + "/player/physical/" + this.yb + "/" + this.ib)
        this.physicalB = rPhysicalB.data[0]
        this.physicalB.res = (
          parseInt(rPhysicalB.data[0].jumping) +
          parseInt(rPhysicalB.data[0].stamina) +
          parseInt(rPhysicalB.data[0].strength) +
          parseInt(rPhysicalB.data[0].aggression)) / 4






        var rStatusB = await axios.get(lhost + "/player/status/" + this.yb + "/" + this.ib)
        this.statusB = rStatusB.data[0]










      } catch (error) {
        return error

      }







    },
    methods: {

      goBack: function () {
        this.$router.push('/club')
      },

      getDetail: function () {
        this.detail = !this.detail
      },

      goClub: function (item) {
        this.$router.push('/club/' + item)
      },

      goPlayer: function () {
        this.$router.push('/')
      },
      goNationality: function () {
        this.$router.push('/nationality')
      },
      goContry: function (item) {
        this.$router.push('/nationality/' + item)
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
