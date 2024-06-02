<script>
	//import darain from '../img/darain.jpg';
	
	export let data;

	function dekhao() {
		console.log("dekhalam") ;
	}

</script>

<div class="col-span-9 mt-9 mb-10">
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

	<div class="w-full h-[52rem] overscroll-none">
		

		<div class="mt-8 bg-white w-full h-[76vh] flex flex-col rounded-xl shadow-2xl ">

            {#each data.comps as comp }
            <div class=" w-full px-5 py-2 flex flex-col mb-4">
                <div class="w-full flex items-center px-4 py-4 h-[12vh] rounded-xl shadow-xl">
                    <h1 class="font-bold text-xl w-1/3">{comp.complaintId}</h1>
                    <div class="w-1/3 h-10 bg-green-400 rounded-xl flex justify-center items-center"><h1>{comp.status}</h1></div>
                    <div class="w-1/3 h-10 flex justify-center items-center">

						<button class=" w-1/2 h-10 rounded-xl bg-gray-100" on:click={dekhao}>বিস্তারিত দেখুন</button>
					</div>
                </div>
                <div class="w-full ">

                </div>
            </div>
            {/each}
			
        </div>
        
	</div>

    

	
</div>

