<template>
	<div class="container bg-slate-100">
		<div class="relative z-10">
			<!-- Navbar -->
			<nav class="bg-white px-2 py-4 shadow-sm">
				<div class="flex justify-between">
					<div class="flex items-center">
						<img src="/public/icons/logo.svg" class="rounded-sm" width="50" alt="">
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
			<!-- End Navabr -->
			
			<!-- Content -->
			<div class="z-10 overflow-y-auto-scroll mt-5">
				<NuxtPage />
			</div>
			<!-- End Content -->
			
			<!-- Floating Menus -->
			<!-- End Floating Menus -->
			<floating-menus :type="floatMenusType" @action="action"  />
			<div v-if="showModal" class="absolute inset-0 bg-black opacity-50"></div>
			<ModalBottomModal 
				v-if="showModal" 
				@close="showModal = false"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
useHead({
	htmlAttrs: {
		lang: 'en',
	},
	title: 'Uniqlo',
	titleTemplate: (title) => title !== 'Nuxt Theme' ? `${title} · Nuxt Theme` : title,
	meta: [
		{ name: 'description', content: 'A TMDB client built with Nuxt Image to show the potential of it ✨' },
		{ property: 'og:image', content: 'https://movies.nuxt.space/social-card.png' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:site', content: '@nuxt_js' },
		{ name: 'twitter:creator', content: '@nuxt_js' },
	],
	link: [
		// Link untuk favicon
		{ rel: 'icon', type: 'image/webp', href: '/icons/logo.svg' }
	],
});

const showModal = ref<boolean>(false);

const route = useRoute();
const floatMenusType = ref<'menus' | 'product-detail'>('menus');

const init = (): void => {
	floatMenusType.value = 'menus';
	if (route?.path.includes('/product')) {
		floatMenusType.value = 'product-detail';
	}
};

watch(() => route?.path, (value) => {
	if (value) {
		init();
	}
});

const action = (key: string): void => {
	if (key === 'cart') {
		showModal.value = true;
	}
};

onMounted(() => {
	init();
})

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
	/* Move font-size to global */
	font-family: "Plus Jakarta Sans", sans-serif;
}

/* Container Styles */
.container {
	max-width: 480px;
	height: 100vh;
	margin: 0 auto;
	width: auto;
	overflow-x: hidden;
	/* Center the container */
	box-sizing: border-box;
	/* Include padding and border in the element's total width and height */
}

/* Header Styles */
header,
footer {
	background-color: #333;
	color: #fff;
	padding: 20px;
	text-align: center;
	/* Center align text */
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

/* Untuk browser WebKit (Chrome, Safari) */
::-webkit-scrollbar {
  width: 1px; /* Lebar scrollbar */
  height: 1px;
}

::-webkit-scrollbar-thumb {
  background-color: #888; /* Warna thumb scrollbar */
  border-radius: 5px; /* Border radius thumb scrollbar */
}

::-webkit-scrollbar-track {
  background-color: #eee; /* Warna track scrollbar */
}

/* Untuk browser lainnya */
body {
  scrollbar-width: thin; /* Lebar scrollbar */
}

body::-webkit-scrollbar-thumb {
  background-color: #888; /* Warna thumb scrollbar */
  border-radius: 5px; /* Border radius thumb scrollbar */
}

body::-webkit-scrollbar-track {
  background-color: #eee; /* Warna track scrollbar */
}

</style>
