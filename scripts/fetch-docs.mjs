/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-escape */
import dotenv from 'dotenv'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import fetch from 'node-fetch'
import path from 'path'
import remarkGfm from 'remark-gfm'

dotenv.config()

const __dirname = path.resolve()

const decodeBase64 = string => {
  const buff = Buffer.from(string, 'base64')
  return buff.toString('utf8')
}

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

const githubAPI = 'https://api.github.com/repos/payloadcms/payload'

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

const headers = {
    Accept: 'application/vnd.github.v3+json.html',
    Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
  }
  