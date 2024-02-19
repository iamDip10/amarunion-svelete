<script>

	import Vata from '../../userVata/vata.svelte';
	import NAVBAR from '../../UserDashboard/sidebar.svelte';
    export let data ;
</script>

<main class="bg-slate-100">
	<div class="grid grid-cols-12 gap-x-20">
		<NAVBAR />
		<Vata {data}/>
	</div>
</main>