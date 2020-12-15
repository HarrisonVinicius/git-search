export { default as Atoms } from '../../components/atoms/index.js'
export { default as Molecules } from '../../components/molecules/index.js'
export { default as Organisms } from '../../components/organisms/index.js'
export { default as Logo } from '../../components/atoms/Logo/index.vue'
export { default as SearchInput } from '../../components/atoms/SearchInput/index.vue'
export { default as BasicButton } from '../../components/atoms/BasicButton/index.vue'
export { default as RepositoriesListItem } from '../../components/molecules/RepositoriesListItem/index.vue'
export { default as AppBar } from '../../components/molecules/AppBar/index.vue'
export { default as SearchUserForm } from '../../components/molecules/SearchUserForm/index.vue'
export { default as UsersList } from '../../components/organisms/UsersList/index.vue'

export const LazyAtoms = import('../../components/atoms/index.js' /* webpackChunkName: "components/atoms/index" */).then(c => c.default || c)
export const LazyMolecules = import('../../components/molecules/index.js' /* webpackChunkName: "components/molecules/index" */).then(c => c.default || c)
export const LazyOrganisms = import('../../components/organisms/index.js' /* webpackChunkName: "components/organisms/index" */).then(c => c.default || c)
export const LazyLogo = import('../../components/atoms/Logo/index.vue' /* webpackChunkName: "components/atoms/Logo/index" */).then(c => c.default || c)
export const LazySearchInput = import('../../components/atoms/SearchInput/index.vue' /* webpackChunkName: "components/atoms/SearchInput/index" */).then(c => c.default || c)
export const LazyBasicButton = import('../../components/atoms/BasicButton/index.vue' /* webpackChunkName: "components/atoms/BasicButton/index" */).then(c => c.default || c)
export const LazyRepositoriesListItem = import('../../components/molecules/RepositoriesListItem/index.vue' /* webpackChunkName: "components/molecules/RepositoriesListItem/index" */).then(c => c.default || c)
export const LazyAppBar = import('../../components/molecules/AppBar/index.vue' /* webpackChunkName: "components/molecules/AppBar/index" */).then(c => c.default || c)
export const LazySearchUserForm = import('../../components/molecules/SearchUserForm/index.vue' /* webpackChunkName: "components/molecules/SearchUserForm/index" */).then(c => c.default || c)
export const LazyUsersList = import('../../components/organisms/UsersList/index.vue' /* webpackChunkName: "components/organisms/UsersList/index" */).then(c => c.default || c)
