<template>
    <div class="absolute -bottom-[90px] p-3 bg-white z-[999] h-[300px] w-full rounded-md border">
        <div class="p-2 flex justify-between border-b">
            <div class="flex items-center">
                <span class="font-bold text-sm">
                    Keranjang
                </span>
            </div>
            <div>
                <button class="p-2 text-xs font-bold text-red-500" @click="close">
                    Cancel
                </button>
            </div>
        </div>
        <div class="p-2">
            <div class="flex justify-between">
                <div>
                    <span class="font-bold text-sm">
                        Ukuran
                    </span>
                </div>
                <div class="flex gap-2">
                    <div v-for="(size, i) in sizes" :key="i" class="px-2 border hover:border-slate-800 cursor-pointer rounded-md">
                        <small>
                            {{ size }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="mt-4 flex justify-between">
                <div class="flex items-center">
                    <span class="text-sm font-bold">
                        Jumlah
                    </span>
                </div>
                <div class="flex gap-2 p-1">
                    <div class="flex items-center">
                        <button>
                            <img src="/public//icons//plus.svg" alt="" srcset="">
                        </button>
                    </div>
                    <div class=" flex items-center"> 
                        <input type="number" class="border text-center rounded-md text-xs py-1.5 px-1" placeholder="Masukan Jumlah : ">
                    </div>
                    <div class="flex items-center">
                        <button>
                            <img src="/public//icons//minus.svg" alt="" srcset="">
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="mt-2 pb-5 px-5 absolute bottom-0 right-0 flex gap-2 justify-between w-[inherit]">
            <button class="border w-full  px-4 py-2 rounded-md text-xs font-bold hover:bg-slate-600 hover:text-white">
                Masukan Keranjang
            </button>
            <button class="border w-full px-4 py-2 rounded-md text-xs font-bold hover:bg-slate-600 hover:text-white">
                Lihat Keranjang
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

const sizes = ref<Array<string>>([
    'XS', 'S', 'M', 'L', 'XL', 'XXL'
]);

// type-based
const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = (): void => {
    emit('close')
}

</script>
