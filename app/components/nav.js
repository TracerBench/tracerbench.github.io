/* eslint-disable ember/require-tagless-components */
/* eslint-disable ember/no-classic-components */
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default class Nav extends Component {
  @service router;
  navData = [
    {
      route: 'index',
      cssClass: 'index',
      title: 'Home'
    },
    {
      route: 'docs.guide',
      cssClass: 'guide',
      title: 'Guide'
    },
    {
      route: 'docs.api',
      cssClass: 'reference',
      title: 'API Reference'
    }
  ];
}
