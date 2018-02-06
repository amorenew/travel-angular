import {storiesOf} from '@storybook/angular';
// import { withReadme, withDocs }  from 'storybook-readme';
import {HeadComponent} from '../src/app/head/head.component';
import {HeaderComponent} from '../src/app/header/header.component';
import {TitleBarComponent} from '../src/framework/title-bar/title-bar.component';
import {ContentComponent} from '../src/framework/content/content.component';
import { withNotes } from '@storybook/addon-notes';

import * as readme from '../src/framework/content/README1.md';


// import README2 from '../src/framework/content/README2.md';

// storiesOf('Button', module)
//   // add multiple READMEs (also supports only one)
//   .add('Default', withReadme(README1, () => {
//     return ContentComponent;
//   }));

//   storiesOf('Button', module)
//   // add only one README (also supports multiple as array)
//   .add('Default', withDocs(README2, () => {
//     return ContentComponent;
//   }));

// storiesOf('Component')
//   .addWithInfo(
//     'simple usage',
//     `This is the basic usage with the button with providing a label to show the text.`,
//     () =>({
//         component: HeadComponent,
//     })
//   );
// storiesOf('comp', module)
// .add(
// 'withNotes',
// withNotes({ text: marked(readme) })(() => ({
// ...story there
// }))
// );
storiesOf('Component', module)
  .add('With Markdown', withNotes(readme)(() => ({
    component: HeadComponent,
    props: {
        text: '😀 😎 👍 💯'
    }
})));

storiesOf('My Button', module)
.add('Font Test',()=>({
    component: ContentComponent
}))
.add('with some emoji', () => ({
    component: HeadComponent,
    props: {
        text: '😀 😎 👍 💯'
    }
})).add('with some emoji and action', () => ({
    component: HeaderComponent,
}));

storiesOf('TCIG Travel Framework', module)
.add('Title Bar', () => ({
    component: TitleBarComponent}));