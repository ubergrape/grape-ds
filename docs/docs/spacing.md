---
id: spacing
title: Spacing
sidebar_label: Spacing
---
export const Space = ({children, size}) => (
  <div
    style={{
      backgroundColor: '#ccc',
      width: size,
      height: size,
    }}>
    {children}
  </div>
);

Aurora has a general spacing scale all components and the layout are based on. 
## Spacing scale
The spacing scale is used to define sizes like `width` and `height`, spacings like `padding` and `margin`, and roundedness like `border-radius`.  

Space tokens are also used for layout to arrange components on a page in relation to each other. The use of space tokens influences the density of the interface. Use larger space tokens to increase the amount of white space and disassociate sections.

| Token | px | Example
| :-- | :-- | :-- |
| space-half-x | 4 | <Space size='4px'></Space>
| space-1-x | 8 | <Space size='8px'></Space>
| space-1-half-x | 12 | <Space size='12px'></Space>
| space-2-x | 16 | <Space size='16px'></Space>
| space-2-half-x | 20 | <Space size='20px'></Space>
| space-3-x | 24 | <Space size='24px'></Space>
| space-4-x | 32 | <Space size='32px'></Space>
| space-5-x | 40 | <Space size='40px'></Space>
| space-6-x | 48 | <Space size='48px'></Space>

## Designing with space
Space in the interface should be used intentionally. This includes space elements occupy,and white space needed for elements to breath and create relationships and hierarchy.

### Relationship
Elements near each other are more related to each other than elements spread wider apart. Use space tokens to apply Gestalt Principles of proximity and common region to your interface design to create or weaken relationships of elements with each other and to group associated information.
### Hierarchy
Spacing is also used to create hierarchies. Elements with more spacing around them are considered to be more important. If they are set too close to each other, they can be easily overlooked.
