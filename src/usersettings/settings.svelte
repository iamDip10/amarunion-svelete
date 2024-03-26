<script>
	//import darain from '../img/darain.jpg';
	
	export let data;
	const picc = '/src/img/'.concat(data.user.prof_pic) ;

    function checkpass(){
        if (document.getElementById("pass") != data.password) {
            
        }
    }

</script>

<div class="col-span-9 mt-9 mb-10">
    <div class="flex justify-between w-full text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-2 rounded-xl shadow-2xl items-center">
        <div class="  w-full">
            <h1 class="text-sm">প্রোফাইল,</h1>
			<h1 class="text-4xl font-bold mt-1 uppercase" >
                সেটিংস
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
    
    <div class="w-full h-4/5  rounded-xl shadow-xl mt-[5rem]">
        <div class="w-full h-full flex">
            <div class="w-1/2 h-full flex flex-col">
                <p class="text-lg ml-3 text-[#818CF8] font-bold mt-7">ব্যাক্তিগত তথ্যাদি পরিবর্তন করুন</p>
                <form action="" method="post">
                    <div class="w-full flex">
                        <div class="coolinput w-1/2">
                            <label for="name" class="text bg-slate-100" >আপনার নাম</label>
                            <input type="text" id="name" placeholder='{data.user.name}' name="name"  class="input bg-slate-100">
                        </div>
                        <div class="coolinput w-1/2 ">
                            <label for="name" class="text bg-slate-100">আপনার NID নাম্বার</label>
                            <input type="text" id="name" value='{data.user.nid}' name="nid" readonly  class="input bg-slate-100" >
                        </div>
                        
                    </div>
                    <div class="coolinput w-full ">
                        <label for="name" class="text bg-slate-100">আপনার বর্তমান ঠিকানা</label>
                        <input type="text" id="name" placeholder='{data.user.pressent_address}' name="p_add"  class="input bg-slate-100">
                    </div>
                    <div class="coolinput w-full ">
                        <label for="name" class="text bg-slate-100">আপনার স্থায়ী ঠিকানা</label>
                        <input type="text" id="name" placeholder='{data.user.permanent_address}' name="pa_add"  class="input bg-slate-100">
                    </div>
                    
                    <p class="text-lg ml-3 text-[#818CF8] font-bold mt-7">পাসওয়ার্ড পরিবর্তন করুন</p>
                    <div class="w-full flex flex-col">
                        <div class="coolinput w-full ">
                            <label for="name" class="text bg-slate-100">পূর্ববর্তী পাসওয়ার্ড</label>
                            <input type="text" id="pass" placeholder='পাসওয়ার্ড' name="prev-pass"  class="input bg-slate-100" on:keyup={checkpass}>
                        </div>
                        <div class="coolinput w-full">
                            <label for="name" class="text bg-slate-100">নতুন পাসওয়ার্ড</label>
                            <input type="text" id="name" placeholder='পাসওয়ার্ড' name="new-pass"  class="input bg-slate-100">
                        </div>

                    </div>
                    <div class="w-full flex justify-end items-end">
                        <input type="submit" name="" id="" value="পরিবর্তন করুণ" class="mr-3 h-[3rem] w-[14rem] bg-[#818CF8] rounded-lg text-white">
                    </div>
                </form>
                    
                    
                </div>
                <div class="w-1/2 h-full flex flex-col  px-5">
                    <p class="text-lg text-[#818CF8] font-bold mt-7">আপনার NID ছবি</p>

                    <img src="/src/img/nid1.png" alt="" class="w-full h-[16rem] rounded-xl object-cover">
                    <img src="/src/img/nid2.png" alt="" class="w-full mt-7 h-[16rem] rounded-xl object-cover">
                </div>

            </div>

        </div>
		
	</div>

    

	
</div>

<style>
    .coolinput {
  display: flex;
  flex-direction: column;
  width: full;
  position: static;
  max-width: full;
  padding: 10px;
}

.coolinput label.text {
  font-size: 0.95rem;
  color: #818CF8;
  font-weight: 700;
  position: relative;
  top: 0.8rem;
  margin: 0 0 0 7px;
  padding: 0 3px;
  width: fit-content;
}

.coolinput input[type=text].input {
  padding: 11px 10px;
  font-size: 0.90rem;
  border: 2px #818CF8 solid;
  border-radius: 5px;
}

.coolinput input[type=text].input:focus {
  outline: none;
}
</style>