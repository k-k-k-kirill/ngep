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

export interface RepeatersProcessStep extends Schema.Component {
  collectionName: 'components_repeaters_process_steps';
  info: {
    displayName: 'Process Step';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
  };
}

export interface SectionsAboutSection extends Schema.Component {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'About Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Content: Attribute.RichText;
  };
}

export interface SectionsCtaSection extends Schema.Component {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'CTA Section';
  };
  attributes: {
    Title: Attribute.String;
    Button: Attribute.Component<'actions.button'>;
    Image: Attribute.Media;
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

export interface SectionsProcessSection extends Schema.Component {
  collectionName: 'components_sections_process_sections';
  info: {
    displayName: 'Process Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
    Steps: Attribute.Component<'repeaters.process-step', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'actions.button': ActionsButton;
      'repeaters.process-step': RepeatersProcessStep;
      'sections.about-section': SectionsAboutSection;
      'sections.cta-section': SectionsCtaSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.process-section': SectionsProcessSection;
    }
  }
}
