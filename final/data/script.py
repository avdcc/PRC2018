
import csv
import pandas as pd
import unidecode
import numpy as np

# ------------------------------------------------------------

def cleaner(word):

  word = unidecode.unidecode(word)
  word = word.replace("/", " ")
  word = word.replace(" ", "_")
  word = word.replace("&", "and")
  word = word.replace(".", "")
  word = word.replace("'", "")
  word = word.replace("(", "")
  word = word.replace(")", "")
  word = word.replace(";", "")

  return(word)

def soma(x):
  x = x.split('+')
  return(int(x[0]) + int(x[1]))
  
def aux(x):
  # return(x)
  if x == '0' or x != x: 
    return(0)

  tens = {'K': 10e3, 'M': 10e6, 'B': 10e9}
  f = lambda x: int(float(x[:-1])*tens[x[-1]])

  aux = f(x)

  return(round(aux/10))


def pounds2Kilo(p):
  kilograms = p / 2.2
  return (int(round(kilograms)))

def feet2metro(a):

  if a != 0:
    a = str(a)
    height = a.split("'")
    feet = int(height[0])
    inches = int(height[1])


    tot_inches = feet*12 + inches
    meters = tot_inches * 0.0254 * 100

    return(round(meters))

  return 0


# ------------------------------------------------------------

def cleanCSV2019():

  csv19 = pd.read_csv('2019.csv', delimiter=',')

  csv19.columns = csv19.columns.str.replace(' ','_')
  csv19.columns = map(str.lower, csv19.columns)

  lista = ["ls","st","rs","lw","lf","cf","rf","rw","lam","cam","ram","lm","lcm","cm","rcm","rm","lwb","ldm","cdm","rdm","rwb","lb","lcb","cb","rcb","rb"]
  for x in lista:
    csv19[x] = (np.where(csv19[x]!=csv19[x], "0+0", csv19[x]))
    csv19[x] = csv19[x].apply(soma)

  csv19 = csv19.fillna(0)

  lista = ["age","overall","potential","special","international_reputation","weak_foot","skill_moves","ls","st","rs","lw","lf","cf","rf","rw","lam","cam","ram","lm","lcm","cm","rcm","rm","lwb","ldm","cdm","rdm","rwb","lb","lcb","cb","rcb","rb","crossing","finishing","headingaccuracy","shortpassing","volleys","dribbling","curve","fkaccuracy","longpassing","ballcontrol","acceleration","sprintspeed","agility","reactions","balance","shotpower","jumping","stamina","strength","longshots","aggression","interceptions","positioning","vision","penalties","composure","marking","standingtackle","slidingtackle","gkdiving","gkhandling","gkkicking","gkpositioning","gkreflexes"]
  for x in lista:
    csv19[x] = (np.where(csv19[x]!=csv19[x], 0, csv19[x])).astype(int)

  lista = ["value","wage","release_clause"]
  for x in lista:
    csv19[x] = csv19[x].str.replace("€", "")
    csv19[x] = csv19[x].apply(aux)
    # csv19[x] = csv19[x].apply(aux)

  
  csv19['weight'] = csv19['weight'].str.replace("lbs", "")
  csv19['wr_att'] , csv19['wr_def'] = csv19['work_rate'].str.split('/ ')[0]
  csv19 = csv19.drop(columns=['work_rate'])

  csv19 = csv19.fillna(0)

  lista = ["height"]
  for x in lista:
    # print(csv19[x])
    csv19[x] = csv19[x].apply(feet2metro)

  lista = ["weight"]
  for x in lista:
    csv19[x] = csv19[x].astype(int)
    csv19[x] = csv19[x].apply(pounds2Kilo)

  csv19 = csv19.drop(columns=['contract_valid_until', 'jersey_number', 'joined','loaned_from', 'position', 'unnamed:_0'])
  csv19.to_csv("2019Mod.csv", sep=',')

def cleanCSV2018():

  csv18 = pd.read_csv('2018.csv', delimiter=',')
  csv18 = csv18.fillna(0)

  csv18.columns = csv18.columns.str.replace(' ','_')
  csv18.columns = map(str.lower, csv18.columns)

  csv18.drop(["1_on_1_rush_trait","acrobatic_clearance_trait","argues_with_officials_trait","avoids_using_weaker_foot_trait","backs_into_player_trait","bicycle_kicks_trait","cautious_with_crosses_trait","chip_shot_trait","chipped_penalty_trait","comes_for_crosses_trait","corner_specialist_trait","diver_trait","dives_into_tackles_trait","diving_header_trait","driven_pass_trait","early_crosser_trait","fan's_favourite_trait","fancy_flicks_trait","finesse_shot_trait","flair_trait","flair_passes_trait","gk_flat_kick_trait","gk_long_throw_trait","gk_up_for_corners_trait","giant_throw_in_trait","inflexible_trait","injury_free_trait","injury_prone_trait","leadership_trait","long_passer_trait","long_shot_taker_trait","long_throw_in_trait","one_club_player_trait","outside_foot_shot_trait","playmaker_trait","power_free_kick_trait","power_header_trait","puncher_trait","rushes_out_of_goal_trait","saves_with_feet_trait","second_wind_trait","selfish_trait","skilled_dribbling_trait","stutter_penalty_trait","swerve_pass_trait","takes_finesse_free_kicks_trait","target_forward_trait","team_player_trait","technical_dribbler_trait","tries_to_beat_defensive_line_trait","poacher_speciality","speedster_speciality","aerial_threat_speciality","dribbler_speciality","playmaker_speciality","engine_speciality","distance_shooter_speciality","crosser_speciality","free_kick_specialist_speciality","tackling_speciality","tactician_speciality","acrobat_speciality","strength_speciality","clinical_finisher_speciality","prefers_rs","prefers_rw","prefers_rf","prefers_ram","prefers_rcm","prefers_rm","prefers_rdm","prefers_rcb","prefers_rb","prefers_rwb","prefers_st","prefers_lw","prefers_cf","prefers_cam","prefers_cm","prefers_lm","prefers_cdm","prefers_cb","prefers_lb","prefers_lwb","prefers_ls","prefers_lf","prefers_lam","prefers_lcm","prefers_ldm","prefers_lcb","prefers_gk"],axis=1, inplace=True)
  csv18 = csv18.drop(columns=['birth_date','full_name','league'])

  csv19 = pd.read_csv('2019Mod.csv', delimiter=',')

  # csv19.rename(index=str, inplace=True, columns={ "id":"id","name":"name","full_name":"full_name","club":"club","club_logo":"club_logo",
  # "special":"special","age":"age","league":"league","birth_date":"birth_date","height_cm":"height_cm","weight_kg":"weight_kg",
  # "body_type":"body_type","real_face":"real_face","flag":"flag","nationality":"nationality","photo":"photo","eur_value":"eur_value",
  # "eur_wage":"eur_wage","eur_release_clause":"eur_release_clause","overall":"overall","potential":"potential","pac":"pac","sho":"sho",
  # "pas":"pas","dri":"dri","def":"def","phy":"phy","international_reputation":"international_reputation","skill_moves":"skill_moves",
  # "weak_foot":"weak_foot","work_rate_att":"work_rate_att","work_rate_def":"work_rate_def","preferred_foot":"preferred_foot",
  # "crossing":"crossing","finishing":"finishing","heading_accuracy":"heading_accuracy","short_passing":"short_passing","volleys":"volleys",
  # "dribbling":"dribbling","curve":"curve","free_kick_accuracy":"free_kick_accuracy","long_passing":"long_passing","ball_control":"ball_control",
  # "acceleration":"acceleration","sprint_speed":"sprint_speed","agility":"agility","reactions":"reactions","balance":"balance","shot_power":"shot_power",
  # "jumping":"jumping","stamina":"stamina","strength":"strength","long_shots":"long_shots","aggression":"aggression","interceptions":"interceptions",
  # "positioning":"positioning","vision":"vision","penalties":"penalties","composure":"composure","marking":"marking","standing_tackle":"standing_tackle",
  # "sliding_tackle":"sliding_tackle","gk_diving":"gk_diving","gk_handling":"gk_handling","gk_kicking":"gk_kicking","gk_positioning":"gk_positioning",
  # "gk_reflexes":"gk_reflexes","rs":"rs","rw":"rw","rf":"rf","ram":"ram","rcm":"rcm","rm":"rm","rdm":"rdm","rcb":"rcb","rb":"rb","rwb":"rwb",
  # "st":"st","lw":"lw","cf":"cf","cam":"cam","cm":"cm","lm":"lm","cdm":"cdm","cb":"cb","lb":"lb","lwb":"lwb","ls":"ls","lf":"lf","lam":"lam",
  # "lcm":"lcm","ldm":"ldm","lcb":"lcb","gk":"gk" })

  csv18.rename(columns={'ball_control':'ballcontrol','def':'def','dri':'dri','eur_release_clause':'release_clause',
  'eur_value':'value',"eur_wage":"wage",'free_kick_accuracy':'fkaccuracy','full_name':'full_name','gk':'gk','gk_diving':'gkdiving',
  'gk_handling':'gkhandling','gk_kicking':'gkkicking','gk_positioning':'gkpositioning','gk_reflexes':'gkreflexes',
  'heading_accuracy':'headingaccuracy','height_cm':'height','league':'league','long_passing':'longpassing','long_shots':'longshots',
  'pac':'pac','pas':'pas','phy':'phy','sho':'sho','short_passing':'shortpassing','shot_power':'shotpower','sliding_tackle':'slidingtackle',
  'sprint_speed':'sprintspeed','standing_tackle':'standingtackle','weight_kg':'weight','work_rate_att':'wr_att',
  'work_rate_def':'wr_def'}, inplace=True)

  # print(csv19.columns.difference(csv18.columns))
  # print(csv18.columns.difference(csv19.columns))

  lista = ["height","weight","gk","ls","st","rs","lw","lf","cf","rf","rw","lam","cam","ram","lm","lcm","cm","rcm","rm","lwb","ldm","cdm","rdm","rwb","lb","lcb","cb","rcb","rb"]
  for x in lista:
    csv18[x] = csv18[x].astype(int)

  lista = ["wage","release_clause","value"]
  for x in lista:
    csv18[x] = csv18[x].astype(int)
    csv18[x] = csv18[x].apply(round)

  csv18 = csv18.drop(columns=['def', 'dri', 'gk', 'pac', 'pas', 'phy', 'sho'])
  csv18.to_csv("2018Mod.csv", sep=',')

def cleanCSV2017():

  csv17 = pd.read_csv('17/FullData.csv', delimiter=',')
  csv17 = csv17.fillna(0)

  csv17.columns = csv17.columns.str.replace(' ','_')
  csv17.columns = map(str.lower, csv17.columns)

  csvNomes = pd.read_csv('17/PlayerNames.csv', delimiter=',')
  csv17 = csv17.merge(csvNomes, left_on='name', right_on='Name')
  # print(csv17['url'].isnull().values.any())
  
  csv17 = csv17.drop(columns=['Name'])

  csv19 = pd.read_csv('2019Mod.csv', delimiter=',')

  csv17.rename(columns={'attacking_position':'attacking_position', 'ball_control':'ballcontrol', 'birth_date':'birthdate', 'club_joining':'joined',
  'club_kit':'club_kit', 'club_position':'club_position', 'contract_expiry':'contract_expiry', 'freekick_accuracy':'fkaccuracy',
  'gk_diving':'gkdiving', 'gk_handling':'gkhandling', 'gk_kicking':'gkkicking', 'gk_positioning':'gkpositioning',
  'gk_reflexes':'gkreflexes', 'heading':'heading', 'long_pass':'longpassing', 'long_shots':'longshots', 'national_kit':'national_kit',
  'national_position':'national_position', 'preffered_foot':'preferred_foot', 'preffered_position':'prefferedposition', 'rating':'rating',
  'short_pass':'shortpass', 'shot_power':'shotpower', 'sliding_tackle':'slidingtackle', 'speed':'spd',
  'standing_tackle':'standingtackle', 'url':'id'}, inplace=True)

  # print(csv19.columns.difference(csv17.columns))
  # print(csv17.columns.difference(csv19.columns))

  csv17.to_csv("2017Mod.csv", sep=',')

# ------------------------------------------------------------

def getDataPropreties():

  csv19 = pd.read_csv('2019Mod.csv', delimiter=',')
  lista = csv19.columns#.remove('Index')

  # lista = ["ID","Name","Age","Photo","Nationality","Flag","Overall","Potential","Club","Club Logo","Value","Wage","Special","Preferred Foot","International Reputation","Weak Foot","Skill Moves","Work Rate","Body Type","Real Face","Position","Jersey Number","Joined","Loaned From","Contract Valid Until","Height","Weight","LS","ST","RS","LW","LF","CF","RF","RW","LAM","CAM","RAM","LM","LCM","CM","RCM","RM","LWB","LDM","CDM","RDM","RWB","LB","LCB","CB","RCB","RB","Crossing","Finishing","HeadingAccuracy","ShortPassing","Volleys","Dribbling","Curve","FKAccuracy","LongPassing","BallControl","Acceleration","SprintSpeed","Agility","Reactions","Balance","ShotPower","Jumping","Stamina","Strength","LongShots","Aggression","Interceptions","Positioning","Vision","Penalties","Composure","Marking","StandingTackle","SlidingTackle","GKDiving","GKHandling","GKKicking","GKPositioning","GKReflexes","Release Clause"]
  for i in csv19.columns:

    i = i.lower()
    i = cleaner(i)

    print("###  http://www.semanticweb.org/z/ontologies/2019/4/fifa19#" + i)
    print(":" + i + " rdf:type owl:DatatypeProperty .")
    print("\n")


def getPlayers():

  csv19 = pd.read_csv('2019Mod.csv', delimiter=',')
  csv18 = pd.read_csv('2018Mod.csv', delimiter=',')

  # print(csv18.size)
  csv18 = csv18[~csv18['id'].isin(csv19['id'])]
  csv18['age'] = csv18['age'] + 1
  # print(csv18.size)

  csv = pd.concat([csv18,csv19], sort=False)
  lista = ["name","id","age","photo"]

  for index, row in csv.iterrows():

    print("###  http://www.semanticweb.org/z/ontologies/2019/4/fifa19#p" + str(row["id"]))
    print(":p" + str(row["id"]) + " rdf:type owl:NamedIndividual ,")
    print(":Player ;")

    print(":pn :n" + cleaner(row["nationality"]) + " ;")

    print(":name \"" + row["name"] + "\" ;")
    print(":id \"p" + str(row["id"]) + "\" ;")
    print(":age \"" + str(row["age"]) + "\" ;")
    print(":photo \"" + row["photo"] + "\" .\n")


def getSeason():

  csv19 = pd.read_csv('2019Mod.csv', delimiter=',')
  csv18 = pd.read_csv('2018Mod.csv', delimiter=',')

  lista = ["special","height","weight","body_type","real_face","value","wage","release_clause","overall","potential","international_reputation","skill_moves","weak_foot","wr_att","wr_def","preferred_foot","crossing","finishing","headingaccuracy","shortpassing","volleys","dribbling","curve","fkaccuracy","longpassing","ballcontrol","acceleration","sprintspeed","agility","reactions","balance","shotpower","jumping","stamina","strength","longshots","aggression","interceptions","positioning","vision","penalties","composure","marking","standingtackle","slidingtackle","gkdiving","gkhandling","gkkicking","gkpositioning","gkreflexes","rs","rw","rf","ram","rcm","rm","rdm","rcb","rb","rwb","st","lw","cf","cam","cm","lm","cdm","cb","lb","lwb","ls","lf","lam","lcm","ldm","lcb"]

  for index, row in csv19.iterrows():

    print("###  http://www.semanticweb.org/z/ontologies/2019/4/fifa19#s" + str(row["id"]) + "_2019")
    print(":s" + str(row["id"]) + "_" + "2019" + " rdf:type owl:NamedIndividual ,")
    print(":PlayerSeason ;")
    print(":year 2019 ;")
    print(":sp :p" + str(row["id"]) + " ;")
    print(":st :t" + cleaner(str(row["club"])) + "_2019 ;")

    print(":gk \"" + str(round(sum([
      int(row["gkdiving"]), 
      int(row["gkhandling"]), 
      int(row["gkkicking"]), 
      int(row["gkpositioning"]), 
      int(row["gkreflexes"])
      ])/5))  + "\" ;")






    for i in lista:
      orig = i

      i = i.lower()
      i = i.replace(" ", "_")

      print(":" + i + " \"" + str(row[orig]) + "\" ;")

    print(":overall \"" + str(row["overall"]) + "\" .\n")


  for index, row in csv18.iterrows():

    print("###  http://www.semanticweb.org/z/ontologies/2019/4/fifa19#s" + str(row["id"]) + "_2018")
    print(":s" + str(row["id"]) + "_" + "2018" + " rdf:type owl:NamedIndividual ,")
    print(":PlayerSeason ;")
    print(":year 2018 ;")
    print(":sp :p" + str(row["id"]) + " ;")
    print(":st :t" + cleaner(str(row["club"])) + "_2018 ;")

    print(":gk \"" + str(round(sum([
      int(row["gkdiving"]), 
      int(row["gkhandling"]), 
      int(row["gkkicking"]), 
      int(row["gkpositioning"]), 
      int(row["gkreflexes"])
      ])/5))  + "\" ;")

    for i in lista:
      orig = i

      i = i.lower()
      i = i.replace(" ", "_")

      print(":" + i + " \"" + str(row[orig]) + "\" ;")

    print(":overall \"" + str(row["overall"]) + "\" .\n")


def getNationality():
    
  csv19 = pd.read_csv('2019Mod.csv', delimiter=',')

  s = set()

  for index, row in csv19.iterrows():
    s.add(row["nationality"] + "---" + row["flag"])
    
  for aux in s:

    aux = aux.split("---")
    i = aux[0]

    orig = i
    i = cleaner(i)

    print("###  http://www.semanticweb.org/z/ontologies/2019/4/fifa19#n" + i)
    print(":n" + i + " rdf:type owl:NamedIndividual ,")
    print(":Nationality ;")
    print(":id \"n" + i + "\" ;")
    print(":flag \"" + aux[1] + "\" ;")
    print(":name \"" + orig + "\" .\n")

def getClub():

  csv19 = pd.read_csv('2019Mod.csv', delimiter=',')

  s = {'FC Barcelona'}

  for index, row in csv19.iterrows():
      s.add((row["club"],row["club_logo"]))

  s = {x for x in s if x==x} #REMOVE nan

  for aux in s:

    i = aux[0]

    orig = i
    i = cleaner(i)

    print("###  http://www.semanticweb.org/z/ontologies/2019/4/fifa19#c" + i)
    print(":c" + i + " rdf:type owl:NamedIndividual ,")
    print(":Club ;")
    print(":id \"c" + i + "\" ;")
    print(":logo \"" + aux[1] + "\" ;")
    print(":name \"" + orig + "\" .\n")

def getTeam():


  csv19 = pd.read_csv('2019Mod.csv', delimiter=',')

  s = {'FC Barcelona'}

  for index, row in csv19.iterrows():
      s.add(row["club"])

  s = {x for x in s if x==x} #REMOVE nan

  for i in s:


    i = cleaner(i)
    aux = i
    i += "_2019"

    print("###  http://www.semanticweb.org/z/ontologies/2019/4/fifa19#t" + i)
    print(":t" + i + " rdf:type owl:NamedIndividual ,")
    print(":Team ;")
    print(":id \"t" + i + "\" ;")
    print(":tc :c" + aux + ";")
    print(":year 2019 .\n")

  csv18 = pd.read_csv('2018Mod.csv', delimiter=',')

  s = {'FC Barcelona'}

  for index, row in csv18.iterrows():
      s.add(row["club"])

  s = {x for x in s if x==x} #REMOVE nan

  for i in s:


    i = cleaner(i)
    aux = i
    i += "_2018"

    print("###  http://www.semanticweb.org/z/ontologies/2019/4/fifa19#t" + i)
    print(":t" + i + " rdf:type owl:NamedIndividual ,")
    print(":Team ;")
    print(":id \"t" + i + "\" ;")
    print(":tc :c" + aux + ";")
    print(":year 2018 .\n")


cleanCSV2019()
cleanCSV2018()

getDataPropreties()
getPlayers()
getSeason()

getClub()
getNationality()
getTeam()