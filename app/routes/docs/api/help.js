import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class extends Route {
  @service markdownResolver;

  async model() {
    const directory = await this.markdownResolver.file('docs', 'help');
    return directory;
  }
}
