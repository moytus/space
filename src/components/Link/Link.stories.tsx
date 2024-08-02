import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';
import { Globe, Github, Linkedin, Twitter } from 'lucide-react';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    links: { control: 'object' },
  },
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

const defaultLinks = [
  { 
    name: 'Personal Website', 
    url: 'https://example.com', 
    icon: Globe, 
    color: 'from-green-400 to-green-600' 
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com', 
    icon: Github, 
    color: 'from-gray-400 to-gray-600' 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com', 
    icon: Linkedin, 
    color: 'from-blue-400 to-blue-600' 
  },
  { 
    name: 'Twitter', 
    url: 'https://twitter.com', 
    icon: Twitter, 
    color: 'from-sky-400 to-sky-600' 
  },
];

export const Default: Story = {
  args: {
    links: defaultLinks,
  },
};

export const SingleLink: Story = {
  args: {
    links: [defaultLinks[0]],
  },
};

export const CustomColors: Story = {
  args: {
    links: [
      { ...defaultLinks[0], color: 'from-purple-400 to-purple-600' },
      { ...defaultLinks[1], color: 'from-yellow-400 to-yellow-600' },
    ],
  },
};
