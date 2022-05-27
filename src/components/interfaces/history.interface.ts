export interface Preview {
    image: string;
    caption: string;
}

export interface HistoryObject {
    id: number;
    title: string;
    preview: Preview;
    year: string;
    firstParagraph: string;
    secondParagraph: string;
    worldEvents: string;
    numberOfEmployees: number;
    sliderIcon: string;
    unEvents: string;
    images: string[];
}
