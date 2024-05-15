<template>
    <div class="p-2 cursor-pointer" @click="$router.push('/product/2')">
        <div  class="relative">
            <img src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/467173/item/idgoods_68_467173.jpg?width=828"
                class="rounded-md" alt="">
            <div class="absolute top-[4px] right-2">
                <button class="btn ml-2">
                    <img src="/public/icons//cart.svg" alt="">
                </button>
                <button class="btn">
                    <img src="/public/icons//wishlist.svg" alt="">
                </button>
            </div>
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
</template>

<script setup lang="ts">
const props = defineProps<{
    img?: string;
    name?: string;
    price?: string;
}>()
</script>
