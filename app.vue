<template>
	<div class="container">
		<div class="">
			<nav class="bg-white px-2 py-4 shadow-sm">
				<div class="flex justify-between">
					<div>
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/408px-UNIQLO_logo.svg.png" class="rounded-sm" width="25" alt="">
					</div>
					<div class="flex items-center gap-2">
						<div class="">
							<img src="/public/icons/scan.svg" width="25" alt="">
						</div>
						<div class="">
							<img src="/public/icons/cart.svg" width="25" alt="">
						</div>
					</div>
				</div>
			</nav>

			<div class="">
				<div class="p-0">
					<div>
						<img src="https://im.uniqlo.com/global-cms/spa/resea7d1514e302459e7b5b29bb8f892bb4fr.jpg" class="rounded-sm" alt="">
					</div>
				</div>
				<div class="p-3">
					<div>
						<span class="font-bold text-md text-gray-400">
							Live Station at store
						</span>
					</div>
					<div>
						<span class="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium? A excepturi dolore, itaque impedit quae adipisci perspiciatis error quaerat earum. Inventore laudantium temporibus iure id quis harum obcaecati modi.</span>
					</div>
				</div>
			</div>
		</div>
		<div class="fixed bottom-0 w-[100%] max-w-[480px] shadow-md rounded-sm pt-2 b-3 px-3">
			<div class="flex justify-between">
				<div>
					<div class="flex justify-center">
						<img src="/public/icons/home.svg" width="20" class="text-gray-300" alt="">
					</div>
					<span class="text-sm">Home</span>
				</div>
				<div>
					<div class="flex justify-center">
						<img src="/public/icons/category.svg" width="20" class="text-gray-300" alt="">
					</div>
					<span class="text-xs">Category</span>
				</div>
				<div>
					<div class="flex justify-center">
						<img src="/public/icons/wishlist.svg" width="20" class="text-gray-300" alt="">
					</div>
					<span class="text-xs">Wishlist</span>
				</div>
				<div>
					<div class="flex justify-center">
						<img src="/public/icons/notification.svg" width="20" class="text-gray-300" alt="">
					</div>
					<span class="text-xs">Notifikasi</span>
				</div>
				<div>
					<div class="flex justify-center">
						<img src="/public/icons/scan.svg" width="20" class="text-gray-300" alt="">
					</div>
					<span class="text-xs">Keanggotaan</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.text-plus {
  font-family: "Inconsolata", monospace;
  font-optical-sizing: auto;
}
/* Global Styles */

/* Reset default margin and padding */
html,
body {
	margin: 0;
	padding: 0;
	font-size: 16px; /* Move font-size to global */
	font-family: "Plus Jakarta Sans", sans-serif;
}

/* Container Styles */
.container {
	max-width: 480px;
	height: 100vh;
	padding: 0 10px;
	margin: 0 auto; /* Center the container */
	box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

/* Header Styles */
header,
footer {
	background-color: #333;
	color: #fff;
	padding: 20px;
	text-align: center; /* Center align text */
}

/* Main Content Styles */
main {
	padding: 20px 0;
}

/* Article Styles */
article {
	background-color: #f9f9f9;
	padding: 20px;
	margin-bottom: 20px;
}

/* Media Queries for Mobile Devices */
@media only screen and (max-width: 600px) {
	/* Adjust container width for smaller screens */
	.container {
		padding: 0 10px;
	}
}
</style>
