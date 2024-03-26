<script>
    import NAVBAR from '../../../UserDashboard/sidebar.svelte';
    import ComplaintDash from '../../../userComplaints/complaintsDash.svelte';
    export let data;
</script>

<main class="bg-slate-100">
	<div class="grid grid-cols-12 gap-x-20">
		<NAVBAR {data}/>
		<ComplaintDash {data}/>
        
	</div>
</main>