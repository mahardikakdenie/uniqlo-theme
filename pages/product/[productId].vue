<template>
	<div class="overflow-y-scroll h-[768px]">
		<div class="p-2 border-b-0 mb-12">
			<div>
				<span class="text-xs cursor-pointer hover:underline" @click.once.stop="$router.back()">Kembali</span>
			</div>
			<div class="my-4">
				<span class="font-bold text-md"
					>Kardigan Proteksi Sinar UV Kerah Bulat Lengan Panjang
					(Garis) - Merah.</span
				>
			</div>
			<div>
				<img
					src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/470910/item/idgoods_01_470910.jpg?width=468"
					class="rounded-md"
					alt="" />
			</div>
            <div class="mt-4">
                <ul class="flex overflow-x-scroll w-full space-x-2">
                    <li v-for="i in 10" :key="i" class="hover:border-slate-900 border border-white rounded-md cursor-pointer">
                        <img src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/470910/item/idgoods_01_470910.jpg?width=60" class="rounded-md" alt="">
                    </li>
                </ul>
            </div>
			<div class="mt-4 px-2">
				<div>
					<span class="font-bold text-md">
						Rp90000
					</span>
				</div>
				<div>
					<span class="text-sm font-thin text-justify">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, aut neque. Sequi ea saepe nostrum corporis officiis quasi iure deserunt.
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
