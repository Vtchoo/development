import Home from '../pages/home'

import PageUseDebounce from "../pages/hooks/useDebounce"

import PageImgWithHeaders from '../pages/components/ImgWithHeaders'
import PageCustomSelect from '../pages/components/CustomSelect'
import PageBlockchain from '../pages/concepts/Blockchain'

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
const pageBlockchain: Page = {
    name: 'Blockchain',
    path: '/development/blockchain',
    component: PageBlockchain
}

const pages = [
    home,

    pageUseDebounce,
    
    pageImgWithHeaders,
    pageCustomSelect,

    pageBlockchain
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
    },
    {
        name: 'Concepts',
        pages: [
            pageBlockchain
        ]
    }
]

export { sections, pages }
export type { Section, Page }
