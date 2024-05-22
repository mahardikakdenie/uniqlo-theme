<template>
    <div class="p-2 cursor-pointer bg-white" @click="$router.push('/product/2')">
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
                <div class="">
                    <span v-for="(tag, index) in tags" :key="index" class="border text-xs px-2 ml-1 rounded-full">
                        {{ tag }}
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
import type { PropType } from 'vue';

const props = defineProps({
    img: {
        type: String as PropType<string>,
    },
    name: {
        type: String as PropType<string>,
    },
    price: {
        type: String as PropType<string>,
    },
});

const tags: Array<string> = ['Women', 'New'];
</script>
