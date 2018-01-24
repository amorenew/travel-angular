import {storiesOf} from '@storybook/angular';
import {HeadComponent} from '../src/app/head/head.component';

storiesOf('My Button', module).add('with some emoji', () => ({
    component: HeadComponent,
    props: {
        text: '😀 😎 👍 💯'
    }
})).add('with some emoji and action', () => ({
    component: HeadComponent,
    props: {
        text: '😀 😎 👍 💯'

    }
}));
