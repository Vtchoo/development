import Home from '../pages/home'

import PageUseDebounce from "../pages/hooks/useDebounce"

import PageImgWithHeaders from '../pages/components/ImgWithHeaders'
import PageCustomSelect from '../pages/components/CustomSelect'

interface Page {
    name: string,
    path: string,
    component: () => JSX.Element
    exact?: boolean
}

interface Section {
    name: string,
    path?: string,
    component?: () => JSX.Element,
    pages?: Page[]
}



//
// All pages
//

// Home
const home: Page = {
    name: 'Home',
    path: '/development/',
    component: Home,
    exact: true
}

// Hooks
const pageUseDebounce: Page =  {
    name: 'useDebounce',
    path: '/development/usedebounce',
    component: PageUseDebounce,
}

// Components
const pageImgWithHeaders: Page = {
    name: 'Img With Headers',
    path: '/development/imgwithheaders',
    component: PageImgWithHeaders
}
const pageCustomSelect: Page = {
    name: 'Custom Select',
    path: '/development/select',
    component: PageCustomSelect
}

const pages = [
    home,

    pageUseDebounce,
    
    pageImgWithHeaders,
    pageCustomSelect
]

//
// Sections
//
const sections: Section[] = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Custom hooks',
        pages: [
           pageUseDebounce
        ]
    },
    {
        name: 'Custom components',
        pages: [
            pageImgWithHeaders,
            pageCustomSelect
        ]
    }
]

export { sections, pages }
export type { Section, Page }
