<script>
	import Body from '../../../UserDashboard/body.svelte';
	import Profilesidebar from '../../../UserDashboard/profilesidebar.svelte';
	import NAVBAR from '../../../UserDashboard/sidebar.svelte';
	
	export let data;
</script>

<main class="bg-slate-100">
	<div class="grid grid-cols-12 gap-x-20">
		<NAVBAR />
		<Body {data}/>
		<Profilesidebar {data} />
	</div>
</main>
