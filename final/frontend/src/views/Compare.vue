<template>
  <Compare :ya="$route.params.ya" :ia="$route.params.ia" :yb="$route.params.yb" :ib="$route.params.ib"/>
</template>

<script>
	import Compare from '@/components/Compare'

	export default {
		components: {
			Compare
		}
	}
</script>
