<script>
	//import darain from '../img/darain.jpg';
	
	export let data;
	const picc = '/src/img/'.concat(data.user.prof_pic) ;
    console.log(data.vataS.status) ;

</script>

<div class="col-span-9 mt-9 mb-10">
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
				<img src={picc} alt="" class="aspect-square object-cover w-11 rounded-full" />
			</button>
		</div>
	</div>

	<div class="w-full h-[52rem] overscroll-none">
		

		<div class="mt-8 bg-white w-full h-26 flex flex-row rounded-xl shadow-xl justify-center items-center">
			<div class="p-5 w-1/2 h-full flex flex-col">
				<h1 class="text-xs">আবেদন প্যানেল </h1>

				<h1 class="text-3xl font-bold">ভাতার জন্য আবেদন করুন</h1>
			</div>
            <div class="p-5 w-1/2 h-full flex flex-col justify-center items-end mr-10">
				<a class="w-1/2 h-12 bg-gray-100 rounded-2xl shadow-xl hover:shadow-lg text-center flex justify-center items-center text-lg" href="/uservataform/{data.user.number}">ক্লিক করুন</a>
			</div>

		</div>
        {#if data.vataS[0] != null }
        <div class="mt-10 w-full h-1/6 flex flex-col " id="vata-abedon">
            <div class=" w-full h-10 flex">
                <p class="text-lg font-bold ">আপনার ভাতার আবেদনের অগ্রগতিঃ</p>
                
            </div>
            <div class="w-5/6 h-1/2 mt-4 flex flex-col ">
               
                {#if data.vataS[0].status === "hold" || data.vataS[0].status === "done" } 
                    <div class="w-1/2 flex">
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
                        <h1>আপনার আবেদন গ্রহন করা হয়েছে</h1>
                    </div>
                {/if}
                {#if data.vataS[0].status === "done"}
                <div class="w-1/2 flex">
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
                    <h1>আপনার আবেদন সম্পুর্ন হয়েছে</h1>

                </div>
                {/if}
            </div>
        </div>
        {/if}

    
        <div class="w-full h-1/2 flex flex-col rounded-xl shadow-lg mt-5 bg-slate-100">
            <h1>আপনার পূর্ববর্তী ভাতাসমূহের অর্থ প্রাপ্তির তালিকাঃ</h1>
            <div class="w-full h-10 flex flex-col justify-center ml-3 mt-3">
                <div class="w-full flex flex-col ">
                    {#each data.vatatarikh as tarikh}
                        <div class="w-[50rem] bg-white mt-10 px-8 flex h-[5rem] items-center rounded-2xl shadow-xl">
                            <h1 class="w-1/3 text-xl">{tarikh.month}</h1>
                            <h1 class="w-1/3 text-xl">{tarikh.money}</h1>
                            <button class="w-[8rem] bg-green-400 h-[3rem] rounded-xl">টাকা তুলুন</button>
                        </div>
                        
                    {/each}
                </div>
            </div>  
        </div>
	</div>

    

	
</div>

