(this["webpackJsonpevaluacion-intermedia-modulo-3"]=this["webpackJsonpevaluacion-intermedia-modulo-3"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["grass","poison"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["grass","poison"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["grass","poison"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["fire","flying"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(2),r=n.n(o),i=(n(13),n(3)),p=n(4),m=n(7),u=n(6),c=(n(14),function(e){var t=e.types.map((function(e){return s.a.createElement("li",{className:"poke-type",key:e},e)}));return s.a.createElement("div",{className:"pokemon-card ".concat(e.types[0])},s.a.createElement("h3",{className:"poke-name"},e.name),s.a.createElement("span",{className:"poke-id"},e.id),s.a.createElement("div",{className:"pokemon-body"},s.a.createElement("ul",{className:"pokemon-types"},t),s.a.createElement("div",{className:"pokemon-img-container"},s.a.createElement("img",{className:"pokemon-img",src:e.picURL,alt:"Pokemon name"}))))}),l=(n(15),function(e){var t=e.pokeData.map((function(e){return s.a.createElement(c,{key:e.id,id:e.id,name:e.name,types:e.types,picURL:e.url})}));return s.a.createElement("div",{className:"pokelist"},t)}),k=n(5),d=(n(16),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={pokemons:k},e}return Object(p.a)(n,[{key:"render",value:function(){return console.log(this.state.pokemons),s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"My Pokedex"),s.a.createElement(l,{pokeData:this.state.pokemons}))}}]),n}(a.Component));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.15d592f9.chunk.js.map