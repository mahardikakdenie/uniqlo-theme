<template>
    <div class="p-2">
        <div class="">
            <div v-for="i in 3" :key="i" class="p-2 flex justify-between mt-2 rounded-md bg-white">
                <div class="p-1 flex items-center">
                    <img 
                        src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/467173/item/idgoods_68_467173.jpg" 
                        width="100"
                        class="rounded-md" 
                        alt="" 
                        srcset=""
                    >
                </div>
                <div class="">
                    <div class="px-1 pt-1 pb-0">
                        <span class="text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quidem!
                        </span>
                    </div>
                    <div class="px-1">
                        <span class="text-xs font-bold">
                            Rp90000
                        </span>
                    </div>
                    <div class=" pt-1 flex gap-2 justify-end">
                        <div class="flex items-center">
                            <img src="/public//icons/minus.svg" width="18">
                        </div>
                        <div class="">
                            <input type="text" class="border p-0 rounded-md text-center text-xs" placeholder="0">
                        </div>
                        <div class="flex items-center">
                            <img src="/public//icons/plus.svg" width="18">
                        </div>
                        <div class="flex items-center">
                            <img src="/public//icons//delete.svg" width="20">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
