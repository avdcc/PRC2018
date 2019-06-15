<template>
  <NationalityPlayer :idNationality="$route.params.id"/>
</template>

<script>
	import NationalityPlayer from '@/components/NationalityPlayer'

	export default {
		components: {
			NationalityPlayer
		}
	}
</script>
