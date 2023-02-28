import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { HeaderAppComponent } from './header-app.component';
import { LanguageComponent } from './language/language.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

import { PLANTILLA_HTML } from "../../../constants/storybook.constant";
import { APP_PREFIX } from '../../../constants/app.constant';

const TITULO = `HEADER`;

const SUMMARY = `
    El componente <strong>HEADER</strong> representa la barra superior de la aplicación, en el se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    
`;

const COMPONENT_BASE = `
<div style="width: 100%;margin-top: 20px;">
    <header-app/>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Header',
    component: HeaderAppComponent,
    decorators: [
        moduleMetadata({
            declarations: [LanguageComponent, NotificationComponent, ProfileUserComponent],
            imports: [CommonModule]
        })
    ]
} as Meta;

const Template: Story = (args) => ({
    props: args,
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    APP_PREFIX
};