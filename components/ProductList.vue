<template>
    <div class="mt-2 px-2">
        <div class="grid grid-cols-2 gap-2">
            <div v-for="i in 10" :key="i" class="p-2">
                <div>
                    <img src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/467173/item/idgoods_68_467173.jpg?width=828"
                        class="rounded-md" alt="">
                </div>
                <div class="mt-2">
                    <div class="flex justify-between">
                        <div>
                            <span class="border text-xs px-2 rounded-full">
                                New
                            </span>
                            <span class="border text-xs px-2 rounded-full ml-1">
                                Women
                            </span>
                        </div>
                        <div class="">
                            <button class="btn">
                                <img src="/public/icons//wishlist.svg" alt="">
                            </button>
                            <button class="btn ml-2">
                                <img src="/public/icons//cart.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="whitespace-nowrap text-ellipsis overflow-hidden">
                        <span class="font-thin text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                    </div>
                    <div>
                        <span class="text-sm font-bold">
                            Rp39000
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
