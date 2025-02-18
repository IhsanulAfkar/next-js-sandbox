'use client'
import { NextPage } from 'next'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import AsyncSelect from 'react-select/async';
import { ColourOption, colourOptions, ReactSelectMD } from './data';
import Markdown from 'react-markdown';
import { useTheme } from 'next-themes';
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
    const { theme } = useTheme()
    const animatedComponents = makeAnimated();

    const loadOptions = (
        inputValue: string,
        callback: (options: ColourOption[]) => void
    ) => {
        setTimeout(() => {
            callback(filterColors(inputValue));
        }, 1000);
    };
    const lightThemeClass = theme === "light" ? "" : "my-react-select-container";
    const lightThemeClassPrefix = theme === "light" ? "" : "my-react-select";
    return <>
        <p className='font-bold text-3xl'>Example</p>
        <hr />
        <div>
            <p className='font-semibold '>Static Options</p>
            <Select options={options} className={lightThemeClass}
                classNamePrefix={lightThemeClassPrefix}></Select>
        </div>
        <div>
            <p className='font-semibold '>Async Options</p>
            <AsyncSelect className={lightThemeClass}
                classNamePrefix={lightThemeClassPrefix} cacheOptions loadOptions={loadOptions} defaultOptions />
        </div>
        <div>
            <p className='font-semibold '>Multi & Animated Options</p>
            <Select
                className={lightThemeClass}
                classNamePrefix={lightThemeClassPrefix}
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[colourOptions[4], colourOptions[5]]}
                isMulti
                options={colourOptions}
            />
        </div>
        <hr />
        <p className='font-bold text-xl'>Setup</p>
        <div className='prose dark:prose-invert max-w-full '>
            <Markdown >{ReactSelectMD}</Markdown>
        </div>
    </>
}

export default ReactSelectPage