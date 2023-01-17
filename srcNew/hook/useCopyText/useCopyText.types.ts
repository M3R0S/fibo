interface UseCopyTextParams {
    text: string | number
 
    duration: number
}

interface UseCopyTextReturn {
    text: string
    copyText: () => void
}

export type UseCopyText = (params: UseCopyTextParams) => UseCopyTextReturn