<script>
	import Complaints from '../userComplaints/complaints.svelte';


	import Profilesidebar from '../../UserDashboard/profilesidebar.svelte';
	import NAVBAR from '../../UserDashboard/sidebar.svelte';
	

</script>

<main class="bg-slate-100">
	<div class="grid grid-cols-12 gap-x-20">
		<NAVBAR />
		<Complaints />
		<Profilesidebar />
	</div>
</main>