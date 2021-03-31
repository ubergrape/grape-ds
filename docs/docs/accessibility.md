---
id: accessibility
title: Accessibility
sidebar_label: Accessibility
---
## Usable for everyone
Grape aims to make communication easy for everyone. This includes unexperienced people as well as power users, and people who have disabilities - be it **situational**, **temporary** or **permanent**. This means that we consider accessibility at the core of how we design and develop our products. Inclusive design is the responsibility of everyone from product management and user experience design to development and support.

Using our components and design guidelines helps you to improve accessibility and consistency for building accessible experiences. They are part of building accessible products. We aim for [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/) AA compliance.  
### Four principles of the Web Content Accessibility Guidelines
To make sure our products are accessible for everyone, follow the [Four principles of accessibility](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head):
- **Perceivable**: People must be able to perceive the information being presented by at least one of their senses.
- **Operable**: The interface must be operable through a variety of input methods (it cannot require interaction that a person cannot perform).
- **Understandable**: Information and the operation of the user interface must be understandable.
- **Robust**: Content must be robust enough that it can be interpreted reliably by a variety of assistive technologies (and should remain accessible as technologies advance).
## Designing and developing inclusive experiences
Disablities may affect how people see, hear, move, learn, understand and therefor interact with our products. We thrive to design and develop solutions that enable and support as many people as possible including those with disabilities in the following categories:
- Visual: different kinds of sight like color blindness, low vision, blindness
- Hearing: disablities related to sound 
- Mobility: impairment of motor functions affecting movements of the body
- Cognitive: understanding, memory, concentration, judgement, problem solving

### Keyboard navigation
All interactive elements need to be able to be accessed and interacted with using the keyboard alone. This not only helps people with motor impairments, but also supports power users. Tabbing should be used to navigate to and activate stand-alone controls, arrow keys are used to navigate within a composite control (group of standalone controls like a tab group, select list or list of checkboxes).  

Keyboard focus should follow the same way as the eye would scan the page. Consider focus flow in logical order for navigating the interface. Avoid using focus to select or trigger events as people might need the element just for navigating to another elelemt further down the focus flow without selecting it. Make focus visible when navigating with the keyboard and hide it for interaction with mouse or trackpad.  

Make sure that anything that can be seen when hovering with a mouse can also be seen when navigating with the keyboard. Avoid disclosing important information and actions only on hover to not exclude people using touch devices.  
### Meaningful writing
Consistent and easy to understand text in plain language helps make the interface understandable for everyone. Avoid acronyms and idioms whenever possible. People using screen readers hear every UI element, so make sure to only announce those that are relevant (exclude decorative elements), and keep the text short and meaningful.  

Link text should be meaningful to help people who use assistive technologies navigate easily and make proper decisions. If you need to keep the link text short, consider adding a more descriptive text only disclosed to assistive technology users.  

Input fields in forms should have a visible label that makes the purpose of the field clear. Help text should and error messages should guide the person to a successful completion of the desired action and must be easy to understand and follow.  

Describe what an element (like a button, link) does and what happens when being activated.  
### Colors
#### Contrast
Text and user interface components on a page must meet a specific minimum contrast ratio to pass WCAG 2.1 AA standards. This affects people with low vision as well as people in situations or environments which negatively affect vision (think of poor lighting conditions like looking at a screen outside on a bright day). See also our [color guidelines](./color.md).
#### Use of color
Include visual cues and make sure color isn't the sole identifier to convey information. Use supporting visual cues like additional icons, different stroke widths or patterns to communicate your message. A good way to test for this is to look at the designs/application in grayscale mode and check if the meaning is still clear. This affects people who have low vision, or are color blind or blind.  
### Testing
Ensure that tasks within the application can be accomplished by anyone, including people with disabilities. Test not only on the component level, but also the whole journey using assistive technology and keyboard alone.
