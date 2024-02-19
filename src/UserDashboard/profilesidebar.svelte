<script>
	import darain from '../img/darain.jpg';
    export let data;
</script>

<div class="col-span-3 mt-9 w-full flex justify-center items-center ">

    
	<div class="p-20 flex flex-col items-center border-l border-orange-500 bg-white">
        <h1 class="mb-10">প্রোফাইল সারাংস</h1>
		<div class=" ">
			<img src={darain} alt="" class="object-cover mb-5 aspect-square rounded-full w-40" />
		</div>
        <div class="">
            <h1 class="uppercase text-2xl mb-5 text-center">{data.user.name}</h1>
            <h1 class="font-bold">বর্তমান ঠিকানাঃ  {data.user.pressent_address}</h1>
            <h1>স্থায়ী ঠিকানাঃ  {data.user.permanent_address}</h1>
            <h1>ইউনিয়নঃ </h1>
            <h1>মোবাইলঃ {data.user.number}</h1>
            <h1>নিবন্ধন তারিখঃ </h1>


            <!-- <h1 class="mt-5">নিজ সম্পর্কেঃ </h1>

            <h1 class="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius adipisci possimus rem deserunt quos, at incidunt minima est nesciunt quo asperiores id architecto impedit atque totam sit obcaecati. Eligendi similique rem, officia quas explicabo, reiciendis consectetur beatae, ut nisi illum corporis. Facere vero quae, magnam ratione unde harum perspiciatis vel!</h1> -->

        </div>
	</div>
</div>
