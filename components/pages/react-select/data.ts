export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
  export const colourOptions: readonly ColourOption[] = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  
  export interface FlavourOption {
    readonly value: string;
    readonly label: string;
    readonly rating: string;
  }
  
  export const flavourOptions: readonly FlavourOption[] = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
  ];
  
  export interface StateOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const stateOptions: readonly StateOption[] = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FM', label: 'Federated States Of Micronesia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'GU', label: 'Guam' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PW', label: 'Palau' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VI', label: 'Virgin Islands' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
  ];
  
  export const optionLength = [
    { value: 1, label: 'general' },
    {
      value: 2,
      label:
        'Evil is the moment when I lack the strength to be true to the Good that compels me.',
    },
    {
      value: 3,
      label:
        "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
    },
  ];
  
  export const dogOptions = [
    { id: 1, label: 'Chihuahua' },
    { id: 2, label: 'Bulldog' },
    { id: 3, label: 'Dachshund' },
    { id: 4, label: 'Akita' },
  ];
  
  // let bigOptions = [];
  // for (let i = 0; i < 10000; i++) {
  // 	bigOptions = bigOptions.concat(colourOptions);
  // }
  
  export interface GroupedOption {
    readonly label: string;
    readonly options: readonly ColourOption[] | readonly FlavourOption[];
  }
  
  export const groupedOptions: readonly GroupedOption[] = [
    {
      label: 'Colours',
      options: colourOptions,
    },
    {
      label: 'Flavours',
      options: flavourOptions,
    },
  ];
  
  export const ReactSelectMD = `
# React Select

## installation
\`\`\`
npm i react-select react-select/animated
\`\`\`

usage
\`\`\`js
import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select options={options} />
)
\`\`\`
for more detailed example or usage, visi [React Select](https://react-select.com/home) website.

## Dark Mode 
Below is custom implementation for dark mode

update \`globals.css\` (or your base tailwind css file)
\`\`\`css
@layer components {
  .my-react-select-container .my-react-select__control {
    @apply bg-white dark:bg-neutral-700 border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500;
  }
  .my-react-select-container .my-react-select__control--is-focused {
    @apply border-neutral-500 hover:border-neutral-500 dark:border-neutral-400 dark:hover:border-neutral-400 shadow-none;
  }
  .my-react-select-container .my-react-select__menu {
    @apply bg-neutral-100 dark:bg-neutral-700 border-2 border-neutral-300 dark:border-neutral-600;
  }
  .my-react-select-container .my-react-select__option {
    @apply text-neutral-600 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-800;
  }
  .my-react-select-container .my-react-select__indicator-separator {
    @apply bg-neutral-400;
  }
  .my-react-select-container .my-react-select__input-container,
  .my-react-select-container .my-react-select__placeholder,
  .my-react-select-container .my-react-select__single-value {
    @apply text-neutral-600 dark:text-neutral-200;
  }

    /* Multi-value container and labels */
  .my-react-select-container .my-react-select__multi-value {
    @apply bg-neutral-400 dark:bg-neutral-600 rounded-md;
  }

  .my-react-select-container .my-react-select__multi-value__label {
    @apply text-neutral-800 dark:text-neutral-100;
  }

  /* Multi-value remove button and SVG */
  .my-react-select-container .my-react-select__multi-value__remove {
    @apply bg-neutral-500 dark:bg-neutral-700 hover:bg-neutral-600 dark:hover:bg-neutral-800 rounded-full;
  }

  .my-react-select-container .my-react-select__multi-value__remove .css-tj5bde-Svg {
    @apply text-neutral-200 dark:text-neutral-400;
  }

  /* Clear and dropdown indicator */
  .my-react-select-container .my-react-select__clear-indicator,
  .my-react-select-container .my-react-select__dropdown-indicator {
    @apply text-neutral-400 dark:text-neutral-600;
  }

  .my-react-select-container .my-react-select__clear-indicator:hover,
  .my-react-select-container .my-react-select__dropdown-indicator:hover {
    @apply text-neutral-500 dark:text-neutral-500;
  }

  .my-react-select-container .my-react-select__clear-indicator .css-tj5bde-Svg,
  .my-react-select-container .my-react-select__dropdown-indicator .css-tj5bde-Svg {
    @apply fill-current;
  }
}
\`\`\`

then for each element from \`react-select\` add \`className\` and \`classNamePrefix\`
\`\`\`jsx
<Select 
options={options}
className="my-react-select-container"
classNamePrefix="my-react-select" />
\`\`\`
`