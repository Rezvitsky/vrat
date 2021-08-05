export default interface IRoute {
    path: string
    name: string
    exact: boolean
    comonent: any
    props?: any
}