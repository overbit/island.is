import { Locale, defaultLanguage } from './I18n'

export interface AnchorAttributes
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  as: string
}

export type ContentType =
  | 'article'
  | 'page'
  | 'category'
  | 'contentcategory'
  | 'articlecategory'
  | 'news'
  | 'search'
  | 'lifeevent'
  | 'lifeeventpage'
  | 'adgerdir'
  | 'vidspyrna-frontpage'

export const routes: Record<ContentType, Record<Locale, string>> = {
  article: {
    is: '/[slug]',
    en: '/en/[slug]',
  },
  page: {
    is: '/stofnanir/[slug]',
    en: '/en/organizations/[slug]',
  },
  category: {
    is: '/flokkur/[slug]',
    en: '/en/category/[slug]',
  },
  articlecategory: {
    is: '/flokkur/[slug]',
    en: '/en/category/[slug]',
  },
  contentcategory: {
    is: '/flokkur/[slug]',
    en: '/en/category/[slug]',
  },
  news: {
    is: '/frett/[slug]',
    en: '/en/news/[slug]',
  },
  search: {
    is: '/leit/[slug]',
    en: '/en/search/[slug]',
  },
  lifeevent: {
    is: '/lifsvidburdur/[slug]',
    en: '/en/life-event/[slug]',
  },
  lifeeventpage: {
    is: '/lifsvidburdur/[slug]',
    en: '/en/life-event/[slug]',
  },
  adgerdir: {
    is: '/covid-adgerdir/[slug]',
    en: '/en/covid-operations/[slug]',
  },
  'vidspyrna-frontpage': {
    is: '/covid-adgerdir',
    en: '/en/covid-operations',
  },
}

export const replaceSlugInPath = (
  path: string,
  replacement: string,
): string => {
  return path.replace(/\[\w+\]/, replacement)
}

export const removeSlugFromPath = (path: string): string => {
  return path.replace(/\/\[\w+\]/g, '')
}

export const pathNames = (
  locale: Locale = defaultLanguage,
  contentType: ContentType,
  slugs?: Array<string>,
): AnchorAttributes => {
  let path: AnchorAttributes = { as: '/', href: '/' }
  const type = String(contentType).toLowerCase()

  if (routes[type]) {
    const typePath: string = routes[type][locale]
    path = { as: typePath, href: typePath }

    if (slugs && slugs.length > 0) {
      for (let i = 0; i < slugs.length; i++) {
        path.as = replaceSlugInPath(typePath, slugs[i])
        if (type === 'page' && slugs[i] === 'stafraent-island') {
          path.href = path.as
        }
      }
    } else {
      path.as = removeSlugFromPath(path.as)
      path.href = removeSlugFromPath(path.href)
    }
    return path
  }
  return path
}

export default pathNames
