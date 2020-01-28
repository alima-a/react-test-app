export interface State {
    key: string,
}

export  interface Props {
    onSubmit: (key: string) => void
}