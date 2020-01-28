export interface State {
    url: string
}

export interface Props {
    onSubmit: (url: string) => void
}