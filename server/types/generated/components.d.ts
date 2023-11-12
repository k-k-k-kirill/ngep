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

export interface ActionsLink extends Schema.Component {
  collectionName: 'components_actions_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Url: Attribute.String;
    Title: Attribute.String;
  };
}

export interface RepeatersBenefit extends Schema.Component {
  collectionName: 'components_repeaters_benefits';
  info: {
    displayName: 'Benefit';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
  };
}

export interface RepeatersFeature extends Schema.Component {
  collectionName: 'components_repeaters_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
  };
}

export interface RepeatersIdustry extends Schema.Component {
  collectionName: 'components_repeaters_idustries';
  info: {
    displayName: 'Idustry';
  };
  attributes: {
    Title: Attribute.String;
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

export interface SectionsBenefitsSection extends Schema.Component {
  collectionName: 'components_sections_benefits_sections';
  info: {
    displayName: 'Benefits Section';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Benefits: Attribute.Component<'repeaters.benefit', true>;
  };
}

export interface SectionsContactSection extends Schema.Component {
  collectionName: 'components_sections_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    Title: Attribute.String;
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

export interface SectionsFeaturesSection extends Schema.Component {
  collectionName: 'components_sections_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Features: Attribute.Component<'repeaters.feature', true>;
  };
}

export interface SectionsFooter extends Schema.Component {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    Address: Attribute.String;
    Phone: Attribute.String;
    Email: Attribute.Email;
    PrivacyPolicy: Attribute.Component<'actions.link'>;
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

export interface SectionsIndustriesSection extends Schema.Component {
  collectionName: 'components_sections_industries_sections';
  info: {
    displayName: 'Industries Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Industries: Attribute.Component<'repeaters.idustry', true>;
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
      'actions.link': ActionsLink;
      'repeaters.benefit': RepeatersBenefit;
      'repeaters.feature': RepeatersFeature;
      'repeaters.idustry': RepeatersIdustry;
      'repeaters.process-step': RepeatersProcessStep;
      'sections.about-section': SectionsAboutSection;
      'sections.benefits-section': SectionsBenefitsSection;
      'sections.contact-section': SectionsContactSection;
      'sections.cta-section': SectionsCtaSection;
      'sections.features-section': SectionsFeaturesSection;
      'sections.footer': SectionsFooter;
      'sections.hero-section': SectionsHeroSection;
      'sections.industries-section': SectionsIndustriesSection;
      'sections.process-section': SectionsProcessSection;
    }
  }
}
