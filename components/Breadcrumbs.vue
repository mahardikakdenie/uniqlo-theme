<template>
    <div class="">
        <div class="px-4 relative">
            <img :src="currentImage" class="rounded-sm h-[150px] w-[100%]"
                alt="">
            <div class="absolute bottom-3 right-10 flex gap-2">
                <div 
                    v-for="(image, i) in images" 
                    :key="i" 
                    class="w-9 p-[1px] border h-[1px] cursor-pointer"
                    :class="{
                        'bg-red-500': image === currentImage,
                    }"
                    @click="currentImage = image"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const images = ref<string[]>(['https://im.uniqlo.com/global-cms/spa/resea7d1514e302459e7b5b29bb8f892bb4fr.jpg', 'https://im.uniqlo.com/global-cms/spa/res829657dabe9b0539a2c767d1da0a4207fr.jpg']);
const currentImage = ref<string | undefined>(images.value[0]);

const props = defineProps<{
    dataImages?: Array<string>;
}>();

onMounted(() => {
    if (props?.dataImages && props?.dataImages?.length > 0) {
        images.value = props?.dataImages;
    }
});
</script>
