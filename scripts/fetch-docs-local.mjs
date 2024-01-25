/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-escape */
import dotenv from 'dotenv'

import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkGfm from 'remark-gfm'

dotenv.config()


const __dirname = path.resolve()

const docsDirectory = process.env.DOCS_DIR
  ? path.resolve(process.env.DOCS_DIR)
  : path.join(process.cwd(), './node_modules/payload/docs')

console.log(`Fetching docs from: ${docsDirectory}`)

function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')
  

    return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const topicOrder = [
    'Getting-Started',
    'Configuration',
    'Database',
    'Fields',
    'Admin',
    'Rich-Text',
    'Live-Preview',
    'Access-Control',
    'Hooks',
    'Authentication',
    'Versions',
    'Upload',
    'GraphQL',
    'REST-API',
    'Local-API',
    'Queries',
    'Production',
    'Email',
    'TypeScript',
    'Plugins',
    'Integrations',
    'Cloud',
  ]

  async function getHeadings(source) {
    const headingLines = source.split('\n').filter(line => {
      return line.match(/^#{1,3}\s.+/gm)
    })
  
    return headingLines.map(raw => {
      const text = raw.replace(/^###*\s/, '')
      const level = raw.slice(0, 3) === '###' ? 3 : 2
      return { text, level, id: slugify(text) }
    })
  }