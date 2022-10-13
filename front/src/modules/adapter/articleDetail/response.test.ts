import { getResCategory } from '@/modules/adapter/articleDetail/response';
import { Res } from '@/modules/interfaces/response/articleDetail';

describe('Adapter/ArticleDetail/Response', () => {
  test('レスポンスに変換される/カテゴリ', () => {
    const res: Res = {
      strapi: {
        categories: {
          data: [{ id: 1, attributes: { name: 'name1' } }],
        },
        favoriteBlog: {
          data: {
            attributes: {
              toco_blogs: {
                data: [
                  {
                    attributes: {
                      urlid: 'urlid',
                      mainTitle: 'mainTitle',
                      thumbnail: {
                        data: {
                          attributes: {
                            url: 'url',
                            formats: {
                              thumbnail: {
                                url: 'url',
                              },
                              small: {
                                url: 'url',
                              },
                            },
                          },
                        },
                      },
                    },
                    id: 1,
                  },
                ],
              },
            },
          },
        },
        storyBlogs: {
          data: [
            {
              id: 1,
              attributes: {
                thumbnail: {
                  data: {
                    attributes: {
                      url: 'url',
                      formats: {
                        thumbnail: {
                          url: 'url',
                        },
                        small: {
                          url: 'url',
                        },
                      },
                    },
                  },
                },
                titleSub: 'titleSub',
                title: 'title',
              },
            },
          ],
        },
        tocoBlog: {
          data: {
            id: 1,
            attributes: {
              mainTitle: 'mainTitle',
              mainText: 'mainText',
              featureText: 'featureText',
              seoDescription: 'seoDescription',
              updatedAt: new Date('2022-10-11T11:21:21.949Z'),
              createdAt: new Date('2022-10-11T11:11:54.673Z'),
              category: {
                data: {
                  attributes: {
                    name: 'name',
                    toco_blogs: {
                      data: [
                        {
                          attributes: {
                            urlid: 'aarrr-rarra',
                            mainTitle: 'mainTitle',
                            thumbnail: {
                              data: {
                                attributes: {
                                  url: 'url',
                                  formats: {
                                    small: {
                                      url: 'url',
                                    },
                                  },
                                },
                              },
                            },
                          },
                          id: 1,
                        },
                      ],
                    },
                  },
                  id: 1,
                },
              },
              thumbnail: {
                data: {
                  attributes: {
                    url: 'url',
                  },
                },
              },
            },
          },
        },
      },
    };

    const response = getResCategory(res);
    const result = [
      {
        attributes: {
          name: 'name1',
        },
        id: 1,
      },
    ];
    expect(result).toEqual(response);
  });
});
