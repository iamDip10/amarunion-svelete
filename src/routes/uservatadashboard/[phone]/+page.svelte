<script>

	import VataDash from '../../../userVata/vataDash.svelte';
	import NAVBAR from '../../../UserDashboard/sidebar.svelte';
    export let data ;

	console.log(data.vataS.status) ;
</script>

<main class="bg-slate-100">
	<div class="grid grid-cols-12 gap-x-20">
		<NAVBAR {data}/>
		<VataDash {data}/>
	</div>
</main>