<template>
    <div class="fixed bottom-0 w-[100%] max-w-[480px] shadow-lg rounded-sm border pt-4 pb-3 px-3 bg-white z-10">
        <div v-if="type === 'menus'" class="flex justify-between px-2">
            <div v-for="(menu, index) in floatingMenus" 
                :key="index" 
                class="p-2 rounded-lg hover:bg-gray-100 cursor-pointer" 
                :class="{ 'bg-gray-100': menu?.route === $route?.path  }"
                @click="$router?.push(menu?.route)"
            >
                <div class="flex justify-center">
                    <img :src="menu?.img" width="20" class="text-gray-300" alt="">
                </div>
                <span class="text-xs text-gray-500">{{ menu?.label }}</span>
            </div>
        </div>
        <div v-if="type === 'product-detail'" class="grid grid-cols-2 gap-2">
            <button class="border w-full py-2 text-xs font-bold rounded-sm flex justify-center">
                Masukan Keranjang
            </button>
            <button class="border w-full py-2 text-xs font-bold rounded-sm">
                Beli Sekarang
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';
interface Menus {
    img: string;
    key: string;
    route: string;
    label: string;
}

const props = defineProps({
    type: {
        type: String as PropType<"menus" | "product-detail">,
        default: 'menus',
        validator: (type: string): boolean => ['menus', 'product-detail'].includes(type)
    },
});

const floatingMenus = ref<Menus[]>([
    {
        img: '/icons/home.svg',
        key: 'home',
        route: '/',
        label: 'Home'
    },
    {
        img: '/icons/category.svg',
        key: 'category',
        route: '/category',
        label: 'Category'
    },
    {
        img: '/icons/wishlist.svg',
        key: 'wishlist',
        route: '/wishlist',
        label: 'Wishlist'
    },
    {
        img: '/icons/scan.svg',
        key: 'membership',
        route: '/membership',
        label: 'Membership'
    },
]);
</script>
