<script>
	import { readable } from "svelte/store";
	import Body from "../UserDashboard/body.svelte";
	import Chart from "../UserDashboard/chart.svelte";

  export let data;

  let srcc = '/src/img/'.concat(data.user.prof_pic);

  function bindIt() {
    let namee = document.getElementById("file").files[0] ;
    let objectUrl = window.URL.createObjectURL(new Blob([namee], {type: 'image/jpg'})) ;
    document.getElementById('mgg').src = objectUrl ;
  }
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
				<img src={srcc} alt="" class="aspect-square object-cover w-11 rounded-full" />
			</button>
		</div>
	</div>

	<div class="w-full h-[52rem]">
		

		<div class="mt-8 flex space-x-5 justify-between w-full">
			<div class="bg-white p-5 w-full rounded-xl shadow-xl grid ">
				<h1 class="text-xs">অভিযোগ প্যানেল </h1>

				<h1 class="text-3xl font-bold">অভিযোগ ফর্ম</h1>
			</div>



		</div>

        <div class="mt-5 bg-slate-100 overflow-scroll">
            <form class="flex-col space-y-2" method="POST" enctype="multipart/form-data">


                <div class="flex flex-col">

                  <div class="flex flex-col w-full">
                    <div class="coolinput w-full">
                      <label for="dh" class="text">অভিযোগের ধরন</label>
                      <select name="dhoron" class="" id="dh">
                        <option value="">ধরণ নির্বাচন করুন</option>
                        <option value="rape">ধর্ষন</option>
                        <option value="theft">চুরি</option>
                        <option value="robbery">ডাকাতি</option>
                        <option value="threat">হুমকি</option>
                        <option value="murder">খুন</option>
                        <option value="land">জমি দখল</option>
                        <option value="others">অন্যান্য</option>
                      </select>
                    </div>
                    <div class="coolinput w-full">
                      <label for="input" class="text">যার নামে অভিযোগ করেছেন তার নাম</label>
                      <input type="text" name="Oname" id="input">
                    </div>
                    <div class="w-full flex space-x-6">
                      <div class="coolinput w-1/3">
                        <label for="input" class="text">যার নামে অভিযোগ করেছেন তার জেলা</label>
                        <input type="text" name="jela" id="input">
                      </div>
                      <div class="coolinput w-1/3">
                        <label for="input" class="text">যার নামে অভিযোগ করেছেন তার ঠিকানা</label>
                        <input type="text" name="adds" id="input">
                      </div>
                      <div class="coolinput w-1/3">
                        <label for="input" class="text">যার নামে অভিযোগ করেছেন তার ফোন নাম্বার</label>
                        <input type="text" name="phn" id="input">
                      </div>
                    </div>
                  </div>
                  <div class="coolinput w-full">
                    <label for="input" class="text">আপনার অভিযোগঃ</label>
                    <textarea name="complain" class="inputext resize-none w-full h-[10rem]" id="input"  ></textarea>
                
                  </div>
                    

                
                    
                </div>
                

                <label for="file" class="custum-file-upload relative" >
                    <div class="icon">
                      <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
                    </div>
                    <div class="text">
                       <span>অভিযোগে সংক্রান্ত কোনো প্রমান (যদি থাকে)</span>
                    </div>
                    <img class="absolute w-[20rem] h-[10rem]" id="mgg"  alt="">
                    <input id="file" name="files" type="file" on:change={bindIt}>
                    </label>



                    <button class=" w-full h-12">
                        <!-- <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span> -->
                        <input type="submit" class="w-full bg-blue-500 rounded-lg h-full text-white" name="" id="" value="অভিযোগ দিন"> 
                    </button>
            </form>
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
  font-size: 0.75rem;
  color: #818CF8;
  font-weight: 700;
  position: relative;
  top: 0.5rem;
  margin: 0 0 0 7px;
  padding: 0 3px;
  background: #ffffff;
  width: fit-content;
}

.coolinput .inputext {
  padding: 11px 10px;
  font-size: 0.75rem;
  border: 2px #818CF8 solid;
  border-radius: 5px;
  background: #ffffff;
}

.coolinput .inputext:focus {
  outline: none;
  border: 2px #578add solid;
}

.coolinput input[type=text], select {
  padding: 11px 10px;
  font-size: 0.90rem;
  border: 2px #818CF8 solid;
  border-radius: 5px;
  background: #ffffff;
}

.coolinput input[type=text]:focus, select:focus {
  outline: none;
}



/* media */
.custum-file-upload {
  height: 200px;
  width: full;
  padding: 0px;;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #e8e8e8;
  background-color: #212121;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 48px 35px -48px #e8e8e8;
}

.custum-file-upload .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .icon svg {
  height: 80px;
  fill: #e8e8e8;
}

.custum-file-upload .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .text span {
  font-weight: 400;
  color: #e8e8e8;
}

.custum-file-upload input {
  display: none;
}

/* Button */
.applyBtn {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  background-color: #171717;
  padding: 1em 2em;
  border: none;
  border-radius: .6rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.applyBtn span:not(:nth-child(6)) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
  width: 30px;
  background-color: #0c66ed;
  border-radius: 50%;
  transition: .6s ease;
}

.applyBtn span:nth-child(6) {
  position: relative;
}

.applyBtn span:nth-child(1) {
  transform: translate(-3.3em, -4em);
}

.applyBtn span:nth-child(2) {
  transform: translate(-6em, 1.3em);
}

.applyBtn span:nth-child(3) {
  transform: translate(-.2em, 1.8em);
}

.applyBtn span:nth-child(4) {
  transform: translate(3.5em, 1.4em);
}

.applyBtn span:nth-child(5) {
  transform: translate(3.5em, -3.8em);
}

.applyBtn:hover span:not(:nth-child(6)) {
  transform: translate(-50%, -50%) scale(4);
  transition: 1.5s ease;
}
  
</style>