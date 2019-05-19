
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
        response = await axios.get("http://localhost:7200/repositories/teste" + '?query=' + encoded);
        return(normalize(response.data));
    }
    catch(error) {
        return('ERRO: ' + error)
    }
}

Fifa.listPlayer = async () => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?id ?n ?p ?ph ?age where { 
        ?p a :Player .
        ?p :id ?id .
        ?p :name ?n .
        ?p :photo ?ph .
        ?p :age ?age .
    }`;

    var res = await execQuery(query);
    return res;
};

Fifa.infoPlayer = (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?x ?y where { 
        ?p a :Player  .
        ?p :id "${id}" .
        ?p :jogouSeason ?s .
        ?s ?x ?y
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














Fifa.infoPlayerYear = (id, ano) => {
    console.log(ano)
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?x ?y where { 
        ?p a :Player  .
        ?p :id "${id}" .
        ?p :jogouSeason ?s .
        ?s :year ${ano} .
        ?s ?x ?y
    }`;

    return execQuery(query);
};







Fifa.filmeAnos = (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?ano where { 
        :${id} :ano ?ano.   
    }`;

    return execQuery(query);
};

Fifa.filmeAtores = (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?a ?nomeAtor where { 
        :${id} :temAtor ?a.   
        ?a :nome ?nomeAtor.
    }`;

    return execQuery(query);
};

Fifa.filmeGeneros = (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?g where { 
        :${id} :temGénero ?g.   
    }`;

    return execQuery(query);
};
 
Fifa.listarAtores = () => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?s ?nome where { 
        ?s a :Pessoa .
        ?s :atuou ?f.
        ?s :nome ?nome. 
    } 
    order by ?nome`;

    return execQuery(query);
};

Fifa.infoAtor = (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?nome where { 
        :${id} :nome ?nome.   
    }`;

    return execQuery(query);
};

Fifa.atorFilmes = (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?f ?ftit where { 
        :${id} :atuou ?f.   
        ?f :título ?ftit.
    }`;

    return execQuery(query);
};

Fifa.listarGeneros = () => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?s where { 
        ?s a :Género .
    } 
    order by ?s`;

    return execQuery(query);
};

Fifa.generoFilmes = (id) => {
    const query = `PREFIX : <http://www.semanticweb.org/z/ontologies/2019/4/fifa19#>
    select ?f ?ftit where { 
        :${id} :éGéneroDe ?f.   
        ?f :título ?ftit.
    }`;

    return execQuery(query);
};
