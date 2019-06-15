
const axios = require('axios');
const Fifa = module.exports;

normalize = function(response) {
    return response.results.bindings.map(obj =>
        Object.entries(obj)
            .reduce((new_obj, [k,v]) => (new_obj[k] = v.value, new_obj),
                    new Object()));
};

async function execQuery(q){
    try{
        var encoded = encodeURIComponent(q);
        response = await axios.get("http://localhost:7200/repositories/fifa19" + '?query=' + encoded);
        return(normalize(response.data));
    }
    catch(error) {
        return('ERRO: ' + error)
    }
}

Fifa.listPlayer = async () => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
        select ?id ?n ?p ?ph ?age ?nat ?t18 ?t19 where { 
            ?p a :Player .
            ?p :id ?id .
            ?p :name ?n .
            ?p :photo ?ph .
            ?p :age ?age .
        ?p :pn ?nata.
        ?nata :flag ?nat.
        
        OPTIONAL {
            ?p :ps ?s18.
            ?s18 :year 2018 .
            ?s18 :overall ?t18 .
        }
            OPTIONAL {
            ?p :ps ?s19 .
            ?s19 :year 2019 . 
            ?s19 :overall ?t19 .
        }

    }
    `;

    var res = await execQuery(query);
    return res;
};

Fifa.player = (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?n ?ph ?age ?natl ?natn ?natp ?t18 ?t19 where { 
        ?p a :Player .
        ?p :id "${id}" .
        ?p :name ?n .
        ?p :photo ?ph .
        ?p :age ?age .
    ?p :pn ?nata.

    ?nata :flag ?natp.
?nata :id ?natl.
?nata :name ?natn.
    
       OPTIONAL {
        ?p :ps ?s18.
        ?s18 :year 2018 .
        ?s18 :overall ?t18 .
    }
        OPTIONAL {
        ?p :ps ?s19 .
        ?s19 :year 2019 . 
        ?s19 :overall ?t19 .
    }
  

}`;

    return execQuery(query);
};


// Fifa.infoPlayer = (id) => {
//     const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
//     select * where { 
//         ?p a :Player .
//         ?p :id "${id}" .
//         ?p :jogouSeason ?s .
//     }`;

//     return execQuery(query);
// };

Fifa.listNationality = async () => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?nat ?f ?n (COUNT(?p) AS ?tp) where { 
  
      ?nat a :Nationality .   
      ?p a :Player .    
      ?p :pn ?nat.
       ?nat :name ?n . 
      ?nat :flag ?f .
      }
  GROUP BY ?nat ?f ?n`;

    var res = await execQuery(query);
    return res;
};


Fifa.nationality = async (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?id ?n ?p ?ph ?age ?t18 ?t19 where { 
        ?p a :Player .
        ?p :id ?id .
        ?p :name ?n .
        ?p :photo ?ph .
        ?p :age ?age .
    ?p :pn ?nata.
    ?nata :id "${id}".

    OPTIONAL {
    ?p :ps ?s18.
    ?s18 :year 2018 .
    ?s18 :overall ?t18 .
}
    OPTIONAL {
    ?p :ps ?s19 .
    ?s19 :year 2019 . 
    ?s19 :overall ?t19 .
}
}`;

    var res = await execQuery(query);
    return res;
};


Fifa.infoNationality = async (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?name ?f  where { 
        ?p a :Nationality .
        ?p :id "${id}".
        ?p :name ?name .
        ?p :flag ?f
}`;

    var res = await execQuery(query);
    return res;
};

Fifa.infoClub = async (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?name ?f  where { 
        ?c a :Club .
        ?c :id "${id}".
        ?c :name ?name .
        ?c :logo ?f
}`;

    var res = await execQuery(query);
    return res;
};


Fifa.listClub = async () => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?id ?n ?l (COUNT(?p18) AS ?t18) (COUNT(?p19) AS ?t19) where { 

    ?c a :Club .
    ?c :id ?id .
    ?c :logo ?l .
    ?c :name ?n .
    ?c :ct ?t .
   
    OPTIONAL {
    ?t :ts ?s18 .
    ?s18 :year 2018 .
    ?s18 :sp ?p18 .
    }


    OPTIONAL {
    ?t :ts ?s19 .
    ?s19 :year 2019 .
    ?s19 :sp ?p19 .
    }

    FILTER(?n != '0') .   


}
  GROUP BY ?id ?n ?l`;

    var res = await execQuery(query);
    return res;
};





Fifa.infoPlayerYear = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?x ?y where { 
        ?p a :Player  .
        ?p :id "${id}" .
        ?p :ps ?s .
        ?s :year ${ano} .
        ?s ?x ?y
    }`;

    return execQuery(query);
};





Fifa.clubYear = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?id ?ph ?age ?nat ?n ?pt where { 
           
        ?c a :Club .
        ?c :id "${id}" .
        ?c :ct ?t .
        
        ?t :ts ?s .
        ?s :year ${ano} .
        ?s :sp ?p .
        
        ?p :name ?n .
        ?p :id ?id.
        
        ?p :photo ?ph .
                ?p :age ?age .
            ?p :pn ?nata.
            ?nata :flag ?nat.
        

        ?p :ps ?s.
        ?s :year ${ano} .
        ?s :overall ?pt .
    

    }`

    return execQuery(query);
};


// -----------------------------------------------------------------------

Fifa.seasonStatus = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select *  where { 
        ?s a :PlayerSeason .
        ?s :year ${ano} .
    	?s :sp ?p .
        ?p :id "${id}" .
    
    ?s :value ?value .
    ?s :height ?height .
    ?s :international_reputation ?international_reputation .
    ?s :overall ?overall .
    ?s :preferred_foot ?preferred_foot .
    ?s :release_clause ?release_clause .
    ?s :skill_moves ?skill_moves .
    ?s :wage ?wage .
    ?s :weak_foot ?weak_foot .
    ?s :weight ?weight .
    ?s :wr_att ?wr_att .
    ?s :wr_def ?wr_def .
    
    	?s :st ?t.
    ?t :tc ?c .
    
    ?c :name ?cn.
    ?c :id ?cid.
    ?c :logo ?clogo .
   
}`

    return execQuery(query);
};

Fifa.seasonGK = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select *  where { 
        ?s a :PlayerSeason .
        ?s :year ${ano} .
    	?s :sp ?p .
        ?p :id "${id}".
    
        ?s :gkdiving ?gkdiving .
        ?s :gkhandling ?gkhandling .
        ?s :gkkicking ?gkkicking .
        ?s :gkpositioning ?gkpositioning .
        ?s :gkreflexes ?gkreflexes .
   
}`

    return execQuery(query);
};


Fifa.seasonPace = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select *  where { 
        ?s a :PlayerSeason .
        ?s :year ${ano} .
    	?s :sp ?p .
        ?p :id "${id}".
    
    ?s :acceleration ?acceleration .
	?s :sprintspeed ?sprintspeed .
   
}`

    return execQuery(query);
};

Fifa.seasonShooting = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select *  where { 
        ?s a :PlayerSeason .
        ?s :year ${ano} .
    	?s :sp ?p .
        ?p :id "${id}".
    
        ?s :positioning ?positioning .
        ?s :finishing ?finishing .
        ?s :shotpower ?shotpower .
        ?s :longshots ?longshots .
        ?s :volleys ?volleys .
        ?s :penalties ?penalties .
   
}`

    return execQuery(query);
};

Fifa.seasonPassing = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select *  where { 
        ?s a :PlayerSeason .
        ?s :year ${ano} .
    	?s :sp ?p .
        ?p :id "${id}".
    
        ?s :vision ?vision .
	?s :crossing ?crossing .
    ?s :fkaccuracy ?fkaccuracy .
    ?s :shortpassing ?shortpassing .
    ?s :longpassing ?longpassing .
    ?s :curve ?curve .
   
}`

    return execQuery(query);
};

Fifa.seasonDribbling = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select *  where { 
        ?s a :PlayerSeason .
        ?s :year ${ano} .
    	?s :sp ?p .
        ?p :id "${id}".
    
        ?s :agility ?agility .
	?s :balance ?balance .
    ?s :reactions ?reactions .
    ?s :ballcontrol ?ballcontrol .
    ?s :dribbling ?dribbling .
    ?s :composure ?composure .
   
}`

    return execQuery(query);
};

Fifa.seasonDefense = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select *  where { 
        ?s a :PlayerSeason .
        ?s :year ${ano} .
    	?s :sp ?p .
        ?p :id "${id}".
    
        ?s :interceptions ?interceptions .
	?s :headingaccuracy ?headingaccuracy .
    ?s :marking ?marking .
    ?s :standingtackle ?standingtackle .
    ?s :slidingtackle ?slidingtackle .
   
}`

    return execQuery(query);
};

Fifa.seasonPhysical = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select *  where { 
        ?s a :PlayerSeason .
        ?s :year ${ano} .
    	?s :sp ?p .
        ?p :id "${id}".
    
        ?s :jumping ?jumping .
	?s :stamina ?stamina .
    ?s :strength ?strength .
    ?s :aggression ?aggression .
   
}`

    return execQuery(query);
};



Fifa.seasonPosition = (id, ano) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select *  where { 
        ?s a :PlayerSeason .
        ?s :year ${ano} .
    	?s :sp ?p .
        ?p :id "${id}".
    
    ?s :lw ?lw .
    ?s :st ?st . 
    ?s :rw ?rw .
    ?s :lf ?lf .
    ?s :cf ?cf .
    ?s :rf ?rf .
    ?s :cam ?cam .
    ?s :lm ?lm .
    ?s :cm ?cm .
    ?s :rm ?rm .
    ?s :cdm ?cdm .
    ?s :lwb ?lwb .
    ?s :rwb ?rwb .
    ?s :lb ?lb .
    ?s :cb ?cb .
    ?s :rb ?rb .
    ?s :gk ?gk .
    
    FILTER(?st)

}`

    return execQuery(query);
};



