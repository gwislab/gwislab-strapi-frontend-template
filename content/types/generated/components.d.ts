import type { Struct, Schema } from '@strapi/strapi';

export interface ComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_title';
  info: {
    displayName: 'Title';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subTitles: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsMetaTag extends Struct.ComponentSchema {
  collectionName: 'components_components_meta_tags';
  info: {
    displayName: 'MetaTag';
  };
  attributes: {
    name: Schema.Attribute.String;
    content: Schema.Attribute.String;
  };
}

export interface ComponentsMetaData extends Struct.ComponentSchema {
  collectionName: 'components_components_meta_data';
  info: {
    displayName: 'MetaData';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    metaTags: Schema.Attribute.Component<'components.meta-tag', true>;
    slug: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    titles: Schema.Attribute.Component<'components.title', true>;
  };
}

export interface ComponentsFooter extends Struct.ComponentSchema {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    appName: Schema.Attribute.String;
    copyRightText: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    links: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface PagesMap extends Struct.ComponentSchema {
  collectionName: 'components_pages_maps';
  info: {
    displayName: 'Map';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.title': ComponentsTitle;
      'components.meta-tag': ComponentsMetaTag;
      'components.meta-data': ComponentsMetaData;
      'components.link': ComponentsLink;
      'components.header': ComponentsHeader;
      'components.footer': ComponentsFooter;
      'pages.map': PagesMap;
    }
  }
}
