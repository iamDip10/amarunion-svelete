<script>
	
	import Body from '../../../adminDash/body.svelte';
	import NAVBAR from '../../../adminDash/sidebar.svelte';
	
	export let data;

</script>

<main class="bg-slate-100">
	<div class="grid grid-cols-12 gap-x-20">
		<NAVBAR {data}/>
		<Body {data}/>
	</div>
</main>
