<template>
  <Player :idPlayer="$route.params.id"/>
</template>

<script>
	import Player from '@/components/Player'

	export default {
		components: {
			Player
		}
	}
</script>
