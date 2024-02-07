/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */
export interface Config {
    collections: {
        announcements: Announcement;
        'case-studies': CaseStudy;
        'community-help': CommunityHelp;
        docs: Doc;
        media: Media;
        pages: Page;
        posts: Post;
        'reusable-content': ReusableContent;
        users: User;
        forms: Form;
        'form-submissions': FormSubmission;
        redirects: Redirect;
        'payload-preferences': PayloadPreference;
        'payload-migrations': PayloadMigration;
      };
      globals: {
        footer: Footer;
        'main-menu': MainMenu;
        'top-bar': TopBar;
        'feature-flags': FeatureFlag
      };
    }
    export interface Announcement {
        id: string;
        name?: string | null;
        content: {
          [k: string]: unknown;
        }[];
        updatedAt: string;
        createdAt: string;
      }
      export interface CaseStudy {
        id: string;
        title: string;
        introContent: {
          [k: string]: unknown;
        }[];
        featuredImage: string | Media;
        layout?:
        | (
            | {
                ctaFields: {
                  richText: {
                    [k: string]: unknown;
                  }[];
                  feature: 'none' | 'cpa';
                  links?:
                  | {
                    link: {
                      type?: ('reference' | 'custom') | null;
                      newTab?: boolean | null;
                      reference?:
                        | ({
                            relationTo: 'pages';
                            value: string | Page;
                          } | null)
