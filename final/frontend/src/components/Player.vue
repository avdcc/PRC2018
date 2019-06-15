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
            <!-- <h2 class="mx-4 mt-4"> - 2018: {{player.t18}} | 2019: {{player.t19}}</h2>3 -->
          </v-flex>
          <v-flex xs1>
          </v-flex>
          <v-flex xs5>
            <h1 class="mx-4 mt-4">{{player.n}}</h1>
            <h2 class="mx-4 mt-4"> - 2018: {{player.t18}} | 2019: {{player.t19}}</h2>
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


      <v-card class="ma-4">
        <v-card-actions class="justify-center">
          <h1> {{year}} </h1>
        </v-card-actions>
      </v-card>

      <v-card class="mx-4 mb-4">
        <v-card-title>
          <h4>Info</h4>
        </v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile @click="goClub(status.cid)">
            <v-list-tile-content>Club:</v-list-tile-content>
            <v-list-tile-content class="align-end">  <img vertical-align="middle" @error="onImageLoadFailure($event)"
                    :src=status.clogo> </img>  {{status.cn }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Wage:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ status.wage }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Release Clause:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ status.release_clause }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Value:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ status.value }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>International Reputation:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ status.international_reputation }} ⭐ </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Skill Moves:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ status.skill_moves }} ⭐</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Height:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ status.height }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Weight:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ status.weight }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Preferred Foot:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ status.preferred_foot }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Weak Foot:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ status.weak_foot }} ⭐</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>





      <v-card class="mx-4 mb-4" @click="swapShow()">
        <v-card-actions class="justify-center" v-if="show">

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

        <v-card-actions class="justify-center" v-else>
          <div>
            <apexchart type=radar height=350 :options="options" :series="[{
                name: 'Value',
                data: [parseInt(pace.res), parseInt(shooting.res), parseInt(passing.res), parseInt(dribbling.res), parseInt(defense.res), parseInt(physical.res)]
              }]" />
          </div>
        </v-card-actions>

      </v-card>

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



      <h1 class="mx-4 mt-4">{{positions}}</h1>



      <v-card class="pa-4 ma-4">
        <v-layout row wrap>
          <v-flex xs6>

            <v-card class="mx-4 mb-4">
              <!-- img="https://comps.canstockphoto.com/vector-football-field-vertical-eps-vector_csp25356443.jpg" -->

              <!-- <img vertical-align="middle" @error="onImageLoadFailure($event)" :src="fuck" height="100" -->
              <!-- class="ma-4 justify-center"> -->



              <v-card-actions class="justify-center">
                <v-layout row wrap>

                  <v-flex xs12>
                    <v-card-actions class="justify-center">
                      <v-progress-circular :size="100" :width="15" :value="position.gk" color="cyan lighten-1"
                        class="ma-4">
                        GK
                      </v-progress-circular>
                    </v-card-actions>
                  </v-flex>

                  <v-flex xs12>
                    <v-card-actions class="justify-center">
                      <v-progress-circular :size="100" :width="15" :value="position.rb" color="indigo darken-4"
                        class="ma-4">
                        RB
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.cb" color="pink darken-4"
                        class="ma-4">
                        CB
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.cb" color="pink darken-4"
                        class="ma-4">
                        CB
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.cb" color="pink darken-4"
                        class="ma-4">
                        CB
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.lb" color="amber darken-1" class="ma-4">
                        LB
                      </v-progress-circular>
                    </v-card-actions>
                  </v-flex>

                  <v-flex xs12>
                    <v-card-actions class="justify-center">
                      <v-progress-circular :size="100" :width="15" :value="position.rwb" color="green"
                        class="ma-4 mx-5">
                        RWB
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.cdm" color="brown"
                        class="ma-4 mx-5">
                        CDM
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.lwb" color="orange"
                        class="ma-4 mx-5">
                        LWB
                      </v-progress-circular>

                    </v-card-actions>
                  </v-flex>


                  <v-flex xs12>
                    <v-card-actions class="justify-center">
                      <v-progress-circular :size="100" :width="15" :value="position.rm" color="green" class="ma-4">
                        RM
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.cm" color="purple" class="ma-4">
                        CM
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.cm" color="purple" class="ma-4">
                        CM
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.cm" color="purple" class="ma-4">
                        CM
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.lm" color="blue" class="ma-4">
                        LM
                      </v-progress-circular>

                    </v-card-actions>
                  </v-flex>


                  <v-flex xs12>
                    <v-card-actions class="justify-center">
                      <v-progress-circular :size="100" :width="15" :value="position.rw" color="amber darken-1" class="ma-4">
                        RW
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.cam" color="red" class="ma-4">
                        CAM
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.lw" color="pink" class="ma-4">
                        LW
                      </v-progress-circular>


                    </v-card-actions>
                  </v-flex>

                  <v-flex xs12>
                    <v-card-actions class="justify-center">
                      <v-progress-circular :size="100" :width="15" :value="position.cf" color="grey" class="ma-4">
                        CF
                      </v-progress-circular>
                    </v-card-actions>
                  </v-flex>


                  <v-flex xs12>
                    <v-card-actions class="justify-center">
                      <v-progress-circular :size="100" :width="15" :value="position.st" color="black" class="ma-4">
                        ST
                      </v-progress-circular>
                      <v-progress-circular :size="100" :width="15" :value="position.st" color="black" class="ma-4">
                        ST
                      </v-progress-circular>



                    </v-card-actions>
                  </v-flex>



                </v-layout>
              </v-card-actions>

            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card class="mx-4 mb-4">
              <v-card-title>
                <v-card-actions class="justify-center">
                  <h2>Positions</h2>
                </v-card-actions>
              </v-card-title>
              <v-divider></v-divider>
              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Goalkeeper:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.gk }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Right Back:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.rb }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Center Back:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.cb }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Left Back:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.lb }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Right Wing Back:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.rwb }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Left Wing Back:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.lwb }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Center Defensive Midfielder:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.cdm }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Center Midfielder:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.cm }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Center Attacking Midfielder:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.cam }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Right Midfielder:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.rm }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Left Midfielder:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.lm }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Right Wing:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.rw }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Left Wing:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.lw }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Center Forward:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.cf }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Striker:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ position.st }}</v-list-tile-content>
                </v-list-tile>


                <v-list-tile>
                  <v-list-tile-content>Work Rate Attack:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ status.wr_att }}</v-list-tile-content>
                </v-list-tile>                
                <v-list-tile>
                  <v-list-tile-content>Work Rate Defense:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ status.wr_def }}</v-list-tile-content>
                </v-list-tile>


              </v-list>
            </v-card>
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
    props: ['idPlayer'],
    data: () => ({
      player: "",
      year: 2018,
      show: false,
      pace: "",
      shooting: "",
      passing: "",
      dribbling: "",
      defense: "",
      physical: "",
      position: "",
      status: "",
      fuck: "https://image.freepik.com/foto-gratis/campo-futbol-o-campo-futbol-fondo-corte-cesped-verde-crear-juego_64749-2034.jpg",
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ["Pace", "Shooting", "Passing", "Dribbling", "Defense", "Physical"]
        }
      },


    }),
    mounted: async function () {

      try {
        var rPlayer = await axios.get(lhost + "/player/" + this.idPlayer)
        this.player = rPlayer.data[0]

        var yyear = 2018

        var rPace = await axios.get(lhost + "/player/pace/" + yyear + "/" + this.idPlayer)
        this.pace = rPace.data[0]
        this.pace.res = ((parseInt(rPace.data[0].acceleration) + parseInt(rPace.data[0].sprintspeed)) / 2)

        var rShooting = await axios.get(lhost + "/player/shooting/" + yyear + "/" + this.idPlayer)
        this.shooting = rShooting.data[0]
        this.shooting.res = (
          parseInt(rShooting.data[0].positioning) +
          parseInt(rShooting.data[0].finishing) +
          parseInt(rShooting.data[0].shotpower) +
          parseInt(rShooting.data[0].longshots) +
          parseInt(rShooting.data[0].volleys) +
          parseInt(rShooting.data[0].penalties)) / 6

        var rPassing = await axios.get(lhost + "/player/passing/" + yyear + "/" + this.idPlayer)
        this.passing = rPassing.data[0]
        this.passing.res = (
          parseInt(rPassing.data[0].vision) +
          parseInt(rPassing.data[0].crossing) +
          parseInt(rPassing.data[0].fkaccuracy) +
          parseInt(rPassing.data[0].shortpassing) +
          parseInt(rPassing.data[0].longpassing) +
          parseInt(rPassing.data[0].curve)) / 6

        var rDribbling = await axios.get(lhost + "/player/dribbling/" + yyear + "/" + this.idPlayer)
        this.dribbling = rDribbling.data[0]
        this.dribbling.res = (
          parseInt(rDribbling.data[0].agility) +
          parseInt(rDribbling.data[0].balance) +
          parseInt(rDribbling.data[0].reactions) +
          parseInt(rDribbling.data[0].ballcontrol) +
          parseInt(rDribbling.data[0].dribbling) +
          parseInt(rDribbling.data[0].composure)) / 6

        var rDefense = await axios.get(lhost + "/player/defense/" + yyear + "/" + this.idPlayer)
        this.defense = rDefense.data[0]
        this.defense.res = (
          parseInt(rDefense.data[0].interceptions) +
          parseInt(rDefense.data[0].headingaccuracy) +
          parseInt(rDefense.data[0].marking) +
          parseInt(rDefense.data[0].standingtackle) +
          parseInt(rDefense.data[0].slidingtackle)) / 5

        var rPhysical = await axios.get(lhost + "/player/physical/" + yyear + "/" + this.idPlayer)
        this.physical = rPhysical.data[0]
        this.physical.res = (
          parseInt(rPhysical.data[0].jumping) +
          parseInt(rPhysical.data[0].stamina) +
          parseInt(rPhysical.data[0].strength) +
          parseInt(rPhysical.data[0].aggression)) / 4


        var rPositions = await axios.get(lhost + "/player/position/" + yyear + "/" + this.idPlayer)
        this.position = rPositions.data[0]

        var rStatus = await axios.get(lhost + "/player/status/" + yyear + "/" + this.idPlayer)
        this.status = rStatus.data[0]


      } catch (error) {
        return error
      }

    },
    methods: {

      goBack: function () {
        this.$router.push('/club')
      },

      get: async function (yyear) {

        this.year = yyear
        try {
          var rPace = await axios.get(lhost + "/player/pace/" + yyear + "/" + this.idPlayer)
          this.pace = rPace.data[0]
          this.pace.res = ((parseInt(rPace.data[0].acceleration) + parseInt(rPace.data[0].sprintspeed)) / 2)

          var rShooting = await axios.get(lhost + "/player/shooting/" + yyear + "/" + this.idPlayer)
          this.shooting = rShooting.data[0]
          this.shooting.res = (
            parseInt(rShooting.data[0].positioning) +
            parseInt(rShooting.data[0].finishing) +
            parseInt(rShooting.data[0].shotpower) +
            parseInt(rShooting.data[0].longshots) +
            parseInt(rShooting.data[0].volleys) +
            parseInt(rShooting.data[0].penalties)) / 6

          var rPassing = await axios.get(lhost + "/player/passing/" + yyear + "/" + this.idPlayer)
          this.passing = rPassing.data[0]
          this.passing.res = (
            parseInt(rPassing.data[0].vision) +
            parseInt(rPassing.data[0].crossing) +
            parseInt(rPassing.data[0].fkaccuracy) +
            parseInt(rPassing.data[0].shortpassing) +
            parseInt(rPassing.data[0].longpassing) +
            parseInt(rPassing.data[0].curve)) / 6

          var rDribbling = await axios.get(lhost + "/player/dribbling/" + yyear + "/" + this.idPlayer)
          this.dribbling = rDribbling.data[0]
          this.dribbling.res = (
            parseInt(rDribbling.data[0].agility) +
            parseInt(rDribbling.data[0].balance) +
            parseInt(rDribbling.data[0].reactions) +
            parseInt(rDribbling.data[0].ballcontrol) +
            parseInt(rDribbling.data[0].dribbling) +
            parseInt(rDribbling.data[0].composure)) / 6

          var rDefense = await axios.get(lhost + "/player/defense/" + yyear + "/" + this.idPlayer)
          this.defense = rDefense.data[0]
          this.defense.res = (
            parseInt(rDefense.data[0].interceptions) +
            parseInt(rDefense.data[0].headingaccuracy) +
            parseInt(rDefense.data[0].marking) +
            parseInt(rDefense.data[0].standingtackle) +
            parseInt(rDefense.data[0].slidingtackle)) / 5

          var rPhysical = await axios.get(lhost + "/player/physical/" + yyear + "/" + this.idPlayer)
          this.physical = rPhysical.data[0]
          this.physical.res = (
            parseInt(rPhysical.data[0].jumping) +
            parseInt(rPhysical.data[0].stamina) +
            parseInt(rPhysical.data[0].strength) +
            parseInt(rPhysical.data[0].aggression)) / 4

          var rPositions = await axios.get(lhost + "/player/position/" + yyear + "/" + this.idPlayer)
          this.position = rPositions.data[0]

                  var rStatus = await axios.get(lhost + "/player/status/" + yyear + "/" + this.idPlayer)
        this.status = rStatus.data[0]

        } catch (error) {
          return error

        }
      },

      goPlayer: function () {
        this.$router.push('/')
      },
      goNationality: function () {
        this.$router.push('/nationality')
      },
      goContry: function (item) {
        this.$router.push('/nationality/' + item)
        // this.$router.go()
      },
      goClub: function (item) {
        this.$router.push('/club/' + item)
        // this.$router.go()
      },
      goClubs: function () {
        this.$router.push('/club')
      },

      swapShow: function (item) {
        this.show = !this.show
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
