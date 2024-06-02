<script>
	
	
	export let data;
	console.log(data.comps) ;
</script>

<div class="col-span-8 mt-9">
	<div class="flex justify-between w-full text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-2 rounded-xl shadow-2xl items-center">
		<div class="  w-full">
			<h1 class="text-sm">স্বাগতম,</h1>
			<h1 class="text-4xl font-bold  uppercase" >
				Dip Saha
			</h1>
		</div>

		<div class="flex w-full justify-end space-x-5 p-5">
			<div class="p-3 rounded-full bg-white shadow-inner">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 text-black"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
					/>
				</svg>
			</div>

			
		</div>
	</div>

	<div class="w-full h-[52rem] overflow-scroll">
		<div class="mt-20 flex space-x-5">
			
			<div class="w-1/3 h-[70vh] bg-white flex-col rounded-xl shadow-2xl">
				<div class="w-full text-xl px-5 py-5 font-bold">
					<h1>ভাতার আবেদনসমূহ</h1>
				</div>	
				<div class="w-full px-5 flex-col">

					{#each data.vatas as datas }
						<div class="w-full h-[13vh] flex-col mb-4 px-4 py-4 shadow-xl rounded-md">

						
							<h1 class="font-bold text-xl">{datas.user_id}</h1>
							<h1>{datas.type}</h1>
							<div class="w-1/5 h-[3vh] rounded-3xl mt-2 bg-green-400 flex justify-center items-center">{datas.status}</div>
						</div>
					{/each}
					
				</div>
			</div>
			<div class="w-1/3 h-[70vh] bg-white rounded-xl shadow-2xl">
				<div class="w-full text-xl px-5 py-5 font-bold">
					<h1>অভিযোগের আবেদনসমূহ</h1>
				</div>
				<div class="w-full px-5 flex-col">

					{#if data.comps}

					{#each data.comps as matas }
						<div class="w-full h-[13vh] flex-col mb-4 px-4 py-4 shadow-xl rounded-md">

						
							<h1 class="font-bold text-xl">{matas.user_id}</h1>
							<h1>{matas.types}</h1>
							<div class="w-1/5 h-[3vh] rounded-3xl mt-2 bg-green-400 flex justify-center items-center">{matas.status}</div>
						</div>
					{/each}

					{/if}
					
				</div>
			</div>
			<div class="w-1/3 h-[40vh] px-5 py-6 flex flex-col bg-white rounded-xl shadow-2xl">
				<h1>সরকার হতে প্রাপ্ত অর্থ</h1>
				<form method="post" class="w-full">
				<input name="value" class="w-full h-[10rem] rounded-xl flex justify-center items-center text-center font-bold text-3xl bg-gray-100" value="12400">
				
				<div class="w-full flex justify-end mt-6">
					
						<button class="w-full rounded-xl h-[4rem] bg-green-300">ডিস্ট্রিবিউট করে দিন</button>
					
				</div>
			</form>
					
			</div>
			
		</div>


		
	</div>
</div>
