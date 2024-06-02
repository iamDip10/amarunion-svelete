<script>

	import VataDash from '../../../admincomplaints/comp.svelte';
	import NAVBAR from '../../../adminDash/sidebar.svelte';

	export let data ;

</script>

<main class="bg-slate-100 ">
	<div class="grid grid-cols-12 gap-x-20">
		<NAVBAR {data}/>
		<VataDash {data} />
	</div>
</main>