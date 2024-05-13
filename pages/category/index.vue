<template>
    <div>
        <breadcrumbs />
        <div class="px-4 mt-2">
            <ul class="flex overflow-scroll gap-4 p-2">
                <li v-for="(category, i) in categories" 
                    :key="i" 
                    class="hover:font-bold hover:border-b-3 cursor-pointer"
                    :class="{
                        'border-b font-bold w-3': category?.key === currentCategory
                    }"
                    @click="currentCategory = category?.key"
                >
                    <span class="text-xs">
                        {{ category?.label }}
                    </span>
                </li>
            </ul>

            <product-list />
        </div>
    </div>
</template>

<script setup lang="ts">
const categories = ref<{
    key: string;
    label: string;
}[]>([
    {
        key: 'all',
        label: 'All',
    },
    {
        key: 'men',
        label: 'Men',
    },
    {
        key: 'women',
        label: 'Women',
    },
]);

const currentCategory = ref<string>(categories?.value?.[0]?.key);
</script>
