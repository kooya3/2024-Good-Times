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
                        | ({
                            relationTo: 'posts';
                            value: string | Post;
                          } | null)
                        | ({
                            relationTo: 'case-studies';
                            value: string | CaseStudy;
                          } | null);
                      url?: string | null;
                      label: string;
                    };
                    id?: string | null;
                  }[]
                | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            cardGridFields: {
              richText: {
                [k: string]: unknown;
              }[];
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
                        | ({
                            relationTo: 'posts';
                            value: string | Post;
                          } | null)
                        | ({
                            relationTo: 'case-studies';
                            value: string | CaseStudy;
                          } | null);
                      url?: string | null;
                      label: string;
                    };
                    id?: string | null;
                  }[]
                | null;
              cards?:
