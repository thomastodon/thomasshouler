import * as firebase from 'firebase/app';
import 'firebase/storage';

export const getImages = (projectId) => firebase
  .storage()
  .ref('my-projects/' + projectId)
  .listAll()
  .then(async result => {
    return await result.items
      .filter(item => item.name !== 'id.png')
      .map(async item => {
        const image = {projectId: projectId};
        image['order'] = parseInt(item.name.replace('.png', '')) - 1;
        await item.getMetadata().then(metadata => image['id'] = metadata.generation);
        await item.getDownloadURL().then(url => image['url'] = url);
        return image;
      });
  });