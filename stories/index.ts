import {storiesOf} from '@storybook/angular';
import {HeadComponent} from '../src/app/head/head.component';
import {HeaderComponent} from '../src/app/header/header.component';

storiesOf('My Button', module).add('with some emoji', () => ({
    component: HeadComponent,
    props: {
        text: '😀 😎 👍 💯'
    }
})).add('with some emoji and action', () => ({
    component: HeaderComponent,
    props: {
        text: '😀 😎 👍 💯'

    }
}));
