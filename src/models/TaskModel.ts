export interface PresentesProperties {
    id: string;
    presente: string;
    descricao: string;
    valor: string
    complete: boolean;
    image: string;
    children?: React.ReactNode;
}
