import {storiesOf} from '@storybook/angular';
import {HeaderComponent} from '../app/header/header.component';

storiesOf('My Button', module).add('with some emoji', () => ({
    component: HeaderComponent,
    props: {
        text: '😀 😎 👍 💯'
    }
})).add('with some emoji and action', () => ({
    component: HeaderComponent,
    props: {
        text: '😀 😎 👍 💯'

    }
}));
