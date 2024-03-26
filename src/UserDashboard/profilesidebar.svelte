<script>
    import { readable } from 'svelte/store';
    export let data;
    const ppic = '/src/img/'.concat(data.user.prof_pic) ;
</script>


<div class="col-span-3 mt-9 w-full flex  justify-center items-center ">
        
    
        <div class="p-20 flex flex-col items-center border-l border-orange-500 bg-white">
            <h1 class="mb-10">প্রোফাইল সারাংস</h1>
            <div class="w-full flex justify-center items-center">
                <div class="absolute ml-32 z-1">
                    <form method="POST" id="picinp" enctype="multipart/form-data">
                        <input type="file" name="pic" id="prog" style="display: none;">
                        <label for="prog" class="mt-24 mr-4 w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center"><svg fill="#858585" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-30.66 -30.66 367.96 367.96" xml:space="preserve" stroke="#858585" stroke-width="30.6637" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896 l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"></path> <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095 L265.13,75.602L231.035,41.507z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg></label>

                    </form>
                </div>
                <img src={ppic} id="image" alt="" class="object-cover mb-5 aspect-square rounded-full w-40 " />
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
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <script>
            $('#prog').change(function() { 
                console.log("Changing") ;
                $('#picinp').submit();
                var readr = new FileReader() ;
                readr.onload = (e) => {
                    $('#image').attr('src', e.target.result) ;

                }
                readr.readAsDataURL(this.files[0]) ;
            });
        </script>
        
    
    </div>

