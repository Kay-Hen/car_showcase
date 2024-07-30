import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"; 
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void;
}

export interface CarProps{
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders: number;
    displacement:number;
    drive: string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model: string;
    transmission:string;
    year:number;
}


export interface filterProps{
    manufacturers:string;
    models:string;
    years:number;
    fuel:string,
    limit:number;
}

export interface OptionProps{
    title:string;
    value:string;
}

export interface CustomFilterProps{
    options:OptionProps[];
    title:string;
}

export interface ShowMoreProps{
    pageNumber: string;
    isNext: boolean;

}