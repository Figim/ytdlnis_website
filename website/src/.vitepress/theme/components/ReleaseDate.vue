<script setup lang="ts">
import { computed, onMounted, ref, toRefs } from 'vue'
import moment from 'moment'
import 'moment/locale/sq' // import the moment locale of every added language
import { useData } from 'vitepress'
import { type AppRelease, data as release } from '../data/release.data'

const props = defineProps<{ type: keyof AppRelease }>()
// Importing a moment locale makes it the global default, so switch back.
moment.locale('en')

const { lang } = useData()

const { type } = toRefs(props)

const momentInfo = computed(() => ({
  relative: moment(release[type.value].published_at).locale(lang.value).fromNow(),
  exact: lang.value === 'en'
    ? moment(release[type.value].published_at).format('dddd, MMMM Do YYYY [at] HH:mm')
    : moment(release[type.value].published_at).locale(lang.value).format('LLLL'),
  iso: release[type.value].published_at ?? undefined,
}))

// Mimic the <ClientOnly /> behavior to show custom text while rendering.
const show = ref(false)

onMounted(() => {
  show.value = true
})
</script>

<template>
  <time v-if="show" :datetime="momentInfo.iso" :title="momentInfo.exact">
    {{ momentInfo.relative }}
  </time>
  <time v-else :datetime="momentInfo.iso">
    {{ momentInfo.exact }}
  </time>
</template>
