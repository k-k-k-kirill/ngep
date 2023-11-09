import type { Schema, Attribute } from '@strapi/strapi';

export interface ActionsButton extends Schema.Component {
  collectionName: 'components_actions_buttons';
  info: {
    displayName: 'Button';
    icon: 'play';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Url: Attribute.String;
  };
}

export interface SectionsHeroSection extends Schema.Component {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'stack';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
    Image: Attribute.Media;
    CTA: Attribute.Component<'actions.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'actions.button': ActionsButton;
      'sections.hero-section': SectionsHeroSection;
    }
  }
}
