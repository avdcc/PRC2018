<template>
  <ClubPlayer :idClub="$route.params.id"/>
</template>

<script>
	import ClubPlayer from '@/components/ClubPlayer'

	export default {
		components: {
			ClubPlayer
		}
	}
</script>
