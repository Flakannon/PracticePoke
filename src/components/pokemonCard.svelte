<script>
    export let mon;
</script>


<a class= "p-6 bg-gray-300 text-gray-800 text-center rounded-md
shadow-sm hover:shadow-md hover:bg-slate-600 hover:text-white flex flex-col items-center" href={`/pokemon/${mon.id}`}> 
    <img class=" h-40 w-40" src={mon.image} alt={mon.name}>
    <h3 class="text-1xl text-gray-400 shadow-transparent">#{ mon.id.toString().padStart(4, "0") }</h3>
    <h2 class=" capitalize text-2x"> {mon.name} </h2>
</a>
