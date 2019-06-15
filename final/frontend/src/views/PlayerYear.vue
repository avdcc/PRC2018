<template>
  <PlayerYear :idPlayer="$route.params.id" :idYear="$route.params.year"/>
</template>

<script>
	import PlayerYear from '@/components/PlayerYear'

	export default {
		components: {
			PlayerYear
		}
	}
</script>
