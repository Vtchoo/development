import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sections, Section, Page } from './pages'
import style from './style.module.css'

function Sidebar() {
    

    const [openSection, setOpenSection] = useState<Section>()
    const [activeRoute, setActiveRoute] = useState('/')

    function handleSectionClick(section: Section){
        setOpenSection(section === openSection ? undefined : section)

        if (section.path)
            setActiveRoute(section.path)
    }

    function handlePageClick(page: Page) {
        setActiveRoute(page.path)
    }

    return (
        <ul className={style.sidebar}>
            {sections.map(section =>
                <div>
                    {section.path ?
                        <Link to={section.path} onClick={() => handleSectionClick(section)} className={style.link}>
                            <div className={`${style.sectionName} ${activeRoute === section.path && style.active}`}>
                                <span>{section.name}</span>
                            </div>
                        </Link>
                        :
                        <div className={style.sectionName} onClick={() => handleSectionClick(section)}>
                            <span>{section.name}</span>
                        </div>
                    }
                    <div className={`${style.pageList} ${section === openSection && style.open}`}>
                        {section.pages && section.pages.map(page =>
                            <Link to={page.path} className={style.link} onClick={() => handlePageClick(page)}>
                                <div className={`${style.pageName}  ${activeRoute === page.path && style.active}`}>
                                    {page.name}
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </ul>
    )
}

export default Sidebar