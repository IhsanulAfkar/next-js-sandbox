'use client'
import { NextPage } from 'next'
import Select from 'react-select'
import AsyncSelect from 'react-select/async';
import { ColourOption, colourOptions } from './data';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const ReactSelectPage: NextPage = ({ }) => {
    const filterColors = (inputValue: string) => {
        return colourOptions.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const loadOptions = (
        inputValue: string,
        callback: (options: ColourOption[]) => void
    ) => {
        setTimeout(() => {
            callback(filterColors(inputValue));
        }, 1000);
    };
    return <>
        <p className='font-bold text-3xl'>React Select</p>
        <div>
            <p className='font-semibold '>Static Options</p>
            <Select options={options}></Select>
        </div>
        <div>
            <p className='font-semibold '>Async Options</p>
            <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions />
        </div>
    </>
}

export default ReactSelectPage