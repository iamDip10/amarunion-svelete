<script>
	import Chart from './chart.svelte';
	
	export let data;
	const proPic = "/src/img/".concat(data.user.prof_pic);
	console.log(data.user.vataboi)
</script>

<div class="col-span-7 mt-9">
	<div class="flex justify-between w-full text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-2 rounded-xl shadow-2xl items-center">
		<div class="  w-full">
			<h1 class="text-sm">স্বাগতম,</h1>
			<h1 class="text-4xl font-bold  uppercase" >
				{data.user.name}
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

			<button class=" rounded-full">
				<img src={proPic} alt="" class="aspect-square object-cover w-11 rounded-full" />
			</button>
		</div>
	</div>

	<div class="w-full h-[52rem] overflow-scroll">
		<div class="mt-20 flex space-x-5">
			<div class="bg-white p-3 w-1/2 rounded-xl shadow-xl">
				<h1 class="text-xs">প্রোফাইল স্ট্যাটাস</h1>

				<div class="mt-2">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6 text-lime-500"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clip-rule="evenodd"
							/>
						</svg>
						{#if data.user.pass_strength == "strong"}
						<h1 class="ml-2">আপনার পাসওয়ার্ড শক্তিশালী</h1>
						{:else if data.user.pass_strength == "medium"}
						<h1 class="ml-2">আপনার পাসওয়ার্ড মধ্যমানের</h1>
						{:else if data.user.pass_strength == "weak"}
						<h1 class="ml-2">আপনার পাসওয়ার্ড দুর্বল</h1>
						{/if} 

					</div>
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6 text-lime-500"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clip-rule="evenodd"
							/>
						</svg>
						{#if data.user.prof_pic == null}
						<h1 class="ml-2">আপনার প্রোফাইল পিকচার আপলোড করুন</h1>
						{:else}
						<h1 class="ml-2">আপনার প্রোফাইল পিকচার আপলোড হয়েছে</h1>
						{/if} 

					</div>


					
				</div>
			</div>

			<div class="bg-white p-3 w-1/2 h-32 rounded-xl shadow-xl ">
				<h1 class="text-xs">আপনার ভাতাসমূহ</h1>

				<div class="mt-2">
					{#each data.user.vataboi as boi} 
					{#if boi.type === 'fighter'}
						
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6 text-lime-500"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clip-rule="evenodd"
							/>
						</svg>

						
						<h1 class="ml-2">মুক্তিযোদ্ধা ভাতা</h1>
					</div>
					
					{:else if boi.type === 'auti'}
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6 text-lime-500"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clip-rule="evenodd"
							/>
						</svg>

						
						<h1 class="ml-2">প্রতিবন্ধী ভাতা</h1>
					</div>
					{/if}
					{/each}

					
				</div>
			</div>
		</div>


		<div class="mt-8 flex space-x-5 h-1/2">
			<div class="bg-white p-5 w-1/4 rounded-xl shadow-xl">
				<h1 class="text-sm">পরিষদ নোটিস এবং নিউজসমূহ</h1>

				<div class="h-full overflow-scroll">
					<ol class="mt-10">
						<li class="border-b mb-5">
							<a href="" class="  ">
								<h1 class="text-orange-500">নিউজ</h1>
								<h1 class="text-md font-bold text-orange-500">
									বাতাবী লেবুর বাম্পার ফলন । খুশি কৃষকেরা
								</h1>
								<h1 class="text-sm">ডিসেম্বর ১, ২০২৩</h1>
							</a>
						</li>

						
					</ol>
				</div>
			</div>

			<div class="bg-white p-5 w-full rounded-xl shadow-xl">
				<h1 class="text-xs">সাময়িক পেন্ডিং কাজসমূহ</h1>

				<div class="h-full overflow-scroll">
					<ol class="mt-10">
						<li class="border-b mb-5 flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 text-yellow-500"
							>
								<path
									d="M6 3a3 3 0 00-3 3v1.5a.75.75 0 001.5 0V6A1.5 1.5 0 016 4.5h1.5a.75.75 0 000-1.5H6zM16.5 3a.75.75 0 000 1.5H18A1.5 1.5 0 0119.5 6v1.5a.75.75 0 001.5 0V6a3 3 0 00-3-3h-1.5zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM4.5 16.5a.75.75 0 00-1.5 0V18a3 3 0 003 3h1.5a.75.75 0 000-1.5H6A1.5 1.5 0 014.5 18v-1.5zM21 16.5a.75.75 0 00-1.5 0V18a1.5 1.5 0 01-1.5 1.5h-1.5a.75.75 0 000 1.5H18a3 3 0 003-3v-1.5z"
								/>
							</svg>

							<div>
								<h1 class="text-xl ml-2">র‍্যাশনের জন্য আবেদন</h1>
								<h1 class="ml-2 text-xs mb-2">কাজ চলছে</h1>
							</div>
						</li>
						

						
					</ol>
				</div>
			</div>
		</div>
	</div>
</div>
