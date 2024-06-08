export interface ITitle {
    sn: string;
    ganZhi: string;
    hexagrams1?: string;
    hexagrams2?: string;
}

export interface IPoem {
    predict: string[];
    description: string[];
}

export interface IItem {
    title: ITitle;
    poem: IPoem;
}