import React from 'react'
import { ScrollBar } from '../../components/scrollbar'
import { Button } from '../../components/button'

export default {
  title: 'Components/ScrollBar',
  component: ScrollBar,
}

export const Base = (): JSX.Element => (
  <div
    style={{
      height: '500px',
      display: 'flex',
    }}
  >
    <ScrollBar style={{ width: 150, backgroundColor: 'white' }}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        fringilla justo id ex rhoncus mattis eu eget ipsum. Etiam ac dui mauris.
        Maecenas euismod purus tortor, et rutrum sem consequat sit amet. Nulla
        facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam erat volutpat.
      </div>
    </ScrollBar>
    <ScrollBar style={{ width: 150, backgroundColor: 'white' }}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        fringilla justo id ex rhoncus mattis eu eget ipsum. Etiam ac dui mauris.
        Maecenas euismod purus tortor, et rutrum sem consequat sit amet. Nulla
        facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam erat volutpat. Maecenas vitae tempus est. Aliquam laoreet in
        lacus nec ullamcorper. Aliquam et efficitur nulla. Phasellus quis leo
        orci. Maecenas eget nisl sit amet odio hendrerit convallis. Quisque ut
        commodo lectus. Vivamus sagittis eu dolor quis rutrum. Aliquam erat
        volutpat. Proin sit amet facilisis libero. Phasellus id dapibus orci, in
        pulvinar quam. Maecenas sed dapibus turpis, ac rhoncus risus. In turpis
        tellus, pretium sit amet ultrices a, finibus ut nibh. Cras placerat
        augue a lorem volutpat, id sagittis nunc rutrum. Morbi lectus ipsum,
        ultricies in dolor non, rutrum tempor risus. Aenean accumsan quis ante
        ut mattis. Aenean rhoncus, lorem ut aliquam convallis, velit purus
        semper nunc, non molestie tortor nisl auctor erat. Nulla facilisi. Duis
        porttitor est malesuada sapien tincidunt, varius viverra est volutpat.
        Donec lacinia ante urna, in vestibulum odio tempor et. Aenean placerat
        imperdiet leo, nec consequat tortor ullamcorper tempor. Suspendisse
        ullamcorper libero et placerat congue. Quisque iaculis dolor nec feugiat
        semper. Vivamus congue sem sit amet nisi dignissim, vel accumsan mi
        eleifend. Sed sit amet quam placerat, dictum nulla non, sollicitudin
        diam. Duis vel faucibus enim. Praesent enim nisl, auctor id lectus vel,
        sodales consectetur dui. Vivamus porttitor at tellus at aliquam.
        Pellentesque ut urna commodo, vestibulum magna non, porta ante. Donec
        quis leo ac nisi vehicula euismod. Fusce mollis, ipsum in iaculis
        eleifend, libero erat posuere velit, sed aliquet erat lorem a enim.
        Curabitur non lorem ligula. Maecenas viverra id mi vitae pretium. Sed
        quis rhoncus risus, ut luctus turpis. Donec nec ante bibendum, maximus
        nibh at, vestibulum odio. Nulla facilisi. Sed volutpat dui nec metus
        hendrerit aliquam. Cras malesuada nulla nec odio bibendum, non placerat
        leo pulvinar. Phasellus faucibus tempor augue, et accumsan lacus dictum
        vel. Vestibulum auctor tellus in volutpat pretium. Sed eleifend odio
        eget mollis lacinia. Praesent lobortis sodales mollis. In sit amet neque
        rhoncus, mollis ligula nec, commodo sem. Fusce ultrices lectus viverra
        quam facilisis aliquet. Vivamus a consequat mi. Praesent vitae lacinia
        tellus, vitae finibus odio.
      </div>
    </ScrollBar>
    <ScrollBar style={{ width: 150, backgroundColor: 'white' }}>
      <div>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </div>
    </ScrollBar>
  </div>
)
