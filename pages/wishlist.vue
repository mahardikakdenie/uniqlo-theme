<template>
    <div>
        <div v-if="wishlistItems?.length > 0" class="p-2">
            <div>
                <span class="text-md font-bold capitalize">
                    wishlist
                </span>
            </div>
            <div>
                <span class="text-xs">
                    {{ wishlistItems?.length }} Items
                </span>
            </div>
            <div>
                <ul>
                    <li class="bg-white">
                        <div class="flex justify-between">
                            <div class="p-2 relative">
                                <img 
                                    src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/470910/item/idgoods_01_470910.jpg?width=250" 
                                    class="rounded-md" alt=""
                                >
                            </div>
                            <div class="w-full p-2">
                                <div>
                                    <span class="text-xs font-bold">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, corporis.
                                    </span>
                                </div>
                                <div>
                                    <span class="text-xs font-thin">
                                        code : 6789
                                    </span>
                                </div>
                                <div>
                                    <span class="text-xs font-semibold">
                                        Category : Women
                                    </span>
                                </div>
                                <div class="mt-3">
                                    <span class="text-sm font-bold">
                                        Rp390000
                                    </span>
                                </div>
                            </div>
                            <div class="p-2">
                                <button class="btn">
                                    <img src="/public/icons//wishlist-heart.svg" width="25" alt="">
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="wishlistItems?.length === 0" class="p-2">
            <span class="text-xs font-bold">
                O Items
            </span>
            <div>
                <span class="font-bold text-sm">
                    YOUR WISH LIST HAS NO ITEMS.
                </span>
            </div>
            <div>
                <small>Press the heart mark to add items on your wish list.</small>
            </div>
        </div>
        <div class="grid-cols-2 grid p-2 gap-2 mt-4">
            <button class="border py-2 px-2 bg-slate-800 text-white font-bold hover:bg-slate-700">
                Masuk
            </button>
            <button class="border py-2 px-2 bg-slate-800 text-white font-bold hover:bg-slate-700">
                Daftar
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/constant/types';
const wishlistItems = ref<Product[]>([
    {
        id: '',
        name: '',
        code: '',
        color: '',
        price: '',
    }
]);
</script>
