<script>
	import { readable } from "svelte/store";
	import Body from "../UserDashboard/body.svelte";
	import Chart from "../UserDashboard/chart.svelte";

    export let data;

    let srcc = '/src/img/'.concat(data.user.prof_pic);
    let flag = 0 ;
    function showme(msg) {
        if (flag == 0) {
            document.getElementById(msg).style.display = "flex" ;
            flag = 1 ;
            this.innerText = "পূর্বের অবস্থায় ফিরে যান";
        }
        else if (flag == 1) {
            document.getElementById(msg).style.display = "none" ;
            flag = 0;
            this.innerText = "বিস্তারিত দেখুন"
        }


    }

</script>


<!-- <div class="w-full h-full flex justify-center items-center  absolute">
    <div class="w-[52rem] flex flex-col h-[50rem] bg-green-50">
        <div class="flex w-full h-[4rem]  mt-5 justify-center items-center">
            <h1 class="text-xl font-bold">অভিযোগের বিস্তারিত</h1>
        </div>

        
    </div>
</div> -->
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
				<img src={srcc} alt="" class="aspect-square object-cover w-11 rounded-full" />
			</button>
		</div>
	</div>

	<div class="w-full h-[52rem]">
		

		<div class="mt-8 flex space-x-5 justify-between w-full">
			<div class="bg-white p-5 w-full rounded-xl shadow-xl flex justify-between items-center ">
				<div class="w-1/2">
                    <h1 class="text-xs">অভিযোগ প্যানেল </h1>

				    <h1 class="text-3xl font-bold">অভিযোগ করতে চাচ্ছেন?</h1>
                </div>
                <a href="/usercomplaints/{data.user.number}" class="p-3 rounded-2xl shadow-xl bg-slate-200 text-center">আপনার অভিযোগ জানাতে এখানে ক্লিক করুন</a>
			</div>

            


		</div>

        <div class="mt-5 w-full flex flex-col rounded-xl shadow-xl h-[36rem] bg-white overflow-scroll">
            <h1 class="p-5 text-lg">আপনার অভিযোগসমুহ</h1>

            <div class="flex  flex-col w-full p-3 h-full">

                {#each data.complaint as comps}
                <div class="w-full flex flex-col mb-5">
                    <div class="w-full h-[6rem] flex items-center p-3 rounded-xl bg-slate-100">
                        <img src="/src/img/{comps.pics}" alt="" class="w-[4rem] h-[4rem] rounded-xl bg-black">
                        <div class="w-[40rem] ml-3 h-full flex flex-col">
                            <div class="w-full flex">
    
                                <h1 class="text-lg font-bold mt-2">অভিযোগ আইডি {comps.complaintId}</h1>
                                {#if comps.status === "pending"}
                                <h1 class="text-lg bg-green-300 w-[15rem] text-center p-1 rounded-xl mt-2 ml-4">পেন্ডিং রয়েছে</h1>
                                {:else if comps.status === "working"}
                                <h1 class="text-lg bg-green-300 w-[15rem] text-center p-1 rounded-xl mt-2 ml-4">কাজ চলছে</h1>
                                {:else if comps.status === "done"}
                                <h1 class="text-lg bg-green-300 w-[15rem] text-center p-1 rounded-xl mt-2 ml-4">সিদ্ধান্ত গৃহীত হয়েছে</h1>
                                {/if}
                                
                            </div>
                            <h1 class="text-lg">অভিযোগের তারিখঃ {comps.date}</h1>
                        </div>
                        <div class="w-[50rem]  rounded-lg h-full flex justify-end px-5 items-center">
                            <button class="w-1/3 h-full bg-gray-200 rounded-lg text-lg" on:click={() => showme(comps.complaintId)}>
                                বিস্তারিত দেখুন
                            </button>
                        </div>
                    </div>
                    <div class="w-full h-[20rem] rounded-lg shadow-lg" style="display: none;" id={comps.complaintId}>
                        <div class="flex w-full h-full p-5">
                            <div class="w-1/2 h-full flex flex-col">
                                <h1>অভিযোগ যার নামে করা হয়েছে,</h1>
                                <br>
                                <h1>তার নামঃ <span class="font-bold">{comps.name}</span></h1>
                                <h1>তার ঠিকানাঃ <span class="font-bold">{comps.address}, {comps.jela}</span></h1>
                                <h1>তার ফোন নাম্বারঃ <span class="font-bold">{comps.number}</span></h1>
                                <h1>অভিযোগের বর্ননাঃ</h1>
                                <h1 class="w-full font-bold">
                                    {comps.extra}
                                </h1>
                                <br>
                                <div id="desc" style="display: none;">
                                    <h1 class="text-lg">সিদ্ধান্তঃ</h1>
                                    <div class="w-full h-[3rem] font-bold text-xl">
                                        <h1 id="final"></h1>
                                    </div>

                                </div>
                            </div>
                            <div class="w-1/2 h-full flex justify-center items-center">
                                <img src="/src/img/{comps.pics}" alt="" class="w-[25rem] h-full">
                            </div>
                        </div>
                    </div>

                </div>
                {/each}
            </div>
        </div>
    
        
		
	</div>

</div>
