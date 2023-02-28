import { Meta, Story } from '@storybook/angular';

import { ProfileUserComponent } from './profile-user.component';

import { PLANTILLA_HTML } from "../../../../constants/storybook.constant";
import { APP_PREFIX } from '../../../../constants/app.constant';

const TITULO = `PROFILE-USER`;

const SUMMARY = `
    El componente <strong>PROFILE-USER</strong> Representa la información del usuario logueado en el sistema, en el se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    <li><strong>photoProfile</strong>: Imagen de la foto de perfil del usuario en formato base64</li>
`;

const COMPONENT_BASE = `
<div style="min-width:150px; margin-top: 20px">
    <profile-user/>
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
  title: 'ProfileUser',
  component: ProfileUserComponent,
} as Meta;

const Template: Story = (args) => ({
    props: args,
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
}) 

export const Base = Template.bind({});
Base.args = {
    APP_PREFIX
};