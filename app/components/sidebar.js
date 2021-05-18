/* eslint-disable ember/require-tagless-components */
/* eslint-disable ember/no-classic-components */
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { guide, contributing, api } from '../static/sidebar';

export default class Sidebar extends Component {
  @service router;
  tagName = 'aside';
  classNames = ['sidebar'];
  sidebarData = [guide, api, contributing];
  click(e) {
    e.target.classList.add('active');
    const headingRef = e.target.getAttribute('anchor');
    const $article = document.querySelector('article');
    const $headingRef = $article.querySelector(headingRef);
    if (headingRef) {
      $headingRef.scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
      });
    }
  }
}
