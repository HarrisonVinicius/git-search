export { default as Atoms } from '../../components/atoms/index.js'
export { default as Molecules } from '../../components/molecules/index.js'
export { default as SearchInput } from '../../components/atoms/SearchInput/index.vue'
export { default as AppBar } from '../../components/molecules/AppBar/index.vue'

export const LazyAtoms = import('../../components/atoms/index.js' /* webpackChunkName: "components/atoms/index" */).then(c => c.default || c)
export const LazyMolecules = import('../../components/molecules/index.js' /* webpackChunkName: "components/molecules/index" */).then(c => c.default || c)
export const LazySearchInput = import('../../components/atoms/SearchInput/index.vue' /* webpackChunkName: "components/atoms/SearchInput/index" */).then(c => c.default || c)
export const LazyAppBar = import('../../components/molecules/AppBar/index.vue' /* webpackChunkName: "components/molecules/AppBar/index" */).then(c => c.default || c)
