import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductCard } from 'components/UI/molecules/ProductCard'
import { productList } from 'data'

export default {
  title: 'molecules/ProductCard',
  component: ProductCard,
  argTypes: {
  },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Item = Template.bind({});
Item.args = {
  product: productList[0]
};
