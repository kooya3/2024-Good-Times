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
              | {
                  title: string;
                  description?: string | null;
                  enableLink?: boolean | null;
                  link?: {
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
                  };
                  id?: string | null;
                }[]
              | null;
          };
          id?: string | null;
          blockName?: string | null;
          blockType: 'cardGrid';
        }
        | {
            caseStudiesHighlightFields: {
              richText: {
                [k: string]: unknown;
              }[];
              caseStudies: (string | CaseStudy)[];
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'caseStudiesHighlight';
          }
        | {
            codeFeatureFields: {
              disableBlockSpacing?: boolean | null;
              disableIndent?: boolean | null;
              heading: string;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
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
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              language?: ('none' | 'js' | 'ts') | null;
              label?: string | null;
              code: string;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'codeFeature';
          }
          | {
              contentFields: {
                useLeadingHeader?: boolean | null;
                leadingHeader?:
                  | {
                      [k: string]: unknown;
                    }[]
                  | null;
                layout?: ('oneColumn' | 'twoColumns' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns') | null;
                columnOne: {
                  [k: string]: unknown;
                }[];
                columnTwo?:
                  | {
                      [k: string]: unknown;
                    }[]
                  | null;
                columnThree?:
                  | {
                      [k: string]: unknown;
                    }[]
                  | null;
              };
              id?: string | null;
              blockName?: string | null;
              blockType: 'content';
            }
            | {
                contentGridFields?: {
                  forceDarkBackground?: boolean | null;
                  useLeadingHeader?: boolean | null;
                  leadingHeader?:
                    | {
                        [k: string]: unknown;
                      }[]
                    | null;
                  cells?:
                    | {
                        content: {
                          [k: string]: unknown;
                        }[];
                        id?: string | null;
                      }[]
                    | null;
                };
                id?: string | null;
                blockName?: string | null;
                blockType: 'contentGrid';
              }

              | {
                formFields: {
                  container?: boolean | null;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  form: string | Form;
                };
                id?: string | null;
                blockName?: string | null;
                blockType: 'form';
              }
            | {
                hoverHighlightsFields: {
                  richText: {
                    [k: string]: unknown;
                  }[];
                  addRowNumbers?: boolean | null;
                  highlights?:
                    | {
                        title: string;
                        description: string;
                        media: string | Media;
                        enableLink?: boolean | null;
                        link?: {
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
                        };
                        id?: string | null;
                      }[]
                    | null;
                };
                id?: string | null;
                blockName?: string | null;
                blockType: 'hoverHighlights';
              }
            | {
                linkGridFields?: {
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
                blockType: 'linkGrid';
              }
              | {
                  mediaBlockFields: {
                    position?: ('default' | 'wide') | null;
                    media: string | Media;
                    caption?:
                      | {
                          [k: string]: unknown;
                        }[]
                      | null;
                  };
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'mediaBlock';
                }
              | {
                  mediaContentFields: {
                    alignment?: ('contentMedia' | 'mediaContent') | null;
                    container?: boolean | null;
                    richText: {
                      [k: string]: unknown;
                    }[];
                    enableLink?: boolean | null;
                    link?: {
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
                    media: string | Media;
                  };
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'mediaContent';
                }
                | {
                    pricingFields?: {
                      plans?:
                        | {
                            name: string;
                            hasPrice?: boolean | null;
                            price?: string | null;
                            title?: string | null;
                            description?: string | null;
                            enableLink?: boolean | null;
                            link?: {
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
                            };
                            features?:
                              | {
                                  icon?: ('check' | 'x') | null;
                                  feature?: string | null;
                                  id?: string | null;
                                }[]
                              | null;
                            id?: string | null;
                          }[]
                        | null;
                      disclaimer?: string | null;
                    };
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'pricing';
                  }
                  | {
                      reusableContentBlockFields: {
                        reusableContent: string | ReusableContent;
                      };
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'reusableContentBlock';
                    }
                    | {
                        sliderFields: {
                          useLeadingHeader?: boolean | null;
                          leadingHeader?:
                            | {
                                [k: string]: unknown;
                              }[]
                            | null;
                          sliderType: 'quoteSlider' | 'imageSlider';
                          imageSlides?:
                            | {
                                image: string | Media;
                                id?: string | null;
                              }[]
                            | null;
                          quoteSlides?:
                            | {
                                richText: {
                                  [k: string]: unknown;
                                }[];
                                quoteDate: string;
                                id?: string | null;
                              }[]
                            | null;
                        };
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'slider';
                      }
                      | {
                          stepsFields: {
                            steps: {
                              layout?:
                                | (
                                    | {
                                        codeFeatureFields: {
                                          disableBlockSpacing?: boolean | null;
                                          disableIndent?: boolean | null;
                                          heading: string;
                                          richText: {
                                            [k: string]: unknown;
                                          }[];
                                          enableLink?: boolean | null;
                                          link?: {
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
                                            appearance?: ('default' | 'primary' | 'secondary') | null;
                                          };
                                          language?: ('none' | 'js' | 'ts') | null;
                                          label?: string | null;
                                          code: string;
                                        };
                                        id?: string | null;
                                        blockName?: string | null;
                                        blockType: 'codeFeature';
                                      }
                                    | {
                                        contentFields: {
                                          useLeadingHeader?: boolean | null;
                                          leadingHeader?:
                                            | {
                                                [k: string]: unknown;
                                              }[]
                                            | null;
                                          layout?:
                                            | ('oneColumn' | 'twoColumns' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns')
                                            | null;
                                          columnOne: {
                                            [k: string]: unknown;
                                          }[];
                                          columnTwo?:
                                            | {
                                                [k: string]: unknown;
                                              }[]
                                            | null;
                                          columnThree?:
                                            | {
                                                [k: string]: unknown;
                                              }[]
                                            | null;
                                        };
                                        id?: string | null;
                                        blockName?: string | null;
                                        blockType: 'content';
                                      }
                                    | {
                                        hoverHighlightsFields: {
                                          richText: {
                                            [k: string]: unknown;
                                          }[];
                                          addRowNumbers?: boolean | null;
                                          highlights?:
                                            | {
                                                title: string;
                                                description: string;
                                                media: string | Media;
                                                enableLink?: boolean | null;
                                                link?: {
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
                                                };
                                                id?: string | null;
                                              }[]
                                            | null;
                                        };
                                        id?: string | null;
                                        blockName?: string | null;
                                        blockType: 'hoverHighlights';
                                      }
                                      | {
                                          stickyHighlightsFields?: {
                                            highlights?:
                                              | {
                                                  richText: {
                                                    [k: string]: unknown;
                                                  }[];
                                                  enableLink?: boolean | null;
                                                  link?: {
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
                                                  type?: ('code' | 'media') | null;
                                                  code?: string | null;
                                                  media?: string | Media | null;
                                                  id?: string | null;
                                                }[]
                                              | null;
                                          };
                                          id?: string | null;
                                          blockName?: string | null;
                                          blockType: 'stickyHighlights';
                                        }
                                    )[]
                                  | null;
                                id?: string | null;
                              }[];
                            };
                            id?: string | null;
                            blockName?: string | null;
                            blockType: 'steps';
                          }
                          | {
                              stickyHighlightsFields?: {
                                highlights?:
                                  | {
                                      richText: {
                                        [k: string]: unknown;
                                      }[];
                                      enableLink?: boolean | null;
                                      link?: {
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
                                      type?: ('code' | 'media') | null;
                                      code?: string | null;
                                      media?: string | Media | null;
                                      id?: string | null;
                                    }[]
                                  | null;
                              };
                              id?: string | null;
                              blockName?: string | null;
                              blockType: 'stickyHighlights';
                            }
                        )[]
                      | null;
                      slug?: string | null;
                      url?: string | null;
                      meta?: {
                        title?: string | null;
                        description?: string | null;
                        image?: string | Media | null;
                      };
                      updatedAt: string;
                      createdAt: string;
                      _status?: ('draft' | 'published') | null;
                    }

                    export interface Media {
                      id: string;
                      alt: string;
                      darkModeFallback?: string | Media | null;
                      updatedAt: string;
                      createdAt: string;
                      url?: string | null;
                      filename?: string | null;
                      mimeType?: string | null;
                      filesize?: number | null;
                      width?: number | null;
                      height?: number | null;
                    }
                    

                    export interface Page {
                      id: string;
                      title: string;
                      fullTitle?: string | null;
                      hero: {
                        type: 'default' | 'contentMedia' | 'form' | 'home' | 'livestream' | 'centeredCarousel';
                        livestream?: {
                          id?: string | null;
                          date: string;
                          hideBreadcrumbs?: boolean | null;
                          richText?:
                            | {
                                [k: string]: unknown;
                              }[]
                            | null;
                          guests?:
                            | {
                                name?: string | null;
                                link?: string | null;
                                image?: string | Media | null;
                                id?: string | null;
                              }[]
                            | null;
                        };
                        commandLine?: string | null;
                        richText?:
                          | {
                              [k: string]: unknown;
                            }[]
                          | null;
                        sidebarContent?:
                          | {
                              [k: string]: unknown;
                            }[]
                          | null;
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
                                appearance?: ('default' | 'primary' | 'secondary') | null;
                              };
                              id?: string | null;
                            }[]
                    